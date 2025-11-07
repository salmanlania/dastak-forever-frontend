// import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../components/ProductItem";
import useError from "../hooks/useError";
import { supabase } from "../lib/supabaseClient";
import { setSearch, toggleSearch } from "../store/searchSlice";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Collection = () => {
  const products = useSelector((state) => state.product.items || []);
  const search = useSelector((state) => state.search.value);
  const showSearch = useSelector((state) => state.search.show);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showAbayaMenu, setShowAbayaMenu] = useState(false);

  const handleError = useError();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const categories = ["All", "Abayas", "Hijabs", "Niqabs", "Accessories"];
  const abayaSubcategories = [
    "Signature Abayas",
    "Premium Abayas",
    "Luxury Collection",
    "Everyday Wear",
    "Occasion Abayas",
    "Bridal Series",
  ];

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSubDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("order_id", { ascending: false });
        if (error) throw error;
        setItems(data.length > 0 ? data : products);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [products]);

  // Filter + sort logic
  useEffect(() => {
    let filtered = [...items];
    if (category !== "All") {
      filtered = filtered.filter(
        (item) => item?.category === category || item?.subCategory === category
      );
    }

    if (showSearch && search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item?.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sortType) {
      case "low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(filtered);
  }, [category, sortType, items, search, showSearch]);

  // Pagination
  const paginateProducts = (filteredProducts) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  return (
    <>
      <div className="w-full !bg-[#faf9f8] min-h-screen">
        <div className="!text-center py-12">
          <h1 className="!text-3xl sm:!text-4xl font-semibold tracking-wide uppercase !text-gray-800">
            Modest Fashion Collection
          </h1>
          <p className="!text-gray-500 !text-sm mt-2">
            Abayas • Hijabs • Niqabs • Accessories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 border-t border-b py-4 !bg-white z-40 shadow-sm relative">
          {categories.map((cat) => (
            <div key={cat} className="relative" ref={cat === "Abayas" ? dropdownRef : null}>
              <div className="hidden sm:block">
                {cat === "Abayas" ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowSubDropdown((prev) => !prev)}
                    className={`px-5 py-2 rounded-full !text-md font-medium flex items-center gap-2 transition-all duration-300 ${category === cat
                        ? "!bg-black !text-white"
                        : "!bg-gray-100 hover:!bg-gray-200 !text-gray-700"
                      }`}
                  >
                    {cat}
                    <IoChevronDown size={16} />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCategory(cat)}
                    className={`px-5 py-2 rounded-full !text-md font-medium transition-all duration-300 ${category === cat
                        ? "!bg-black !text-white"
                        : "!bg-gray-100 hover:!bg-gray-200 !text-gray-700"
                      }`}
                  >
                    {cat}
                  </motion.button>
                )}

                <AnimatePresence>
                  {cat === "Abayas" && showSubDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 !bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-[220px]"
                    >
                      {abayaSubcategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => {
                            setCategory(sub);
                            setShowSubDropdown(false);
                          }}
                          className={`block w-full !text-left px-4 py-2 !text-sm hover:!bg-gray-100 ${category === sub ? "!bg-gray-200 font-medium" : ""
                            }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="block sm:hidden">
                {cat === "Abayas" ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowAbayaMenu(true)}
                    className={`px-5 py-2 rounded-full !text-md font-medium flex items-center gap-2 transition-all duration-300 ${category === cat
                        ? "!bg-black !text-white"
                        : "!bg-gray-100 hover:!bg-gray-200 !text-gray-700"
                      }`}
                  >
                    {cat}
                    <IoChevronDown size={16} />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCategory(cat)}
                    className={`px-5 py-2 rounded-full !text-md font-medium transition-all duration-300 ${category === cat
                        ? "!bg-black !text-white"
                        : "!bg-gray-100 hover:!bg-gray-200 !text-gray-700"
                      }`}
                  >
                    {cat}
                  </motion.button>
                )}
              </div>
            </div>
          ))}

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="ml-2 sm:ml-6 border border-gray-300 !text-sm rounded-full px-4 py-2 outline-none"
          >
            <option value="relevant">Sort: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="new">Newest First</option>
          </select>

          <select
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="ml-2 sm:ml-6 border border-gray-300 !text-sm rounded-full px-4 py-2 outline-none"
          >
            <option value={5}>05 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={20}>20 items per page</option>
            <option value={30}>30 items per page</option>
          </select>

          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-[140px] sm:w-[180px] !bg-white">
            <input
              type="!text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                dispatch(setSearch(e.target.value));
                dispatch(toggleSearch(true));
              }}
              className="flex-1 !text-sm !bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 p-2"
                >
                  <div className="w-full h-52 skeleton rounded-xl mb-3"></div>
                  <div className="h-4 w-3/4 skeleton rounded mb-2"></div>
                  <div className="h-4 w-1/2 skeleton rounded mb-3"></div>
                  <div className="h-6 w-1/3 skeleton rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              key={category + sortType + search}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {paginateProducts(filterProducts).map((item, index) => (
                <ProductItem
                  key={index}
                  id={item?._id}
                  image={item?.image}
                  name={item?.name}
                  price={item?.price}
                  sizes={item?.sizes}
                  className="group relative overflow-hidden rounded-2xl !bg-white shadow-sm hover:shadow-md transition-all duration-300"
                />
              ))}
            </motion.div>
          )}

          {filterProducts.length > 0 && (
            <div className="flex justify-center items-center py-6">
              <button
                onClick={() =>
                  setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
                }
                className="px-4 py-2 !bg-gray-200 !text-gray-700 rounded-full"
                disabled={currentPage === 1}
              >
                Prev
              </button>

              <span className="mx-4 !text-lg">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                className="px-4 py-2 !bg-gray-200 !text-gray-700 rounded-full"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showAbayaMenu && (
          <>
            <motion.div
              className="fixed inset-0 !bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAbayaMenu(false)}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 !bg-white rounded-t-3xl shadow-2xl z-50 p-6 pb-10"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="!text-lg font-semibold !text-gray-800">
                  Abaya Categories
                </h2>
                <button onClick={() => setShowAbayaMenu(false)}>
                  <IoClose size={22} className="!text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {abayaSubcategories.map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => {
                      setCategory(subCat);
                      setShowAbayaMenu(false);
                    }}
                    className={`py-3 px-4 !text-sm rounded-xl border transition-all duration-200 ${category === subCat
                        ? "!bg-black !text-white"
                        : "!bg-gray-100 hover:!bg-gray-200 !text-gray-700"
                      }`}
                  >
                    {subCat}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Collection;