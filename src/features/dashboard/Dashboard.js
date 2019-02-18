import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoArea from "./VideoArea";
import { getTrendingVideos, getSearchResult } from "./api";

class Dashboard extends Component {
  state = {
    videoList: null,
    loading: true,
    currentVideo: null,
    isLiked: false,
    comments: []
  };

  componentDidMount() {
    //this function fetches the trending youTube videos
    this.popularVideoList();
  }

  popularVideoList = () => {
    //setting the response of async call in state
    getTrendingVideos()
      .then(response =>
        this.setState({
          videoList: response.data.items,
          currentVideo: response.data.items[0],
          loading: false
        })
      )
      .catch(error => alert(error.message));
  };

  //this function accepts a query
  //give search result and store in the state
  //sets the first result as current video in player
  searchVideo = query => {
    this.setState({ loading: true });
    getSearchResult(query)
      .then(response =>
        this.setState({
          videoList: response.data.items,
          currentVideo: response.data.items[0],
          loading: false,
          comments: []
        })
      )
      .catch(error => alert(error.message));
  };

  //this function changes current active video in player
  setCurrentVideo = video => {
    if (video !== this.state.currentVideo) {
      this.setState({
        currentVideo: video,
        isLiked: false,
        comments: []
      });
    }
  };

  //this function is used for liking and disliking a video
  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  //this function accepts commmentText and userName
  //posts a comment on video
  postComment = commentObj => {
    const { userName, commentText } = commentObj;
    if (userName.length > 0 && commentText.length > 0) {
      const updatedComments = this.state.comments;
      updatedComments.push(commentObj);
      this.setState({
        comments: updatedComments
      });
    }
  };
  render() {
    const { videoList, loading, currentVideo, isLiked, comments } = this.state;
    return (
      <div>
        <SearchBar searchVideo={this.searchVideo} />
        <VideoArea
          videoList={videoList}
          loading={loading}
          currentVideo={currentVideo}
          setCurrentVideo={this.setCurrentVideo}
          toggleLike={this.toggleLike}
          isLiked={isLiked}
          postComment={this.postComment}
          comments={comments}
        />
      </div>
    );
  }
}

export default Dashboard;
