import axios from "axios";

const API_KEY = "AIzaSyDAyYIU0uRJadfSwFyYvrEhv86RfTGuqnM";

export const getTrendingVideos = () => {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=${API_KEY}`
  );
};

export const getSearchResult = query => {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${API_KEY}`
  );
};
