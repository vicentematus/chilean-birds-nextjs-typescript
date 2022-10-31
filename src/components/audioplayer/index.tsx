import { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ url }: { url: string }) => {
  useEffect(() => {
    const audio = document.querySelector("audio") as HTMLAudioElement;
    audio.src = url;
  }, [url]);
  return (
    <div className="xs:w-[500px] w-[300px] ">
      <AudioPlayer
        showJumpControls={false}
        onPlay={(e) => console.log("onPlay")}
        volume={0.5}
      />
    </div>
  );
};

export default Player;
