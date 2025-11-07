import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabaseClient";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password, isSignUp, fullName }, { rejectWithValue }) => {
        try {

            console.log('data received in async action:', { email, password, isSignUp, fullName });
            // return
            let response;

            if (isSignUp) {
                response = await supabase.auth.signUp({
                    email,
                    password,
                    options: { data: { full_name: fullName } },
                });

                console.log('isSignUp response' , response)
            } else {
                response = await supabase.auth.signInWithPassword({ email, password });
            }

            if (response?.error){
                console.log('response.error' , response.error)
                throw response.error
            } ;

            const { user, session } = response.data;
            console.log('user' , user)
            console.log('session' , session)

            const customerData = {
                customer_id: user.id,
                email: user.email,
                full_name: user.user_metadata?.full_name || fullName,
                token: session.access_token,
            };

            Cookies.set("userToken", customerData.token, { expires: 7 });
            Cookies.set("customer_id", customerData.customer_id, { expires: 7 });

            return customerData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const googleLogin = createAsyncThunk(
    "user/googleLogin",
    async (_, { rejectWithValue }) => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });

            if (error) throw error;
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        customer_id: null,
        email: null,
        full_name: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.customer_id = null;
            state.email = null;
            state.token = null;
            Cookies.remove("token");
            Cookies.remove("customer_id");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.customer_id = action.payload.customer_id;
                state.email = action.payload.email;
                state.full_name = action.payload.full_name;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
