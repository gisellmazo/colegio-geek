import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from "react-router-dom";
import login from "./pages/login"

const App = () => {
  return(
    <BrowserRouter>
      <Route path="/" component={login} />
    </BrowserRouter>
  ) 
}




ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
);



  