import { useRef, useState } from "react";
import { KeyboardReact } from "react-simple-keyboard"; // ✅ Correct way
import "react-simple-keyboard/build/css/index.css";

function AppKeyboard() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef<typeof KeyboardReact>(null);

  const onChange = (input: string) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className="App">
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <KeyboardReact
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default AppKeyboard;


/*
main
git push
git commit

git branch
git switch -c feature/keyboard

git commit -m ""

git checkout main

git checkout feature/keyboard
git switch feature/keyboard

git merge feature/keyboard
git push
git main commit
git status .
*/