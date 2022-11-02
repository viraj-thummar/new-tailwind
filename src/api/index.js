import axios from "axios";

const url = "https://backend.gauravsinghviventures.com";

export const fetchPosts = () => axios.get(url + "/posts");
export const createPost = (newPost) => axios.post(url + "/posts", newPost);

export const fetchLogos = () => axios.get(url + "/logos");
export const fetchFilteredLogos = (categories) =>
  axios.get(`${url}/logos/filter?categories=${categories}`);
export const createLogo = (newLogo) => axios.post(url + "/logos", newLogo);
