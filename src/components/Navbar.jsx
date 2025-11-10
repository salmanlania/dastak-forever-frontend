import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { toggleSearch } from "../store/searchSlice";

const selectCartCount = (state) => {
    let total = 0;
    for (const id in state.cart.items) {
        for (const size in state.cart.items[id]) {
            total += state.cart.items[id][size];
        }
    }
    return total;
};

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { label: "HOME", path: "/" },
        { label: "PRODUCTS", path: "/product" },
        { label: "ABOUT", path: "/about" },
        { label: "CONTACT", path: "/contact" },
    ];

    return (
        <nav className="relative px-6 md:px-16 py-6 flex items-center justify-between !bg-white shadow-sm z-50">
            {/* Logo */}
            <Link to="/"><img className="w-36 md:w-48" src={assets.logo} alt="Logo" /></Link>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-6 !text-gray-700 font-medium !text-sm">
                {menuItems.map((item, i) => (
                    <li key={i} className="relative group">
                        <NavLink
                            to={item.path}
                            className="hover:!text-[#C19A6B] transition-colors"
                        >
                            {item.label}
                        </NavLink>
                        {/* underline on hover */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] !bg-[#C19A6B] group-hover:w-full transition-all"></span>
                    </li>
                ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-5">
                {/* Search */}
                <img
                    onClick={() => { dispatch(toggleSearch(true)); navigate('/product'); }}
                    className="w-5 cursor-pointer"
                    src={assets.search_icon}
                    alt="Search"
                />

                {/* Cart */}
                <Link to="/cart" className="relative">
                    <img className="w-6" src={assets.cart_icon} alt="Cart" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center !text-xs font-semibold !text-black !bg-white rounded-full shadow">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {/* Mobile Menu Icon */}
                <img
                    onClick={() => setMobileOpen(true)}
                    className="w-6 cursor-pointer sm:hidden"
                    src={assets.menu_icon}
                    alt="Menu"
                />
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 !bg-white shadow-2xl z-50 transform transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-center py-6 border-b">
                        <img src={assets.logo} alt="Logo" className="w-32" />
                    </div>

                    {/* Close / Back */}
                    <div className="flex items-center gap-3 px-4 py-3 cursor-pointer border-b" onClick={() => setMobileOpen(false)}>
                        <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
                        <span className="!text-gray-700 font-medium">Back</span>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col mt-4">
                        {menuItems.map((item, i) => (
                            <NavLink
                                key={i}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className="px-6 py-4 border-b !text-gray-700 font-medium hover:!text-[#C19A6B] transition-colors"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
