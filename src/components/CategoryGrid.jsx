import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
    const navigate = useNavigate();
    const products = useSelector((state) => state.product.items || []);

    const categories = [
        {
            name: "Signature Abayas",
            img: "/images/categories/classic.jpg",
            path: "/product?category=Signature Abayas",
        },
        {
            name: "Premium Abayas",
            img: "/images/categories/premium.jpg",
            path: "/product?category=premium",
        },
        {
            name: "Luxury Collection",
            img: "/images/categories/luxury.jpg",
            path: "/product?category=luxury",
        },
        {
            name: "Everyday Wear",
            img: "/images/categories/everyday.jpg",
            path: "/product?category=everyday",
        },
        {
            name: "Occasion Abayas",
            img: "/images/categories/occasion.jpg",
            path: "/product?category=occasion",
        },
        {
            name: "Bridal Series",
            img: "/images/categories/bridal.jpg",
            path: "/product?category=bridal",
        },
    ];

    return (
        <section className="!py-8 !bg-[#FAF9F6]">
            <div className="!text-center mb-10">
                <h2 className="font-playfair !text-3xl sm:!text-4xl !text-[#1A1A1A] mb-2">
                    Explore by Category
                </h2>
                <p className="!text-sm sm:!text-base !text-gray-600 max-w-xl mx-auto">
                    Find your perfect style — from timeless classics to luxury statement pieces.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12">
                {products.slice(0, 6).map((cat, index) => (
                    <div
                        key={index}
                        className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                        // onClick={() => navigate(cat.path)}
                        onClick={() => navigate('/products')}
                    >
                        <img
                            src={cat.image[0]}
                            alt={cat.name}
                            className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 !bg-black/40 group-hover:!bg-black/60 transition-all duration-300 flex flex-col items-center justify-center !text-center">
                            <h3 className="!text-white font-semibold !text-xl sm:!text-2xl mb-3">
                                {cat.name}
                            </h3>
                            <button className="!bg-[#C9A227] !text-white px-5 py-2 rounded-full !text-sm font-medium hover:!bg-[#B5835A] transition-all duration-300">
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;