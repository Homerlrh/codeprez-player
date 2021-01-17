import React, { useEffect, useState } from "react";
import "./App.css";
import fs from "fs";
import Axios from "axios"; // Import Axios or use Fetch.

import Player from "./comps/Player";

function App() {
  
  const [content, setContent] = useState(null);
  
  useEffect(()=> {
    const fetchData = async () => {
      Axios("./db/CodePrez.cdpz").then(res => {
      setContent(res.data);
      console.log(res.data)
    })};
    fetchData();
  },[])

	return (
   <div className="App">
      {content && <Player content={content} audio="./db/CodePrez.weba"/>}
    </div>
  );
}

export default App;
