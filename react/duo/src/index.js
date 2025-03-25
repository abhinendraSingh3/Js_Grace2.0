import React from "react";
import ReactDom from "react-dom/client"
import Booklist from "./booklist";

const root= ReactDom.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <>
    <Booklist/>
    </>
  </React.StrictMode>
)