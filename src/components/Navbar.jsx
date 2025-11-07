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
    const [visible, setVisble] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setVisble(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='flex items-center justify-between py-6 font-medium'>
                <Link to='/'><img className='w-[12rem]' src={assets.logo} alt="" /></Link>
                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                    <NavLink to="/" className='flex flex-col items-center gap-1'>
                        <p>HOME</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/product' className='flex flex-col items-center gap-1'>
                        <p>PRODUCTS</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    <img onClick={() => { dispatch(toggleSearch(true)); navigate('/product') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
                    <Link to='/cart' className='relative'>
                        <img className='w-6 min-w-6' src={assets.cart_icon} alt="" />
                        {cartCount > 0 && (
                            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 !bg-white !text-black font-semibold text-xs aspect-square rounded-full'>
                                {cartCount}
                            </p>
                        )}
                    </Link>
                    <img onClick={() => setVisble(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
                </div>

                {/* <div className={`absolute top-0 right-0 bottom-0 z-[1000] overflow-hidden !bg-white transition-all ${visible ? 'w-full' : 'w-0'} shadow-lg`} >
                    <div className='flex flex-col text-gray-600'>
                        <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3 '>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/product' className='py-2 pl-6 border'>COLLECTION</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                    </div>
                </div> */}

                <div className={`fixed top-0 left-0 h-full w-1/2 !bg-white transition-all transform ${visible ? 'translate-x-0' : '-translate-x-full'} shadow-lg`}>
                    <div className='flex flex-col text-gray-600'>
                        <div className="flex items-center justify-center py-6">
                            <img src={assets.logo} alt="Logo" className="w-24" />
                        </div>
                        <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3'>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border-b'>HOME</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/product' className='py-2 pl-6 border-b'>COLLECTION</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border-b'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6'>CONTACT</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
