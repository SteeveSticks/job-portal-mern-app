import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="font-primary">
        <Navbar />
        <main className="min-h-screen font-primary">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
