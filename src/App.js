import React, {useEffect} from "react";

import { ContentProvider } from "./context/Provider";

import Player from "./comps/Player";

function App() {
  //const data = JSON.parse(db);

  return (
    <ContentProvider>
      <Player />
    </ContentProvider>
  );
}

export default App;
