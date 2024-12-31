import "./styles/App.css";
import MainCards from "./components/MainCards";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopSellers from "./components/TopSellers";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CounterBanner from "./components/CounterBanner";
import BookGuide from "./components/BookGuide";
import Blog from "./components/Blog";
import Testimonies from "./components/Testimonies";
import Gift from "./components/Gift";
import PricePackage from "./components/PricePackage";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <Products />
      <Testimonies />
      <BookGuide />
      <CounterBanner />
      <Blog />
      <Gift />
      <PricePackage />
      <Footer />
    </>
  );
}

export default App;
