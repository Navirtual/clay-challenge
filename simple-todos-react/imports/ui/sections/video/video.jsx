import React from "react";
import "./styles.css";

export const Video = () => {
  return (
    <div className="container-fluid text-center video-container p-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/l9XEuB7S6gE"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
