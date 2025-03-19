import { Suspense } from "react";
import Loader from "../../../components/ui/Loader";
import Hero from "../Hero/Hero";
import Banner from "../../../components/ui/Banner";
import MainCards from "../MainCards/MainCards";
import TopSellers from "../TopSellers/TopSellers";
import ProductsSection from "../ProductsSection/ProductsSection";
import Testimonials from "../Testimonials/Testimonials";
import BookGuide from "../BookGuide/BookGuide";
import BlogSection from "../BlogSection/BlogSection";
import Gift from "../Gift/Gift";
import PricePackage from "../PricePackage/PricePackage";
import Newsletter from "../../../components/ui/Newsletter";

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <ProductsSection />
      <Testimonials />
      <BookGuide />
      <BlogSection />
      <Gift />
      <PricePackage />
      <Newsletter />
    </Suspense>
  );
}

export default Home;
