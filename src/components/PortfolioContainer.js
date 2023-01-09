import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // Renders the page according to which currentPage (state) we are currently in
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
        return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header /> {/* The header */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> {/* The navbar */}
      {renderPage()} {/* The actual content of the page */}
      <Footer /> {/* The footer */}
    </div>
  );
}
