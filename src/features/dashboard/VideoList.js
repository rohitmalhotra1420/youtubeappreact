import React, { Component } from "react";
import VideoListItem from "./VideoListItem";

class VideoList extends Component {
  state = {};
  render() {
    const { videos, setCurrentVideo } = this.props;
    return (
      <div>
        {videos.map((video, index) => {
          return (
            <VideoListItem
              key={index}
              video={video}
              setCurrentVideo={setCurrentVideo}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
