import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import useError from "../hooks/useError";
import { supabase } from "../lib/supabaseClient";

const Collection = () => {
  const products = useSelector((state) => state.product.items || []);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const handleError = useError();

  const categories = ["All", "Abayas", "Hijabs", "Niqabs", "Accessories"];

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

  useEffect(() => {
    let filtered = items;

    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // if (showSearch && search) {
    //   filtered = filtered.filter((item) =>
    //     item.name.toLowerCase().includes(search.toLowerCase())
    //   );
    // }

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
  }, [category, sortType, items]);

  return (
    <div className="w-full bg-[#faf9f8] min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide uppercase text-gray-800">
          Modest Fashion Collection
        </h1>
        <p className="text-gray-500 text-sm mt-2">Abayas • Hijabs • Niqabs • Accessories</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 border-t border-b py-4 bg-white z-40 shadow-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full text-md font-medium transition-all duration-300 
          ${category === cat ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
          >
            {cat}
          </button>
        ))}

        <select
          onChange={(e) => setSortType(e.target.value)}
          className="ml-2 sm:ml-6 border border-gray-300 text-sm rounded-full px-4 py-2 outline-none"
        >
          <option value="relavent">Sort: Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="new">Newest First</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              />
            ))}
          </div>
        )}
      </div>

    </div>

  );
};

export default Collection;