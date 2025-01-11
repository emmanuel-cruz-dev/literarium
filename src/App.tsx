import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./styles/App.css";

const MainCards = lazy(() => import("./components/MainCards"));
const Banner = lazy(() => import("./components/Banner"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const TopSellers = lazy(() => import("./components/TopSellers"));
const Footer = lazy(() => import("./components/Footer"));
const Products = lazy(() => import("./components/Products"));
const BookGuide = lazy(() => import("./components/BookGuide"));
const Blog = lazy(() => import("./components/Blog"));
const Testimonies = lazy(() => import("./components/Testimonies"));
const Gift = lazy(() => import("./components/Gift"));
const PricePackage = lazy(() => import("./components/PricePackage"));
const Newsletter = lazy(() => import("./components/Newsletter"));

const About = lazy(() => import("./components/routes/about/About"));
const BlogPage = lazy(() => import("./components/routes/blog/BlogPage"));
const ProductsPage = lazy(
  () => import("./components/routes/products/ProductsPage")
);
const ContactPage = lazy(
  () => import("./components/routes/contact/ContactPage")
);

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <Products />
      <Testimonies />
      <BookGuide />
      <Blog />
      <Gift />
      <PricePackage />
      <Newsletter />
    </Suspense>
  );
};

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
