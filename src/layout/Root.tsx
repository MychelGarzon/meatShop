import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export default function Root() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  );
}