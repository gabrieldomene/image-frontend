import React from 'react';

import './style.css';

function Display() {
  document.addEventListener("DOMContentLoaded", () => {
    const recentImg = localStorage.getItem("recent-image");
    if (recentImg) {
      document.querySelector("#img-preview").setAttribute("src", recentImg);
    }
  });

  return (
    <div className="container-display">
      <p>Images in storage</p>
      <img id="img-preview" src="" alt="Preview"/>
    </div>
  )
};

export default Display;