import React from "react";
import Meta from "./meta";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
}

export default Layout;
