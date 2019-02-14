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
    this.popularVideoList();
  }
  popularVideoList = () => {
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
  searchVideo = query => {
    this.setState({ loading: true });
    getSearchResult(query)
      .then(response =>
        this.setState({
          videoList: response.data.items,
          currentVideo: response.data.items[0],
          loading: false
        })
      )
      .catch(error => alert(error.message));
  };
  setCurrentVideo = video => {
    if (video !== this.state.currentVideo) {
      this.setState({
        currentVideo: video,
        isLiked: false,
        comments: []
      });
    }
  };
  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };
  postComment = commentObj => {
    const updatedComments = this.state.comments;
    updatedComments.push(commentObj);

    this.setState({
      comments: updatedComments
    });
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
