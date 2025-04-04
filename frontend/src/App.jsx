import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AuthProvider>
      <div className="font-primary">
        <Navbar />
        <main className="min-h-screen font-primary">
          <Outlet />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                fontSize: "14px",
              },
            }}
          />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
