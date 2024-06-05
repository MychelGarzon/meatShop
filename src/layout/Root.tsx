import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import { Suspense } from "react";
import Loading from "../components/loading/Loading";
import styles from "./Root.module.css";

export default function Root() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={
        <>
          <h2 className={styles.loading}>Loading...</h2>
          <Loading />
        </>}>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}