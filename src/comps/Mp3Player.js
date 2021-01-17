import React from "react";
import ReactPlayer from "react-player";

export default function Mp3Player({ onPlay, setDuration, audio }) {
	return (
		<div className="player-wrapper">
			<ReactPlayer
				className="react-player"
				url={audio}
				height="50px"
				width="500px"
				onPlay={onPlay}
				onPause={onPlay}
				onProgress={(e) => {
					setDuration(e.playedSeconds);
				}}
				controls={true}
			/>
		</div>
	);
}
