import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; // ← "react-router-dom"
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Toukou from "./Pages/Toukou/Toukou.jsx";
import Private from "./Components/Private.jsx";
import SettingPage from "./Pages/Setting/SettingPage.jsx";
import Touhyou from "./Pages/Touhyou/Touhyou.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SettingPage />} />
          <Route path="toukou" element={<Toukou />} />
          <Route path="private" element={<Private />} />
          <Route path="setting-page" element={<SettingPage />} />
          <Route path="touhyou" element={<Touhyou />} />
          <Route path="app" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
