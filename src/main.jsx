import React from "react";
import ReactDOM from "react-dom/client";
import AudioPlayer from "./components/AudioPlayer";
import tracks from "./tracks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioPlayer tracks={tracks} />
);
