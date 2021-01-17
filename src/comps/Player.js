import React, { useState, useEffect, useContext } from "react";
import TextEditor from "./TextEditor";
import { ContentContext } from "../context/Provider";
import Mp3Player from "./Mp3Player";

//const data = require("../db/example.json");

export default function Player() {
	//mock data
	const content = useContext(ContentContext);
	const snapshots = content.snapshots;
	const lang = content.lang;
	const [text, setText] = useState(content.text);
	const [timestamp, setTimestamp] = useState(content.currentTimestamp);
	const [onPlay, setOnPlay] = useState(content.onPlay);
	const [currentDuration, setDuration] = useState(0);

	const handleTextParse = (snapshots, timestamp) => {
		const currentContent = snapshots.filter(
			(element) => element.timestamp === timestamp
		)[0];
		return currentContent;
  };
  
  const handleOnPlay = () => {
    setOnPlay(!onPlay);
  }

	// useEffect(() => {
	// 	if (onPlay) {
	// 		const interval = setInterval(() => {
	// 			const currentContent = handleTextParse(snapshots, timestamp + 1);
	// 			if (currentContent && currentContent.text.length > 0)
	// 				setText(currentContent.text);
	// 			setTimestamp(timestamp + 1);
	// 		}, 500);
	// 		return () => clearInterval(interval);
	// 	}
	// });

	useEffect(() => {
		const currentSec = Math.floor(currentDuration);
		const currentContent = handleTextParse(snapshots, currentSec + 1);
		// if (currentContent && currentContent.text.length > 0)
		// 	setText(currentContent.text);
		setText(currentContent.text);
		console.log(text);
	}, [currentDuration]);

	return (
		<>
			<div className="App-header">
				<div style={{ width: "50%", marginRight: "5%" }}>
					<TextEditor lang={lang} currentText={text} onPlay={onPlay} />
				</div>
				<div style={{ paddingTop: "5%" }}>
          <Mp3Player onPlay={handleOnPlay}
            setDuration={setDuration} />
				</div>
			</div>
		</>
	);
}
