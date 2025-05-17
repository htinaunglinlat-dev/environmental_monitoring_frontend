import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { getProperSensorDataLevel } from "@/lib/utils";

export type Label = "Temperature" | "Humidity" | "AirQuality" | "Pressure";

interface Props {
  chartData: number | null;
  label: Label
  minValue: number;
  maxValue: number;
}

const AppRadialChart: React.FC<Props> = ({
  chartData,
  label,
  minValue,
  maxValue,
}) => {

  let getLevel = getProperSensorDataLevel(label, chartData)

  return (
    <Card className="p-2 w-full">
      <CardContent className="size-[200px] p-0 flex w-fit mx-auto h-fit">
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <CircularProgressbar
              value={chartData ?? 0}
              minValue={chartData ? minValue : 0}
              maxValue={maxValue}
              text={`${chartData ?? 0}`}
              circleRatio={0.75}
              className="rounded-md"
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "rounded",
                trailColor: "#eee",
                backgroundColor: getLevel.color,
                pathColor: getLevel.color,
              })}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-muted-foreground font-semibold text-xl mb-2">
              {label}
            </h1>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Unit</TableCell>
                  <TableCell>
                    <div className="px-2 py-1 bg-slate-200 rounded w-fit font-bold">
                    {chartData ? label === "Temperature"
                      ? "°C"
                      : label === "Humidity"
                      ? "%"
                      : label === "AirQuality"
                      ? "AQI"
                      : label === "Pressure"
                      ? "hPa"
                      : "" : "null"}
                      </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Level</TableCell>
                  <TableCell>
                    <div
                      style={{
                        backgroundColor: getLevel.color,
                      }}
                      className="px-2 py-1 rounded-md text-white font-bold w-fit"
                    >
                      {getLevel.level}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppRadialChart;
