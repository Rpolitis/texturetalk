import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Typography, Avatar, Button } from "@mui/material/"
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from '../../images/t.png'

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
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
  }, [location]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div className="nav">
        <div>
        <Link to={user ? "/home" : "/"} className="logo"><img className="t" src={logo} alt="Logo" height={40} width={40} /></Link>
      </div>
        <Link to="/quiz"><Button sx={{ color: "rgb(21, 21, 21)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} variant="outlined" >take the quiz</Button></Link>
        <div className="currUser">
        {
          user ? (
            <div className="profile">
              <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button  className="logout" onClick={logout} sx={{ color: "rgb(201, 26, 137)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} variant="outlined" >Logout</Button>
            </div>
          ) : (
            <Link className="login" to="/login"><Button sx={{ color: "rgb(201, 26, 137)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} variant="outlined">login</Button></Link>
          )
        }
        </div>
      </div>
  )
};

export default Navbar;