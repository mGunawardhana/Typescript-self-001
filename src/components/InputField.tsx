import React, { useRef } from "react";
import "../components/styles.css";

//we can use interface to gave this types
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

//rafce - short key to react functional component

//method - 01
// const InputField = ({ todo, setTodo }: Props) => {

//method -02
//const InputField:React.FC<Props> = ({ todo, setTodo }: Props) => {

/*this one is basically not that much necessary  because we know
that is functional component */
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    /* if we want to fire the button on clicking button we can
      call handleAdd function on forms onSubmit phase */
      <form className="input" onSubmit={(e) => { 
          handleAdd(e)
          inputRef.current?.blur();
      }}>
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
