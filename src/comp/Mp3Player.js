import React, { useState } from "react";

import ReactPlayer from "react-player";

export default function Mp3Player() {
	const [audio, setAudio] = useState(null);

	const handleAudioUpload = (e) => {
		setAudio(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div>
			<input type="file" onChange={handleAudioUpload} />
			<ReactPlayer url={audio} controls={true} height="100px" />
		</div>
	);
}
