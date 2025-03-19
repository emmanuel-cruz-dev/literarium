import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/ui/Loader";
import SuspenseRoute from "../utils/SuspenseRoute";
import Home from "../pages/Home/Home/Home";

const About = lazy(() => import("../pages/AboutUs/About/About"));
const Blog = lazy(() => import("../pages/OurBlog/Blog/Blog"));
const Products = lazy(() => import("../pages/Products/Products/Products"));
const Contact = lazy(() => import("../pages/ContactUs/Contact/Contact"));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<SuspenseRoute element={Home} />} />
      <Route path="/about" element={<SuspenseRoute element={About} />} />
      <Route path="/blog" element={<SuspenseRoute element={Blog} />} />
      <Route path="/products" element={<SuspenseRoute element={Products} />} />
      <Route path="/contact" element={<SuspenseRoute element={Contact} />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
