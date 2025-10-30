import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const products = useSelector(state => state.product.items || []);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];
      productsCopy = productsCopy.filter(
        (item) => category === item.category && subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  if (related.length === 0) return null;

  return (
    <div className="my-20 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <Title text1="RELATED" text2="PRODUCTS" />
        <div className="w-20 h-[2px] bg-[var(--main-color)] mx-auto mt-2"></div>
        <p className="text-gray-500 text-sm mt-3">
          Explore more styles that complement your choice.
        </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {related.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
    </div>
  );
};

export default RelatedProducts;