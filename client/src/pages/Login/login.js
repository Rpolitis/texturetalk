import React, { useState } from "react";
import { TextField, Grid, Button, Paper, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../actions/auth";
import './login.css';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(login(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    return (
        <Container component="main" maxWidth="xs" className="main">
            <Paper elevation={3} className="paper" sx={{borderRadius: '0px', border: '1px solid black', backgroundColor: 'whitesmoke'}}>
                <h1>welcome to texturetalk.</h1>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField  name="firstName" onChange={handleChange} variant="outlined" required fullWidth label="First Name" autoFocus />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField name="lastName" onChange={handleChange} variant="outlined" required fullWidth label="Last Name" />
                                    </Grid>
                                </>
                            )
                        }
                        <Grid item xs={12}>
                            <TextField name="email" onChange={handleChange} variant="outlined" required fullWidth label="Email Address" type="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="password" onChange={handleChange} variant="outlined" required fullWidth label="Password" type="password" />
                        </Grid>
                        { isSignup && 
                            <Grid item xs={12}>
                                <TextField name="confirmPassword" onChange={handleChange} variant="outlined" required fullWidth label="Retype Password" type="password" />
                            </Grid>
                        }
                    </Grid>
                    <Grid container paddingTop={2}>
                        <Button type="Submit" fullWidth variant="outlined" sx={{ color: "rgb(101, 26, 137)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} >
                            {
                                isSignup ? 'Sign Up' : 'Login'
                            }
                        </Button>
                        <Grid item>
                            <Button onClick={switchMode} sx={{ color: "rgb(21, 21, 21)", borderStyle: "none", ":hover": {color: "rgb(21, 21, 21)", background: "none"}}}>
                                {
                                    isSignup ? <p><u>Already have an account? Login</u></p> : <p><u>Don't have an account? Sign up</u></p>
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;