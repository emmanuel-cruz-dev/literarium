import { lazy, Suspense } from "react";
import "./styles/App.css";
import Loader from "./components/ui/Loader";
import AppRoutes from "./routes/AppRoutes";

const Header = lazy(() => import("./components/layout/Navbar/Header"));
const ScrollToTopButton = lazy(
  () => import("./components/ui/ScrollToTopButton")
);
const Footer = lazy(() => import("./components/layout/Footer/Footer"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <AppRoutes />
      <ScrollToTopButton />
      <Footer />
    </Suspense>
  );
}

export default App;
