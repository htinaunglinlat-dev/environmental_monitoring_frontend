import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useKeyboard } from "@/providers/keyboard-provider";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setKeyboardVisible} = useKeyboard()

  useEffect(() => {
    setKeyboardVisible(true)

    return () => {
      setKeyboardVisible(false)
    }
  }, [])

  return (
    <div className="flex justify-center">
      <Card className="w-96">
        <CardHeader></CardHeader>
        <CardContent>
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
