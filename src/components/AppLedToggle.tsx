import { Pencil, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRef, useState, type FormEvent } from "react";
import { Input } from "./ui/input";

interface Props {
  icon: LucideIcon;
  status: boolean;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  LEDName?: string;
}

const AppLedToggle: React.FC<Props> = ({
  icon: Icon,
  status,
  onClick,
  LEDName = "unknown",
}) => {

  // remove it and make re-render
  const [ledName, setLedName] = useState(LEDName)

  const LEDNameRef = useRef<HTMLInputElement>(null); // 👈 useRef
  const [isEdit, setIsEdit] = useState(false);

  const changeHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(LEDNameRef.current) {
      // make api request instead of use hooks
      setLedName(LEDNameRef.current.value)
    }
    setIsEdit(false)
  };

  const blurHandler = () => {
    if(LEDNameRef.current) {
      if(LEDNameRef.current.value.trim() !== "") {
        setLedName(LEDNameRef.current.value)
      }
    }
    setIsEdit(false)
  }

  return (
    <Card className="mx-auto w-48 py-2">
      <CardHeader className="py-0! px-2 border-b border-b-muted-foreground">
        {isEdit ? (
          <form className="flex flex-col gap-2" onSubmit={changeHandler}>
            {/* change "ledName" to "LEDName" when connect to server */}
            <Input placeholder={ledName} ref={LEDNameRef} autoFocus onBlur={blurHandler} />
            {/* <div className="flex justify-between">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-500 cursor-pointer"
                onClick={() => setIsEdit(false)}
              >
                Discard
              </Button>
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-500 cursor-pointer"
              >
                Save
              </Button>
            </div> */}
          </form>
        ) : (
          <div className="flex justify-between items-center">
            {/* change "ledName" to "LEDName" when connect to server */}
            <h1 className="line-clamp-1 font-semibold text-muted-foreground">{ledName}</h1>
            <Button
              className="cursor-pointer"
              variant={"ghost"}
              onClick={() => setIsEdit(true)}
            >
              <Pencil />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className="mx-auto px-2 pb-2">
        <div className="flex">
          <div
            onClick={onClick}
            className={cn(
              "size-32 p-5 flex justify-center items-center transition-all cursor-pointer rounded-sm",
              status
                ? "bg-blue-600 text-white"
                : "bg-slate-500/80 text-slate-800"
            )}
          >
            <Icon
              className={cn(
                "size-20 transition-all",
                status ? "scale-110 text-white" : "scale-90"
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppLedToggle;

// const AppLedToggle: React.FC<Props> = ({ icon: Icon, status, onClick }) => {
//   return (
//     <div
//       className={cn(
//         "w-fit min-h-32 rounded-md",
//         status ? "bg-blue-600 text-white" : "bg-slate-500/80 text-slate-800"
//       )}
//     >
//       <Button
//         asChild
//         onClick={onClick}
//         className="h-full w-32 cursor-pointer bg-transparent hover:bg-transparent!"
//       >
//         <Icon
//           className={cn(
//             "size-20 transition-all duration-100",
//             status ? "scale-110 text-white" : "scale-90"
//           )}
//         />
//       </Button>
//     </div>
//   );
// };

("CrazySci3ntist");
