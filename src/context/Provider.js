import React, {createContext, useReducer} from "react";
import { sessionStorageParser } from "../helper/sessionStorageParser";
const data = require("../db/example.json");

const defaultContent = 
   {
    snapshots: data.snapshots,
    text:"",
    lang: data.extension.substr(data.extension.match("/")+1),
    currentTimestamp: 0,
    onPlay: false
  };

export const ContentContext = createContext(defaultContent);
export const DispatchContentContext = createContext(undefined);

// export const ContentProvider = ({children}) => {
//    const [content, dispatchContent] = useReducer(
//      (content, changes) => {
//        sessionStorageParser(changes);
//        return {...content, ...changes}
//      },
//      defaultContent
//    );

  //   return(
  //    <ContentContext.provider value={content}>
  //      <DispatchContent.provider value={dispatchContent}>
  //        {children}
  //      </DispatchContent.provider>
  //    </ContentContext.provider>
  //  )
//  } 

//export default ContentProvider;