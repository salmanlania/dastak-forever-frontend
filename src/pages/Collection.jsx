import { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import useError from '../hooks/useError';
import { supabase } from '../lib/supabaseClient';

const categoryData = {
  "Abayas": ["Casual Abayas", "Signature Abayas", "Occasion Abayas"],
  "Stroller Scarves": ["Plain Strollers", "Printed Strollers", "Premium Strollers"],
  "Modest Wraps": ["Irani Styles", "Classic Wraps", "Statement Wraps"]
};

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleError = useError();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('order_id', { ascending: false });

        if (error) throw error;

        // setItems(data || []);
        setItems(data.length > 0 ? data : products);
        console.log('data' , data)
        console.log('data.length > 0' , data.length);
        console.log('products' , products)
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory([]);
    } else {
      setCategory([e.target.value]);
      setSubCategory([]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = items.slice()
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    } if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    } if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = async () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {Object.keys(categoryData).map((cat, index) => {
              return (
                <p key={index} className='flex gap-2'>
                  <input
                    className='w-3'
                    value={cat}
                    onChange={toggleCategory}
                    type="checkbox"
                    checked={category.includes(cat)}
                  />
                  {cat}
                </p>
              )
            })}
          </div>
        </div>

        <div className={`pl-5 py-3 my-5 ${category.length > 0 ? 'border border-gray-300' : ''} ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>{category.length > 0 ? "TYPE" : null}</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {category.length > 0 && categoryData[category[0]]?.map((subCat, index) => (
              <>
                <p key={index} className='flex gap-2'>
                  <input
                    className='w-3'
                    value={subCat}
                    onChange={toggleSubCategory}
                    type="checkbox"
                    checked={subCategory.includes(subCat)}
                  />
                  {subCat}
                </p>
              </>
            ))}

          </div>

        </div>
      </div>

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="" id="">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'> */}
          {/* {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          } */}
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="loader"></div>
            </div>
          ) : (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {filterProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))}
            </div>
          )}
        {/* </div> */}
      </div>
    </div >
  )
}

export default Collection