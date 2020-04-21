import React from "react";
import Header from "./Header";

const Container = ({ children }) => (
  <div className="container">
    <Header />
    {children}
  </div>
);
export default Container;
