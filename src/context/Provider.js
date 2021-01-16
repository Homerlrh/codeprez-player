import React, {createContext,  useReducer} from "react";
import sessionStorageParser from "../helper/sessionStorageParser";

const defaultContent = sessionStorageParser();
export const ContentContext = createContext(defaultContent);
export const DispatchContent = createContext(null);

export const ContentProvider = ({children}) => {
  const [content, dispatchContent] = useReducer(
    (content, changes) => {
      sessionStorageParser(changes);
      return {...content, ...changes}
    },
    defaultContent
  );

  return(
    <ContentContext.provider value={content}>
      <DispatchContent.provider value={dispatchContent}>
        {children}
      </DispatchContent.provider>
    </ContentContext.provider>
  )
}