import React, { useState, useEffect } from "react";
import './Form.css';
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({currentId, setCurrentId }) => {
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null);
    const dispatch = useDispatch();

    const [postData, setPostData ] = useState({
        creator: '', title:'', description: '', tags: '', selectedFile: ''
    });

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title:'', description: '', tags: '', selectedFile: ''
        })
    }

    return (
        <Paper className="paper">
            <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} a Post</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className="fileInput">
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                </div>
                <Button className="buttonSubmit" variant="contained" size="lg" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" size="sm" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};
 
export default Form;