import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const PlaceOrder = () => {
    const [method, setMethod] = useState("cod");
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const handlePlaceOrder = () => {
        if (Object.keys(cartItems).length === 0) {
            alert("Your cart is empty!");
            return;
        }
        navigate("/orders");
    };

    return (
        <div className="!bg-[#faf8f6] border-t py-12">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.8fr_1fr] gap-10 px-4">

                <div className="relative z-10 !bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <Title text1="DELIVERY" text2="DETAILS" />

                    <form className="mt-8 grid gap-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all
                         peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484]
                         peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    First Name
                                </label>
                            </div>

                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all
                         peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484]
                         peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    Last Name
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                type="email" required />
                            <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all
                       peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484]
                       peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                type="text" required />
                            <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all
                       peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484]
                       peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                Street Address
                            </label>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484] peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    City
                                </label>
                            </div>

                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484] peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    State
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484] peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    Zipcode
                                </label>
                            </div>

                            <div className="relative">
                                <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                    type="text" required />
                                <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484] peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                    Country
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            <input className="peer w-full border border-gray-300 focus:border-[#C4A484] rounded-xl p-3 outline-none transition"
                                type="text" maxLength="11" required />
                            <label className="absolute left-3 top-3 !text-gray-500 !text-sm transition-all peer-focus:-top-2 peer-focus:!text-xs peer-focus:!text-[#C4A484] peer-valid:-top-2 peer-valid:!text-xs !bg-white px-1">
                                Phone Number
                            </label>
                        </div>

                    </form>
                </div>

                <div className="!bg-white shadow-sm border rounded-xl p-6 h-fit">
                    <CartTotal />

                    <div className="mt-10">
                        <Title text1="PAYMENT" text2="METHOD" />

                        <div className="space-y-3 mt-5">
                            {[
                                { id: "stripe", icon: assets.stripe_logo },
                                { id: "razorpay", icon: assets.razorpay_logo },
                                { id: "cod", label: "Cash on Delivery" },
                            ].map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setMethod(m.id)}
                                    type="button"
                                    className={`w-full flex items-center justify-between border rounded-lg p-4 transition-all ${method === m.id ? "border-black !bg-gray-50" : "hover:border-black/40"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`w-4 h-4 rounded-full border ${method === m.id && "!bg-black"}`}></span>
                                        {m.icon ? <img src={m.icon} className="h-5" /> : <p>{m.label}</p>}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            className="w-full !bg-[#C9A227] !text-[#FFFFFF] !text-sm py-3 rounded-lg mt-8 hover:!bg-[#B5835A] transition-all duration-300"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
