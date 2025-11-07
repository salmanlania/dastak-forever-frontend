import { FaInstagram } from "react-icons/fa";
import p_img2_1 from '../assets/p_img2_1.png'
import p_img2_2 from '../assets/p_img2_2.png'
import p_img2_3 from '../assets/p_img2_3.png'
import p_img2_4 from '../assets/p_img2_4.png'

const InstagramFeed = () => {
    const images = [
        p_img2_1,
        p_img2_2,
        p_img2_3,
        p_img2_4,
        p_img2_2,
        p_img2_3,
    ];

    return (
        <section className="!bg-[#FAF9F6] py-16 px-6 sm:px-12 !text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-playfair !text-3xl sm:!text-4xl !text-[#1A1A1A] mb-3">
                    Follow Us On <span className="!text-[#C9A227]">Instagram</span>
                </h2>
                <p className="!text-gray-600 !text-sm sm:!text-base mb-12">
                    Stay inspired — discover new arrivals, behind-the-scenes, and style moments.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl cursor-pointer"
                        >
                            <img
                                src={img}
                                alt={`Instagram post ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 !bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <FaInstagram className="!text-white !text-2xl" />
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://www.instagram.com/dastakhat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 !bg-[#C9A227] !text-white font-semibold rounded-md hover:!bg-[#B5835A] transition-all duration-300"
                >
                    <FaInstagram className="!text-lg" />
                    Follow @dastakhat
                </a>
            </div>
        </section>
    );
};

export default InstagramFeed;