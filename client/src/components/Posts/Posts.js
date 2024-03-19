import React from "react";
import './Posts.css';
import Post from './Post/Post'
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Posts = ({setCurrentId}) => {
    const postsData = useSelector((state) => state.posts);

    console.log(postsData);

    const posts = postsData.data;

    return (
        !posts ? <p>No posts!</p> :
        (<Grid className="container" container alignItems="stretch" spacing={3}>
            {
                posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}> 
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))
            }
        </Grid>)
    )
};
 
export default Posts;