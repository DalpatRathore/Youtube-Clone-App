import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const ChannelRow = ({
  verified,
  image,
  channel,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow__logo"></Avatar>
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {subs} subcribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
