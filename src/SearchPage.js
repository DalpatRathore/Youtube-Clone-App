import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        verified
        channel="Clever Programmer"
        description="Let's Build a YouTube Clone with REACT JS for Beginners Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor modi error, perspiciatis praesentium cumque, voluptatibus delectus, tempore iusto quibusdam eum aliquid suscipit nisi ducimus!"
        subs="149K"
        noOfVideos={358}
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
      ></ChannelRow>
      <hr />
      <VideoRow
        subs="45.5k"
        description="Let's Build a YouTube Clone with REACT JS for Beginners Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor modi error, perspiciatis praesentium cumque, voluptatibus delectus, tempore iusto quibusdam eum aliquid suscipit nisi ducimus!"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        views="149K views"
        timeStamp="Streamed 7 months ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmiEBe3wIYcleQ55yfl2p06mFWFg"
      ></VideoRow>
      <VideoRow
        subs="4745.5k"
        title="🔴 Build a Facebook Clone with REACT JS for Beginners!"
        views="149K views"
        description="Let's Build a YouTube Clone with REACT JS for Beginners Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor modi error, perspiciatis praesentium cumque, voluptatibus delectus, tempore iusto quibusdam eum aliquid suscipit nisi ducimus!"
        timeStamp="Streamed 7 months ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/B-kxUMHBxNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu7SgqmClXaPb2GQXNrf__dSMblg"
      ></VideoRow>
      <VideoRow
        subs="5.5k"
        title="🔴 Let's Build a Amazon Clone with REACT JS for Beginners"
        views="149K views"
        description="Let's Build a YouTube Clone with REACT JS for Beginners Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor modi error, perspiciatis praesentium cumque, voluptatibus delectus, tempore iusto quibusdam eum aliquid suscipit nisi ducimus!"
        timeStamp="Streamed 7 months ago"
        channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        image="https://i.ytimg.com/vi/W5j0dpHxCj4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQIArZuwwezMAtfwc6G6szl5i9vQ"
      ></VideoRow>
    </div>
  );
};

export default SearchPage;
