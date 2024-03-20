import React from "react";
import './Posts.css';
import Post from './Post/Post'
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Posts = ({setCurrentId}) => {
    const postsData = useSelector((state) => state.posts);
    const posts = postsData.data;

    return (
        !posts ? <p>No posts!</p> :
        (<Grid className="container" container alignItems="stretch" spacing={3} sx={{paddingTop: "10px", paddingBottom: "10px"}}>
            {
                posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12}> 
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))
            }
        </Grid>)
    )
};
 
export default Posts;