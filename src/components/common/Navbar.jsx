import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../../helpers";
import jwtDecode from "jwt-decode";

export const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      axiosInstance.get(`/users/${decodedToken.sub}`).then((res) => {
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("balance", res.data.balance);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("wallet", res.data.walletAddress);
        setUserLoggedIn(true);
      });
    }
  }, [localStorage]);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("balance");
    localStorage.removeItem("username");
    localStorage.removeItem("wallet");
    axiosInstance.get("/auth/logout");
    userLoggedIn(false);
  };
  return (
    <nav className="nav">
      <ul>
        <li hidden={!userLoggedIn}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li hidden={!userLoggedIn}>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
        <li hidden={!userLoggedIn}>
          <p>{localStorage.getItem("balance")} ETH</p>
        </li>
        <li hidden={!userLoggedIn}>
          <p>{localStorage.getItem("username")}</p>
        </li>
        <li hidden={!userLoggedIn}>
          <NavLink onClick={logout}>Logout</NavLink>
        </li>
        <li hidden={userLoggedIn}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li hidden={userLoggedIn}>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
