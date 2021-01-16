import React, {useState, useEffect, useContext} from "react";
import TextEditor from "./TextEditor";
import { ContentContext } from "../context/Provider";
import Mp3Player from "./Mp3Player";

import db from "./db/example.json";

export default function Player() {
  //mock data
  const data = JSON.parse(db);

  const defaultContent = {
    text:"",
    currentTimestamp: 0,
    onPlay: false
  }
  
  const content = useContext(ContentContext || defaultContent);

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
    <>
      <Mp3Player />
      <TextEditor currentText={text} onPlay={onPlay}/>
    </>
  )
}