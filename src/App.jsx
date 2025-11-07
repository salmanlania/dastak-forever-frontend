import Routes from './Router/Routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/productsSlice';
import ComingSoon from './tempComponent/ComingSoon';
import ScrollToTop from './pages/ScrollToTop';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Routes />
      {/* <ComingSoon /> */}
    </>
  )
}