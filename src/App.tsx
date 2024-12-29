import "./styles/App.css";
import MainCards from "./components/MainCards";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopSellers from "./components/TopSellers";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CounterBanner from "./components/CounterBanner";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
      <Products />
      <CounterBanner />
      <Footer />
    </>
  );
}

export default App;
