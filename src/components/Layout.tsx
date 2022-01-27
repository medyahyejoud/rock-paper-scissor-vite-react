import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-radial-gradient px-16 py-8 overflow-hidden">
      <Container>
        <Header />
      </Container>
      <Container>
        <main className="my-20">{children}</main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
