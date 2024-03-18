import React, { useEffect, useState } from "react";
import './home.css';
import { Container, Grow, Grid } from "@mui/material"
import { useDispatch } from 'react-redux'

import { getPosts } from "../../actions/posts"

import Posts from "../../components/Posts/Posts"
import Form from "../../components/Form/Form"

const Home = () => {
    const [currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};
 
export default Home;