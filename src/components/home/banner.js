import React from "react";
import "../home/banner.css";
import CarVideo from "../../assets/videos/car3.mp4";
const banner = () => {
  return (
    <div className="banner-container m-2">
      <video autoPlay muted loop className="background-video">
        <source src={CarVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="text-primary">Welcome to the RSNCARS</h1>
        <p className="text-primary h2 ">Buy a Car at the Best Price</p>
      </div>
    </div>
  );
};

export default banner;
