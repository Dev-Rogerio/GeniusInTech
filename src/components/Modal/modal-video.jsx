import React from "react";

const ShowVideo = () => {
  return (
    <>
      <div className="video-modal">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src=""
            title="Apresentação Genius In Tech"
            frameBorder="0"
            allow="acceleromoter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
          <button className="clouse-video" onClick={() => setShowVideo(false)}></button>
        </div>
      </div>
    </>
  )
}