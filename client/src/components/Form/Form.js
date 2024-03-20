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
        <Paper className="paper" sx={{borderRadius: '0px', padding: '50px', border: '1px solid black', borderTop: '0', backgroundColor: 'whitesmoke'}} >
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography sx={{paddingBottom: '10px'}} variant="h6">{currentId ? 'Editing' : 'Create'} a Post</Typography>
                <div className="fileInput">
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                </div>
                <TextField sx={{paddingBottom: '10px'}} name="title" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField  sx={{paddingBottom: '10px'}} name="tags" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <TextField sx={{paddingBottom: '10px'}} name="description" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <div className="buttons">
                    <Button sx={{ color: "rgb(201, 26, 137)", borderColor: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} type="submit" fullWidth >Submit</Button>
                    <Button sx={{ color: "rgb(21, 21, 21)", ":hover": {color: "whitesmoke", backgroundColor: "rgb(21, 21, 21)", borderColor: "whitesmoke"}}} onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
};
 
export default Form;