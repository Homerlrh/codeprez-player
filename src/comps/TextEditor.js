import React, {useState, useEffect, useContext} from "react";
import Editor from "@monaco-editor/react";

export default function TextEditor({currentText, onPlay, onEditing}) {
  const [text, setText] = useState(currentText);
  const [isEditorReady, setIsEditorReady] = useState(false);
  
  useEffect(() => {
    if(onPlay)
      setText(text);
  },[text]);

  function handleEditorDidMount() {
    if(!onPlay)
      setIsEditorReady(true);
    //valueGetter.current = _valueGetter;
  }

  function handleShowValue() {
    //alert(valueGetter.current());
  }

  const handleSaveChange = () => {
    //TODO save code snippet into file
  }

  return (
    <>
      <button onClick={handleShowValue} disabled={!isEditorReady}>
        Show value
      </button>
      <button onClick={handleSaveChange} />
      <Editor
        height="90vh"
        language="javascript"
        readOnly={onPlay}
        value={text}
        editorDidMount={handleEditorDidMount}
      />
    </>
  );
  
  
}