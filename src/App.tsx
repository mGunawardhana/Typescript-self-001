import React from "react";

import "./App.css";
import InputField from "./components/InputField";

//this app type is react functional component
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">
        Taskify
        <InputField />
      </span>
    </div>
  );
};

export default App;

//20.00
