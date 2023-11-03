import React from "react";
import Header from "./header";

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
