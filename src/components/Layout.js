import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProductViewModal from "./ProductViewModal";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </>
  );
};

export default Layout;
