import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
