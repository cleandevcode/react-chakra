import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import LocationsPage from "./pages/LocationsPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
