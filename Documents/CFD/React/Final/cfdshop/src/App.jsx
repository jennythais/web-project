import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import DashBoardPage from "./pages/DashBoardPage";
import FaqPage from "./pages/FaqPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShippingPage from "./pages/ShippingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Page404 from "./pages/Page404";
import ReturnsPage from "./pages/Page404";
import HomePape from "./pages/HomePage";
import { PATHS } from "./constants/path";
import CartPage from "./pages/CartPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePape />} />

          <Route path={PATHS.PRODUCTS} element={<ProductPage />} />
          <Route path={PATHS.PRODUCTS_DETAIL} element={<ProductDetailPage />} />
          <Route path={PATHS.DASHBOARD} element={<DashBoardPage />} />
          <Route path={PATHS.FAQ} element={<FaqPage />} />
          <Route path={PATHS.PAYMENT_METHOD} element={<PaymentMethodPage />} />
          <Route path={PATHS.RETURN} element={<ReturnsPage />} />
          <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
          <Route path={PATHS.BLOG} element={<BlogPage />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.PRIVATE_POLICY} element={<PrivacyPolicyPage />} />

          {/* Private route */}
          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.CART} element={<CartPage />} />
            <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
            <Route
              path={PATHS.CHECKOUT_SUCCESS}
              element={<CheckoutSuccessPage />}
            />
            <Route path={PATHS.DASHBOARD} element={<DashBoardPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
