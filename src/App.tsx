import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";

//this app type is react functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">
        Taskify
        <InputField todo={todo} setTodo={ setTodo} />
      </span>
    </div>
  );
};

export default App;

//20.00
