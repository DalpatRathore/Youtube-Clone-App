import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
const VideoCard = ({
  image,
  title,
  channel,
  views,
  timeStamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        ></Avatar>
        <div className="videoCard__text">
          <h4 className="videoCard__title">{title}</h4>
          <p className="videoCard__channel">{channel}</p>
          <p className="videoCard__views">
            {views} . {timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
