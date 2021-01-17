import React, { useState, useEffect, useContext } from "react";
import {ControlledEditor as MonacoEditor} from "@monaco-editor/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSave } from "@fortawesome/fontawesome-free-solid";

import styled from "styled-components";

export default function TextEditor({ currentText, lang, onPlay }) {

  const [theme, setTheme] = useState("vs-dark");
  const [text, setText] = useState(currentText);
  const [customizedText, setCustomizedText] = useState(text);
	
  const handleEditorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
  };

	useEffect(() => {
		//if (onPlay) { 
      setText(currentText);
      setCustomizedText(currentText);
    //}
  }, [currentText]);

  
  //set onPlay to true will erase user changes
  useEffect(() => {
		if (onPlay) { 
      setCustomizedText(text);
    }
	}, [onPlay]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  }

  const handleOnChange = (evt, newValue) => {
    debugger  
    setCustomizedText(newValue);
  }

	const handleSaveChange = () => {
    const type = {type:`text/${lang}`||"text/javascript"};
    const blob = new Blob([customizedText], type);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = "example.js";
    link.href = url;
    link.click();
  }

	return (
		<>
      <Menu >
        <Button onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme==="vs-dark"? faMoon:faSun} size="2x" />
        </Button>
        <Button onClick={handleSaveChange}> 
           <FontAwesomeIcon icon={faSave} size="2x" />
        </Button>
      </Menu>
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
		</>
	);
}
const Menu = styled.div`
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