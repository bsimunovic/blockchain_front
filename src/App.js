import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Homepage } from "./pages";
import { Navbar } from "./components/common/Navbar";
import { DonationDetailsPage } from "./pages/DonationDetailsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { InfoPage } from "./pages/InfoPage";
import { RegistrationForm } from "./components/RegistrationForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<InfoPage />}></Route>
          <Route path="/donations" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegistrationForm />}></Route>
          <Route path="/donation" element={<DonationDetailsPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
