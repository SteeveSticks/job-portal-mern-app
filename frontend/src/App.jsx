import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="font-primary">
      <Navbar />
      <main className="min-h-screen font-primary">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
