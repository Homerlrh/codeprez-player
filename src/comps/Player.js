import React, {useState, useEffect, useContext} from "react";
import TextEditor from "./TextEditor";
import { ContentContext } from "../context/Provider";

export default function Player() {
  const content = useContext(ContentContext);
  
  const [text, setText] = useState(content.text);
  const [timestamp, setTimestamp] = useState(content.currentTimestamp);
  const [onPlay, setOnPlay] = useState(content.onPlay);

  const handleTextParse = (data, timestamp) => {
    const currentContent = data.snapshots.filter(element => element.timestamp === timestamp)[0];
    return currentContent.text;
  }

  useEffect(()=>{
    if(onPlay) {
      const interval = setInterval(() => {
      setText(handleTextParse(data, (timestamp+1000)));
      setTimestamp(timestamp+1000);
    }, 1000);
    return () => clearInterval(interval);
    }
  })

  return(
    <TextEditor currentText={text} onPlay={onPlay}/>
  )
}