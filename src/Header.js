import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__leftContainer">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/T3WPQpG2jcbDvaVpdLhbvh-1200-80.jpg"
            alt=""
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__middleContainer">
        <input
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
          type="text"
          className="header__input"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"></SearchIcon>
        </Link>
      </div>
      <div className="header__rightContainer">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar src="https://avatars.githubusercontent.com/u/69510006?v=4"></Avatar>
      </div>
    </div>
  );
};

export default Header;
