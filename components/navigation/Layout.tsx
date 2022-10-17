import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="h-screen">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;