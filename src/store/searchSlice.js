import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    show: false,
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
    clearSearch: (state) => {
      state.value = "";
    },
    toggleSearch: (state, action) => {
      state.show = action.payload;
    }
  }
});

export const { setSearch, clearSearch, toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;