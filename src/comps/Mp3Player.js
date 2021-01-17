import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/fontawesome-free-solid";
export default function Mp3Player({ onPlay, setDuration }) {
	const hiddenInput = useRef();

	const [audio, setAudio] = useState(null);
	const handleAudioUpload = (e) => {
		const numOfFiles = e.target.files["length"];
		for (let i = 0; i <= numOfFiles - 1; i++) {
			const fileType = e.target.files[i].type;
			if (fileType.includes("audio")) {
				setAudio(URL.createObjectURL(e.target.files[i]));
			} else {
				console.log(e.target.files[i]);
			}
		}
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
				multiple
				max="2"
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
