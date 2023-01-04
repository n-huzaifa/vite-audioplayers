import React from "react";
import ReactAudioPlayer from "react-audio-player";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <>
      <h1>React-Audio-Player</h1>
      <ReactAudioPlayer src='/epic.mp3' controls />
      <h1>React-H5-Audio-Player</h1>
      <AudioPlayer src='/powerful.mp3' />
    </>
  );
}

export default App;
