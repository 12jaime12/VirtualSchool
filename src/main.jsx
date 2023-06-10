import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import CheckCode from "./pages/CheckCode/CheckCode.jsx";
import Login from "./pages/Login/Login.jsx";
import { Protected } from "./components/Protected/Protected.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import { Horario } from "./components/Horario/Horario.jsx";
import NotasActual from "./components/NotasActual/NotasActual.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verifyCode" element={<CheckCode />} />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Horario />} />
              <Route path="/dashboard/notasActual" element={<NotasActual />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
