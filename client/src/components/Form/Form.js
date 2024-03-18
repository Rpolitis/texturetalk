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

    const initialState = {
        creator: '', 
        title: '', 
        description: '', 
        tags: '', 
        selectedFile: ''
    };
    
    const [postData, setPostData] = useState(initialState);

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
        setPostData(initialState);
    }

    return (
        <Paper className="paper" sx={{borderRadius: '0px', padding: '50px', border: '1px solid black', borderTop: '0'}} >
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Create'} a Post</Typography>
                <TextField name="creator" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="description" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <TextField name="tags" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className="fileInput">
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                </div>
                <div className="buttons">
                    <Button className="submit" variant="contained" type="submit" fullWidth >Submit</Button>
                    <Button  variant="contained" onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
};
 
export default Form;