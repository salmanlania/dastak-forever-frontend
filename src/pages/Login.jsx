import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, googleLogin } from "../store/userSlice";
import { FcGoogle } from 'react-icons/fc';
import bgImage from '../assets/hero_img.png';

const Login = () => {
    const dispatch = useDispatch();
    const [currentState, setCurrentState] = useState('Login');
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const { loading, error } = useSelector((state) => state.user);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            // email: formData.email,
            // password: formData.password,
            // fullName: formData.fullName,
            email: "salmanlania@gmail.com",
            password: "12345678",
            fullName: "Muhammad Salman Lania",
            isSignUp: currentState === "Sign Up",
        }

        // return console.log('data', data)
        dispatch(
            loginUser(data)
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div
            className="relative w-full min-h-screen !bg-cover !bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 !bg-black/50 backdrop-blur-sm"></div>

            <form
                onSubmit={onSubmitHandler}
                className="relative z-10 w-[90%] sm:max-w-md !bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center !text-white shadow-2xl"
            >
                <div className="!text-center mb-6">
                    <h2 className="!text-3xl font-semibold tracking-wide">
                        {currentState === 'Login' ? 'Welcome Back!' : 'Create Account'}
                    </h2>
                    <p className="!text-gray-300 !text-sm mt-1">
                        {currentState === 'Login'
                            ? 'Please login to continue shopping'
                            : 'Join us and start exploring our store'}
                    </p>
                </div>

                {currentState === 'Login' ? null : (
                    <input
                        className="w-full px-4 py-2 mb-3 rounded-lg !bg-white/20 border border-white/30 placeholder-gray-200 !text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="text"
                        placeholder="Full Name"
                        required
                        name="fullName"
                        value="Muhammad Salman Lania"
                        // value={formData.fullName}
                        onChange={handleChange}
                    />
                )}

                <input
                    className="w-full px-4 py-2 mb-3 rounded-lg !bg-white/20 border border-white/30 placeholder-gray-200 !text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    // value={formData.email}
                    value="salmanlania@gmail.com"
                    onChange={handleChange}
                />

                <input
                    className="w-full px-4 py-2 mb-3 rounded-lg !bg-white/20 border border-white/30 placeholder-gray-200 !text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={"12345678"}
                    // value={formData.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full !bg-orange-500 hover:!bg-orange-600 !text-white font-medium py-2 mt-5 rounded-lg transition-all"
                    disabled={loading}
                >
                    {loading
                        ? "Processing..."
                        : currentState === "Login"
                            ? "Sign In"
                            : "Sign Up"}
                </button>

                <div
                    onClick={() => dispatch(googleLogin())}
                    className="flex items-center justify-center gap-3 mt-5 !bg-white !text-gray-700 w-full py-2 rounded-lg cursor-pointer hover:!bg-gray-100 transition-all">
                    <FcGoogle size={22} />
                    <span>Continue with Google</span>
                </div>

                {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}

                <div className="mt-5 !text-sm !text-gray-200">
                    {currentState === 'Login' ? (
                        <p>
                            Don’t have an account?{' '}
                            <span
                                onClick={() => setCurrentState('Sign Up')}
                                className="!text-orange-400 font-semibold cursor-pointer hover:underline"
                            >
                                Sign Up
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <span
                                onClick={() => setCurrentState('Login')}
                                className="!text-orange-400 font-semibold cursor-pointer hover:underline"
                            >
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
