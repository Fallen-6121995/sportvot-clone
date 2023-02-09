import React from "react";

function YtPlayer({ embedId }) {
  return (
    <div className="">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?controls=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        controls="0"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YtPlayer;
