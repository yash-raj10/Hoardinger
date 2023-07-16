import { useState } from "react";
import "./App.css";
import Index from "./pages/index.jsx";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Layout from "./Layout";
import RegisterPage from "./pages/Register.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
