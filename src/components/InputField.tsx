import React from "react";
import "../components/styles.css";

//rafce - short key to react functional component
const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input_box" />
      <button className="input_submit" type="submit">Go</button>
    </form>
  );
};

export default InputField;

