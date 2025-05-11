import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  status: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppToggle: React.FC<Props> = ({ icon: Icon, status, onClick }) => {
  return (
    <Card className="p-0 w-96 overflow-hidden mx-auto">
      <CardContent className="p-0">
        <div className="flex">
          <div
            className={cn(
              "size-32 border-r border-r-muted-foreground p-5 flex justify-center items-center transition-all",
              status ? "bg-green-600" : "bg-slate-500"
            )}
          >
            <Icon className={cn("size-20 transition-all", status ? "scale-110 text-white" : "scale-90")} />
          </div>
          <div className="flex flex-col w-full">
            <div className="border-b border-b-muted-foreground items-center p-1 flex justify-end">
              <button
                className={cn(
                  "py-2 px-3 rounded-md text-white cursor-pointer",
                  status ? "bg-green-600" : "bg-slate-500 "
                )}
                onClick={onClick}
              >
                {status ? "ON" : "OFF"}
              </button>
            </div>
            <div className="h-2/3">{/* Up to: <span>10 hours</span> */}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppToggle;
