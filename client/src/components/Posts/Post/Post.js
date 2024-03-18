import React from "react";
import './Post.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/material/Icon';
import DeleteIcon from '@mui/material/Icon';
import MoreHoriz from '@mui/material/Icon';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
    return (
       <Card className="card">
            <CardMedia className="media" image={post.selectedFile} title={post.title} />
            <div className="overlay">
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="overlay2">
                <Button size="small" onClick={() => setCurrentId(post._id)} >
                    <MoreHoriz fontSize="default" />
                </Button>
            </div>
            <div className="details">
                <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className="title" variant="h5" gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions className="cardActions">
                <Button size="small" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
       </Card>
    );
};
 
export default Post;