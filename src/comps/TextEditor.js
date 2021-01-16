import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function TextEditor({ currentText, onPlay, onEditing }) {
	const [text, setText] = useState(currentText);
	const [isEditorReady, setIsEditorReady] = useState(false);

	useEffect(() => {
		if (onPlay) setText(currentText);
	}, [currentText]);

	function handleEditorDidMount() {
		if (!onPlay) setIsEditorReady(true);
		//valueGetter.current = _valueGetter;
	}

	function handleShowValue() {
		//alert(valueGetter.current());
	}

	const handleSaveChange = () => {
		//TODO save code snippet into file
	};

	return (
		<>
			<button onClick={handleShowValue} disabled={!isEditorReady}>
				Show value
			</button>
			<button onClick={handleSaveChange}> Save</button>
			<Editor
				height="90vh"
				width="100%"
				language="javascript"
				readOnly={onPlay}
				value={text}
				editorDidMount={handleEditorDidMount}
				theme="vs-dark"
			/>
		</>
	);
}
