import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from '../components/LoadingSpinners/PageLoader';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../tempComponent/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Product = lazy(() => import('../pages/Collection'));
// const ProductDetail = lazy(() => import('../pages/Product'));
import ProductDetail from '../pages/Product'
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Cart = lazy(() => import('../pages/Cart'));
const ReturnPolicy = lazy(() => import('../pages/OurPolicy'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const DeliveryPolicy = lazy(() => import('../pages/DeliveryPolicy'));
const PlaceOrder = lazy(() => import('../pages/PlaceOrder'));
const Orders = lazy(() => import('../pages/Orders'));
const Login = lazy(() => import('../pages/Login'));
const ViewOrderDetails = lazy(() => import('../pages/OrderDetails'));

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<PageLoader />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<PageLoader />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductDetail />
            </Suspense>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductDetail />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<PageLoader />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/return-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <ReturnPolicy />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/delivery-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <DeliveryPolicy />
            </Suspense>
          }
        />
        <Route
          path="/place-order"
          element={
            <Suspense fallback={<PageLoader />}>
              <PlaceOrder />
            </Suspense>
          }
        />
        <Route
          path="/orders"
          element={
            <Suspense fallback={<PageLoader />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path="/orders/:id/:size"
          element={
            <Suspense fallback={<PageLoader />}>
              <ViewOrderDetails />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;