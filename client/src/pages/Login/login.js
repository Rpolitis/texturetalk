import React, { useState } from "react";
import Input from "./input";
import './login.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Paper, Container } from "@mui/material";
import { signup, login } from "../../actions/auth";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

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
            <Paper elevation={3} className="paper" sx={{borderRadius: '0px', border: '1px solid black'}}>
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
                    <Button type="Submit" fullWidth className="Submit">
                        {
                            isSignup ? 'Sign Up' : 'Log in'
                        }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
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