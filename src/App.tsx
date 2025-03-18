import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, FC, ComponentType } from "react";
import "./styles/App.css";
import Loader from "./components/Loader";

const MainCards = lazy(() => import("./components/MainCards"));
const Banner = lazy(() => import("./components/Banner"));
const Header = lazy(() => import("./components/layout/Navbar/Header"));
const Hero = lazy(() => import("./components/Hero"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const TopSellers = lazy(() => import("./components/TopSellers"));
const Footer = lazy(() => import("./components/layout/Footer/Footer"));
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

interface SuspenseRouteProps {
  element: ComponentType;
  fallback?: React.ReactNode;
}

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="/blog" element={<SuspenseRoute element={BlogPage} />} />
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
