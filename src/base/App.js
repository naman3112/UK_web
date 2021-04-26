import React from "react";
import SiteFooter from "./StickyFooter";
import SiteHeader from "./StickyHeader";
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from "../routing/base/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
     
      <Router />
      
    </div>
  );
}

export default App;
