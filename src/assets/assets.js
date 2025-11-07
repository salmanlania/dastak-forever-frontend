import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'

// import logo from './logo.png'
import about_img from './about_img.png'
import bin_icon from './bin_icon.png'
import cart_icon from './cart_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import hero_img from './hero_img.png'
import logo from './logo1.png'
// import logo from './logo-2.1.jpg'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import razorpay_logo from './razorpay_logo.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import stripe_logo from './stripe_logo.png'
import support_img from './support_img.png'

import { v4 as uuidv4 } from 'uuid';

// watches

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img2_1, p_img2_1, p_img2_2, p_img2_3, p_img2_3, p_img2_1, p_img2_2, p_img2_3, p_img2_3, p_img2_1, p_img2_2, p_img2_3, p_img2_3, p_img2_1, p_img2_2, p_img2_3,],
        category: "Abayas",
        subCategory: "Casual Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Abaya Signature Abayas",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Abayas",
        subCategory: "Signature Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Girls Round Neck Cotton Topper",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img2_1],
        category: "Stroller Scarves",
        subCategory: "Premium Strollers",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img2_1],
        category: "Stroller Scarves",
        subCategory: "Printed Strollers",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img2_1],
        category: "Modest Wraps",
        subCategory: "Statement Wraps",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716632145448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img2_1],
        category: "Abayas",
        subCategory: "Casual Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Abaya Signature Abayas",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Abayas",
        subCategory: "Signature Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Girls Round Neck Cotton Topper",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img2_1],
        category: "Stroller Scarves",
        subCategory: "Premium Strollers",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img2_1],
        category: "Stroller Scarves",
        subCategory: "Printed Strollers",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img2_1],
        category: "Modest Wraps",
        subCategory: "Statement Wraps",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716632145448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img2_1],
        category: "Abayas",
        subCategory: "Casual Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Abaya Signature Abayas",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Abayas",
        subCategory: "Signature Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Girls Round Neck Cotton Topper",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img2_1],
        category: "Abayas",
        subCategory: "Casual Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img2_1],
        category: "Stroller Scarves",
        subCategory: "Printed Strollers",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img2_1],
        category: "Modest Wraps",
        subCategory: "Statement Wraps",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716632145448,
        bestseller: true
    },
    {
        _id: uuidv4(),
        created_at: new Date().toISOString().split('T')[0],
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img2_1],
        category: "Abayas",
        subCategory: "Casual Abayas",
        sizes: ["S", "M", "L", "XL", "XXL", "CUS"],
        date: 1716632145448,
        bestseller: true
    },
];