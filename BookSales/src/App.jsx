import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages";
import Books from "./pages/books";
import Tim from "./pages/team";
import ContactUs from "./pages/contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Tim />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
