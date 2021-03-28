import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  views,
  subs,
  description,
  timeStamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" className="VideoRow__image" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} • <span> {subs} Subscribers</span> {views} • {timeStamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
