import axios from "axios";

const KEY = "AIzaSyBJDgqj7IQCgL5vllyWEJqiulQiFy7hxpM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
