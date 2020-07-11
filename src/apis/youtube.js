import axios from "axios";

const KEY = "AIzaSyBhTi4LX6GUk4bbWg24g7L4kiKPv3WM1dU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: KEY,
        part: "snippet",
        maxResults: 5,
        type: "video",
    },
});
