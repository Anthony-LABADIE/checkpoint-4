import React from "react";
import video from "../../assets/video.png";

function LogoSiteWeb() {
  return (
    <div className="navbar--logo-holder">
      <img src={video} alt="logo" className="navbar--logo" />
      <h1>LabsMovie</h1>
    </div>
  );
}

export default LogoSiteWeb;
