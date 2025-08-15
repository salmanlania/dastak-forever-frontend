import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  
  const footerAction = (path) => {
    if (path === 'home') {
      navigate('/');
    } else if (path === 'about') {
      navigate('/about');
    }
  }

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li style={{cursor : 'pointer'}} onClick={() => footerAction('home')}>Home</li>
            <li style={{cursor : 'pointer'}} onClick={() => footerAction('about')}>About us</li>
            <li style={{cursor : 'pointer'}} onClick={() => footerAction()}>Delivery</li>
            <li style={{cursor : 'pointer'}} onClick={() => footerAction()}>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="tel:+92 335 2778111">+92 335 2778111</a></li>
            <li>dasthakat@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Dastakhat.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
