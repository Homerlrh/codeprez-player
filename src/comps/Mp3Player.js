import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/fontawesome-free-solid";

export default function Mp3Player({ onPlay, setDuration, handleDrag }) {
	const hiddenInput = useRef();

	const [audio, setAudio] = useState(null);
	const handleAudioUpload = (e) => {
		setAudio(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url={audio}
					controls={true}
					height="50px"
					width="500px"
					onPlay={onPlay}
					onPause={onPlay}
					onProgress={(e) => {
						setDuration(e.playedSeconds);
					}}
				/>
			</div>
			<input
				ref={hiddenInput}
				type="file"
				onChange={handleAudioUpload}
				hidden
			/>
			<div
				className="uploadBtn center"
				onClick={() => {
					hiddenInput.current.click();
				}}
			>
				<FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
				<p>Upload Files here</p>
			</div>
		</>
	);
}
