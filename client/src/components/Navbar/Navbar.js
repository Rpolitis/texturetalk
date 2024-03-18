import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Typography, Avatar, Button } from "@mui/material/"
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from '../../images/hair-salon-logo-black-png.webp'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')) || null );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type : 'LOGOUT'});
    navigate('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div className="nav">
        {/* Logo from https://www.vecteezy.com/png/18876251-hair-salon-logo-black */}
        <div>
        <Link to={user ? "/home" : "/"} className="logo"><img src={logo} alt="Logo" height={37} width={37} /></Link>
      </div>
        <Link to="/quiz">quiz</Link>
        <div className="currUser">
        {
          user ? (
            <div className="profile">
              <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button variant="contained" className="logout" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Link to="/login">login</Link>
          )
        }
        </div>
      </div>
  )
};

export default Navbar;