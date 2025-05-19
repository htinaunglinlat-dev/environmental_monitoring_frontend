import { useState, useRef, type ChangeEvent } from "react";
import KeyboardWrapper from "./AppKeyboardWrapper";

const AppKeyboard = () => {
  const [input, setInput] = useState("");
  const keyboard = useRef<any>(null);
  // the library creator use 'any' type GG
  console.log(input)
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    console.log("input", input)
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div>
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={e => onChangeInput(e)}
      />
      <KeyboardWrapper keyboardRef={keyboard} onChange={setInput} />
    </div>
  );
};

export default AppKeyboard;
