import KeyboardWrapper from "@/components/AppKeyboardWrapper";
import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type keyboardProviderState = {
  input: string;
  onChangeInput: (value: string) => void;
  setKeyboardVisible: (value: boolean) => void;
  // setInput: (value: string) => void;
  key: string
  // getKey: (value: string) => void
};

const initialState: keyboardProviderState = {
  input: "",
  onChangeInput: () => null,
  setKeyboardVisible: () => null,
  // setInput: () => null,
  key: "",
  // getKey: () => null
};

const KeyboardProviderContext = createContext(initialState);

export const KeyboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const keyboard = useRef<any>(null);
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [layoutName, setLayoutName] = useState("default");

  const onChangeInput = (value: string): void => {
    setInput(value);
    keyboard.current?.setInput(value);
  };

  const onKeyPress = (button: string): void => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
    setKey(button)
  }

  return (
    <KeyboardProviderContext.Provider
      value={{
        input,
        onChangeInput,
        setKeyboardVisible: setIsKeyboardOpen,
        key,
      }}
    >
      {children}
      <KeyboardWrapper
        keyboardRef={keyboard}
        onChange={onChangeInput}
        layoutName={layoutName}
        setKeyboardVisible={isKeyboardOpen}
        onKeyPress={onKeyPress}
      />
    </KeyboardProviderContext.Provider>
  );
};

export const useKeyboard = () => {
  const context = useContext(KeyboardProviderContext);

  if (context === undefined) {
    throw new Error("useKeyboard must be used within a KeyboardProvider");
  }
  return context;
};
