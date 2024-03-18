import axios from "axios";

const baseURL = "http://localhost:5000";

const API = axios.create({ baseURL });

API.interceptors.request.use(async (config) => {
    const profile = localStorage.getItem("profile");
    if (profile) {
        const { token } = JSON.parse(profile);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchPosts = async () => {
    try {
        const response = await API.get('/posts');
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const logIn = async (formData) => {
    try {
        const response = await API.post('/api/auth/signin', formData);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const signUp = async (formData) => {
    try {
        const response = await API.post('/api/auth/signup', formData);
        return response.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

export const createPost = async (newPost) => {
    try {
        const response = await API.post('/posts', newPost);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

export const updatePost = async (id, updatedPost) => {
    try {
        const response = await API.patch(`/posts/${id}`, updatedPost);
        return response.data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
};