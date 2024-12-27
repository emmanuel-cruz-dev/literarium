import "./styles/App.css";
import MainCards from "./components/MainCards";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <MainCards />
      <TopSellers />
    </>
  );
}

export default App;
