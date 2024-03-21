import axios from "axios";

const baseURL = "https://texturetalk.onrender.com/";

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if (profile) {
        try {
            const { token } = JSON.parse(profile);
            if (token) {
                req.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error parsing profile:', error);
        }
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const logIn = (formData) => API.post('/api/auth/signin', formData);
export const signUp = (formData) => API.post('/api/auth/signup', formData);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
