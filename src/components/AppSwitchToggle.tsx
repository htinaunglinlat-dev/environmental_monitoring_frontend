import { type LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  status: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pin?: number;
}

const AppSwitchToggle: React.FC<Props> = ({
  icon: Icon,
  status,
  onClick,
  pin = 1,
}) => {
  return (
    <Card className="p-0 overflow-hidden mx-auto w-full">
      <CardContent className="p-0">
        <div className="flex">
          <div
            className={cn(
              "size-32 border-r border-r-muted-foreground p-5 flex justify-center items-center transition-all",
              status ? "bg-blue-600 text-white" : "bg-slate-500/80 text-slate-800"
            )}
          >
            <Icon
              className={cn(
                "size-20 transition-all",
                status ? "scale-110 text-white" : "scale-90"
              )}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="border-b border-b-muted-foreground p-1 flex justify-end items-center py-2">
              <button
                className={cn(
                  "py-2 px-3 rounded-md text-white cursor-pointer",
                  status ? "bg-blue-600" : "bg-slate-500/80"
                )}
                onClick={onClick}
              >
                {status ? "ON" : "OFF"}
              </button>
            </div>
            <div className="h-2/3 p-2">
              <div className="text-muted-foreground/90 font-semibold dark:text-white/80">
                GPIO PIN: {pin}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppSwitchToggle;

// Socket.emit("data_refresh", {
//   Temperature
//   AirVent
//   pressure
//   ledStatus: {
//     pin:
//     status:

//   }
//   switchStatus
// })
// ledStatus
// {
//   temp
//   air

// }
