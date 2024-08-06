import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Default import
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
