import axios from "axios";

// Your Youtube api Key
const API_KEY = "AIzaSyDAyYIU0uRJadfSwFyYvrEhv86RfTGuqnM";

//this function does api call to youtube's backend and fetches trending video
export const getTrendingVideos = () => {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=${API_KEY}`
  );
};

//this function does api call to youtube' backend and get result for a keyword
export const getSearchResult = query => {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${API_KEY}`
  );
};
