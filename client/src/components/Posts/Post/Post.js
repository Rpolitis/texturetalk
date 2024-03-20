import React from "react";
import './Post.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
    return (
       <Card className="post" sx={{ padding: "5px"}}>
            <CardMedia className="postImage" src={post.selectedFile} title={post.title} />
            <div className="header">
                <Typography className="postTitle" variant="h5">{post.title}</Typography>
            </div>
            <div className="extras">
                <Typography className="postDate"variant="p">{moment(post.createdAt).fromNow()}</Typography>
                <Typography className="postTag" variant="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className="postDesc" variant="h6" >{post.description}</Typography>
            </CardContent>
       </Card>
    );
};
 
export default Post;