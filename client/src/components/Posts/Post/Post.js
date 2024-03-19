import React from "react";
import './Post.css';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import MoreHoriz from '@mui/material/Icon';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
    return (
       <Card>
            <CardMedia image={post.selectedFile} title={post.title} />
            <div>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div>
                <Button size="small" onClick={() => setCurrentId(post._id)} >
                    <MoreHoriz fontSize="default" />
                </Button>
            </div>
            <div>
                <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography variant="h5" gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterBottom >{post.description}</Typography>
            </CardContent>
       </Card>
    );
};
 
export default Post;