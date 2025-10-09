import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>

                <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                    Go Back
                </button>
            </div>

            <p className="text-gray-400 text-sm mt-10">
                © {new Date().getFullYear()} Dasthakat. All rights reserved.
            </p>
        </section>
    );
};

export default NotFound;