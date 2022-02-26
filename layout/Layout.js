import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <nav></nav>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
