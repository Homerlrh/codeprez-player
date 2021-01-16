import React, {useEffect} from "react";

import { ContentProvider } from "./context/Provider";
import db from "./db/example.json";
import Player from "./comps/Player";

function App() {
  return (
    <ContentProvider>
      <Player />
    </ContentProvider>
    
  );
}

export default App;
