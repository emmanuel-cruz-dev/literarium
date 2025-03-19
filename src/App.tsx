import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, FC } from "react";
import "./styles/App.css";
import Loader from "./components/ui/Loader";
import { SuspenseRouteProps } from "types/types";

const MainCards = lazy(() => import("./pages/Home/MainCards/MainCards"));
const Banner = lazy(() => import("./components/ui/Banner"));
const Header = lazy(() => import("./components/layout/Navbar/Header"));
const Hero = lazy(() => import("./pages/Home/Hero/Hero"));
const ScrollToTopButton = lazy(
  () => import("./components/ui/ScrollToTopButton")
);
const TopSellers = lazy(() => import("./pages/Home/TopSellers/TopSellers"));
const Footer = lazy(() => import("./components/layout/Footer/Footer"));
const Products = lazy(() => import("./pages/Home/Products/Products"));
const BookGuide = lazy(() => import("./pages/Home/BookGuide/BookGuide"));
const BlogSection = lazy(() => import("./pages/Home/BlogSection/BlogSection"));
const Testimonials = lazy(
  () => import("./pages/Home/Testimonials/Testimonials")
);
const Gift = lazy(() => import("./pages/Home/Gift/Gift"));
const PricePackage = lazy(
  () => import("./pages/Home/PricePackage/PricePackage")
);
const Newsletter = lazy(() => import("./components/ui/Newsletter"));

const About = lazy(() => import("./pages/AboutUs/About/About"));
const Blog = lazy(() => import("./pages/OurBlog/Blog/Blog"));
const ProductsPage = lazy(
  () => import("./components/routes/products/ProductsPage")
);
const ContactPage = lazy(
  () => import("./components/routes/contact/ContactPage")
);

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <Products />
      <Testimonials />
      <BookGuide />
      <BlogSection />
      <Gift />
      <PricePackage />
      <Newsletter />
    </Suspense>
  );
};

const SuspenseRoute: FC<SuspenseRouteProps> = ({
  element: Element,
  fallback = <Loader />,
}) => (
  <Suspense fallback={fallback}>
    <Element />
  </Suspense>
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<SuspenseRoute element={Home} />} />
          <Route path="/about" element={<SuspenseRoute element={About} />} />
          <Route path="/blog" element={<SuspenseRoute element={Blog} />} />
          <Route
            path="/products"
            element={<SuspenseRoute element={ProductsPage} />}
          />
          <Route
            path="/contact"
            element={<SuspenseRoute element={ContactPage} />}
          />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
