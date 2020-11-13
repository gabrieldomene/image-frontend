import React from 'react';

import './style.css';

function Upload() {
  
  function fileSelectedHandler (event) {
    var file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(file);
  }

  function fileDownload (event) {
    console.log("download")
  }

  return (
    <div className="container-upload">
      <label className="btn-upload" 
        htmlFor="fileInput">
          Upload
        <input type="file" id="fileInput" onChange={fileSelectedHandler}/>
      </label>
      <div className="btn-download" onClick={fileDownload}>
        Download
      </div>
      <p>Current database: DB #</p>
    </div>
  )
};

export default Upload;