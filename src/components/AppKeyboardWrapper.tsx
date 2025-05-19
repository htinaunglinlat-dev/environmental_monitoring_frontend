import { cn } from "@/lib/utils";
import { type FunctionComponent, useState, type RefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: RefObject<typeof Keyboard>;
  setKeyboardVisible: boolean;
  // setKey: React.Dispatch<string>
  // getKey: (value: string) => void
  onKeyPress: (button: string) => void;
  layoutName: string
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  setKeyboardVisible,
  // setKey,
  // getKey,
  onKeyPress,
  layoutName
}) => {

  return (
    <div
      className={cn(
        "w-full h-[250px] bg-slate-300 fixed bottom-0 left-0 flex justify-center items-center",
        setKeyboardVisible ? "h-[250px]" : "h-0 overflow-hidden"
      )}
    >
      <div className="w-[1100px] h-[240px] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          layoutName={layoutName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onRender={() => console.log("Rendered")}
        />
      </div>
    </div>
  );
};

export default KeyboardWrapper;
