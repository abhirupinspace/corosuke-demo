import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaymentPage from "./pages/PaymentPage";
import Profile from "./pages/Profile";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/payments' element={<PaymentPage />} />
                </Routes>
            </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
