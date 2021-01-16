import React, {createContext, useReducer} from "react";
import { sessionStorageParser } from "../helper/sessionStorageParser";

const defaultContent = 
   {
    text:"",
    currentTimestamp: 0,
    onPlay: false
  };

export const ContentContext = createContext(defaultContent);
export const DispatchContentContext = createContext(undefined);

// 

//export default ContentProvider;