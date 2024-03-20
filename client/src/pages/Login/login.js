import React, { useState } from "react";
import Input from "./input";
import './login.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Paper, Container } from "@mui/material";
import { signup, login } from "../../actions/auth";

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
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type="password" />
                        { isSignup && <Input name="confirmPassword" label="Retype Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Grid container paddingTop={2}>
                        <Button type="Submit" fullWidth variant="outlined" sx={{ color: "rgb(201, 26, 137)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} >
                            {
                                isSignup ? 'Sign Up' : 'Log in'
                            }
                        </Button>
                        <Grid item>
                            <Button onClick={switchMode} sx={{ color: "rgb(21, 21, 21)", borderStyle: "none", ":hover": {color: "rgb(21, 21, 21)", background: "none"}}}>
                                {
                                    isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"
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