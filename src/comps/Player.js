import React, { useState, useEffect, useContext } from "react";
import { ControlledEditor as MonacoEditor } from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSave } from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";

import saveFile from "../helper/saveFile";

import Mp3Player from "./Mp3Player";

export default function Player({ content, audio }) {
	const snapshots = content.snapshots;
	const lang = content.lang;
	const [theme, setTheme] = useState("vs-dark");
	const [text, setText] = useState(content.text);
	const [customizedText, setCustomizedText] = useState(text);
	const [onPlay, setOnPlay] = useState(false);
	const [currentDuration, setDuration] = useState(0);

	const getCurrentSnapshot = (snapshots, timestamp) => {
		const currentContent = snapshots.filter(
			(element) => element.timestamp === timestamp
		)[0];
		return currentContent;
	};

	const handleOnPlay = () => {
		setOnPlay(!onPlay);
	};

	const toggleTheme = () => {
		setTheme(theme === "vs-dark" ? "light" : "vs-dark");
	};

	const handleSaveChange = () => {
		saveFile(customizedText, lang);
	};

	const handleEditorDidMount = (editor, monaco) => {
		console.log("editorDidMount", editor);
	};

	useEffect(() => {
		const currentSec = Math.floor(currentDuration);
		const currentText = getCurrentSnapshot(snapshots, currentSec);
		setText(currentText.text);
		setCustomizedText(currentText.text);
		console.log(text);
	}, [currentDuration]);

	const handleOnChange = (evt, newValue) => {
		debugger;
		setCustomizedText(newValue);
	};

	return (
		<Container>
			<Header>
				<ButtonGroup>
					<Button onClick={toggleTheme}>
						<FontAwesomeIcon
							icon={theme === "vs-dark" ? faMoon : faSun}
							size="2x"
						/>
					</Button>
					<Button onClick={handleSaveChange}>
						<FontAwesomeIcon icon={faSave} size="2x" />
					</Button>
				</ButtonGroup>

				<Mp3Player
					onPlay={handleOnPlay}
					setDuration={setDuration}
					audio={audio}
				/>
			</Header>
			<EditorContainer>
				<MonacoEditor
					height={100 + "%"}
					width={100 + "%"}
					language={lang}
					value={customizedText}
					onChange={handleOnChange}
					editorDidMount={handleEditorDidMount}
					theme={theme}
				/>
			</EditorContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	height: 100%;
	box-sizing: border-box;
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	font-size: 1rem;
	color: white;
	padding: 50px 80px;
`;
const ButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
`;
const Header = styled.div`
	width: 100%;
	height: 6%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
`;

const Button = styled.button`
	background-color: #fff;
	width: 50px;
	height: 40px;
	border: none;
	border-radius: 3px;
	margin: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const EditorContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	margin-top: 0;
	border: "1px solid #fff";
`;
