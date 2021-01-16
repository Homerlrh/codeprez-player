import React, { useState, useEffect, useContext } from "react";
import TextEditor from "./TextEditor";
import { ContentContext } from "../context/Provider";
import Mp3Player from "./Mp3Player";

//import db from "../db/example.json";
const data = require("../db/example.json");
export default function Player() {
	//mock data
	const content = useContext(ContentContext);

	const [text, setText] = useState(content.text);
	const [timestamp, setTimestamp] = useState(content.currentTimestamp);
	const [onPlay, setOnPlay] = useState(content.onPlay);

	const handleTextParse = (data, timestamp) => {
		const currentContent = data.snapshots.filter(
			(element) => parseInt(element.timestamp) === timestamp
		)[0];
		return currentContent.text;
	};
	debugger;
	useEffect(() => {
		if (onPlay) {
			const interval = setInterval(() => {
				const tx = handleTextParse(data, timestamp + 1000);
				console.log(tx);
				setText(tx);
				setTimestamp(timestamp + 1000);
			}, 1000);
			return () => clearInterval(interval);
		}
	});

	return (
		<>
			<div className="App-header">
				<div style={{ width: "50%", marginRight: "5%" }}>
					<button onClick={() => setOnPlay(!onPlay)}>Toggle Play</button>
					<TextEditor currentText={text} onPlay={onPlay} />
				</div>
				<div style={{ paddingTop: "5%" }}>
					<Mp3Player />
				</div>
			</div>
		</>
	);
}
