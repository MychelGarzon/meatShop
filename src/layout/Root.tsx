import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import { Suspense } from "react";
import Loading from "../components/loading/Loading";

export default function Root() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}