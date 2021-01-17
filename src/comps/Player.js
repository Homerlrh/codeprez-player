import React, { useState, useEffect, useContext } from "react";
import {ControlledEditor as MonacoEditor} from "@monaco-editor/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSave } from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";

import saveFile from "../helper/saveFile";

import Mp3Player from "./Mp3Player";

export default function Player({ content, audio}) {
  const snapshots = content.snapshots;
  const lang = content.lang;
  const [theme, setTheme] = useState("vs-dark")
  const [text, setText] = useState(content.text);
  const [customizedText, setCustomizedText] = useState(text);
	const [currentPlayTime, setCurrentPlayTime] = useState(0);
	const [onPlay, setOnPlay] = useState(false);
	const [currentDuration, setDuration] = useState(0);

<<<<<<< HEAD
	const getCurrentSnapshot = (snapshots, timestamp) => {
		const currentSnapshot = snapshots.filter(
			(element) => parseInt(element.timestamp) === timestamp
		);
		return currentSnapshot[0].text;
=======
	const handleTextParse = (snapshots, timestamp) => {
		const currentContent = snapshots.filter(
			(element) => element.timestamp === timestamp
		)[0];
		return currentContent;
>>>>>>> 6fdb9d32288b2d79817a94593835aebdff7cb221
  };
  
  const handleOnPlay = () => {
    setOnPlay(!onPlay);
  }
  
	const toggleTheme = () => {
    setTheme(theme === "vs-dark"? "light":"vs-dark");
  }

  const handleSaveChange = () => {
    saveFile(customizedText, lang);
  }
	const changeTimeInterval = () => {
		const durationInMS = Math.floor(currentDuration * 1000);
		console.log(durationInMS);
	};

<<<<<<< HEAD
  const handleEditorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
  };

  useEffect(() => {
		if (onPlay) {
			const interval = setInterval(() => {
        setCurrentPlayTime(currentPlayTime + 1);
        const currentText = getCurrentSnapshot(snapshots, currentPlayTime);
        setText(currentText);
        setCustomizedText(currentText);
      }, 800);
			return () => clearInterval(interval);
		}
	},[onPlay]);

  //set onPlay to true will erase user changes
  useEffect(() => {
		if (onPlay) { 
      setCustomizedText(text);
    }
	}, [onPlay]);
=======
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
>>>>>>> 6fdb9d32288b2d79817a94593835aebdff7cb221

  const handleOnChange = (evt, newValue) => {
    debugger  
    setCustomizedText(newValue);
  }
	
	return (
<<<<<<< HEAD
		<div className="App-header">
      <Header >
       <Button onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme==="vs-dark"? faMoon:faSun} size="2x" />
        </Button>
        <Button onClick={handleSaveChange}> 
           <FontAwesomeIcon icon={faSave} size="2x" />
        </Button>
        <div style={{ paddingTop: "5%" }}>
=======
		<>
			<div className="App-header">
				<div style={{ width: "50%", marginRight: "5%" }}>
					<TextEditor lang={lang} currentText={text} onPlay={onPlay} />
				</div>
				<div style={{ paddingTop: "5%" }}>
>>>>>>> 6fdb9d32288b2d79817a94593835aebdff7cb221
          <Mp3Player onPlay={handleOnPlay}
            setDuration={setDuration} />
				</div>
      </Header>
      <div style={{ width: "80%", border:"1px solid #fff"}}>
        <MonacoEditor
          height="90vh"
          width="100%"
          language={lang}
          value={customizedText}
          onChange={handleOnChange}
          editorDidMount={handleEditorDidMount}
          theme={theme}
          //options={ {selectOnLineNumbers: true , minimap: { enable: false} }}
			  />
      </div>
		</div>
	);
}

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #fff;
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 3px;
  margin:5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;