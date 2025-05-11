import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

interface Props {
  chartData: number;
  label: "Temperature" | "Humidity" | "AirQuality" | "Pressure";
  minValue: number;
  maxValue: number;
}

function getTemperatureLevel(temp: number) {
  if (temp >= 60) return { level: "Danger (Hot)", color: "#DC2626" };
  if (temp >= 40) return { level: "Warning (Warm)", color: "#F97316" };
  if (temp >= 20) return { level: "Normal (Mild)", color: "#EAB308" };
  if (temp >= 0) return { level: "Cool", color: "#3B82F6" };
  if (temp >= -20) return { level: "Cold", color: "#06B6D4" };
  if (temp >= -40) return { level: "Very Cold", color: "#6366F1" };
  return { level: "Danger (Frozen)", color: "#8B5CF6" };
}

function getHumidityLevel(humidity: number) {
  if (humidity < 30) return { level: "Very Dry", color: "#DC2626" };      // Red
  if (humidity < 40) return { level: "Dry", color: "#F97316" };           // Orange
  if (humidity < 60) return { level: "Comfortable", color: "#10B981" };   // Green
  if (humidity < 70) return { level: "Humid", color: "#EAB308" };         // Yellow
  return { level: "Very Humid", color: "#3B82F6" };                       // Blue
}


function getPressureLevel(pressure: number) {
  if (pressure < 980) return { level: "Stormy", color: "#DC2626" };
  if (pressure < 1000) return { level: "Unstable", color: "#F97316" };
  if (pressure < 1020) return { level: "Fair", color: "#EAB308" };
  if (pressure < 1040) return { level: "High", color: "#10B981" };
  return { level: "Very High", color: "#3B82F6" };
}

function getAqiLevel(aqi: number) {
  if (aqi <= 50) return { level: "Good", color: "#22C55E" };
  if (aqi <= 100) return { level: "Moderate", color: "#EAB308" };
  if (aqi <= 150) return { level: "Unhealthy (SG)", color: "#F97316" };
  if (aqi <= 200) return { level: "Unhealthy", color: "#EF4444" };
  if (aqi <= 300) return { level: "Very Unhealthy", color: "#8B5CF6" };
  return { level: "Hazardous", color: "#7F1D1D" };
}

const AppRadialChart: React.FC<Props> = ({
  chartData,
  label,
  minValue,
  maxValue,
}) => {
  let getLevel: {
    level: string;
    color: string;
  } = null!;

  if (label === "Temperature") {
    getLevel = getTemperatureLevel(chartData);
  } else if (label === "Humidity") {
    getLevel = getHumidityLevel(chartData);
  } else if (label === "AirQuality") {
    getLevel = getAqiLevel(chartData);
  } else if (label === "Pressure") {
    getLevel = getPressureLevel(chartData)
  }
  return (
    <Card className="p-3 w-96">
      <CardTitle className="font-bold text-2xl capitalize flex justify-between items-center">
        {label}
        <span className="bg-secondary shadow-sm p-1 text-md">
          {label === "Temperature"
            ? "°C"
            : label === "Humidity"
            ? "%"
            : label === "AirQuality"
            ? "AQI"
            : label === "Pressure" ?
            "hPa" : ""}
        </span>
      </CardTitle>
      <CardContent className="size-[200px] p-0 flex w-fit mx-auto">
        <CircularProgressbar
          value={chartData}
          minValue={minValue}
          maxValue={maxValue}
          text={`${chartData}`}
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
      </CardContent>
      <CardFooter className="flex justify-center items-center p-0">
        <div
          style={{
            backgroundColor: getLevel.color,
          }}
          className="p-2 rounded-md text-white font-bold"
        >
          {getLevel.level}
        </div>
      </CardFooter>
    </Card>
  );
};
``;
export default AppRadialChart;

// "un use"

// import {
//   Label,
//   PolarGrid,
//   PolarRadiusAxis,
//   RadialBar,
//   RadialBarChart,
// } from "recharts";

// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";
// import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
// // import { time, timeStamp } from "console";
// // const chartData = [
// //   { timestamp: "safari", value: 200, fill: "#DC2626" },
// // ];

// const chartConfig = {
//   dataKey: 'value',
//   nameKey: 'name',
//   cornerRadius: 10,
//   barSize: 20
// } as ChartConfig

// interface Props {
//   data: {
//     timestamp: string
//     value: number
//   }
// }

// function getTemperatureLevel(temp: number) {
//   if (temp >= 60) return { level: "Danger (Hot)", color: "#DC2626" };
//   if (temp >= 40) return { level: "Warning (Warm)", color: "#F97316" };
//   if (temp >= 20) return { level: "Normal (Mild)", color: "#EAB308" };
//   if (temp >= 0)  return { level: "Cool", color: "#3B82F6" };
//   if (temp >= -20) return { level: "Cold", color: "#06B6D4" };
//   if (temp >= -40) return { level: "Very Cold", color: "#6366F1" };
//   return { level: "Danger (Frozen)", color: "#8B5CF6" };
// }

// function generateValueForChart (temp: number) {
//   // min  = 250 max = -70 total= 320 middle point 160
//   return (90 - (temp * 1.6)) > 250 ? 250 : (90 - (temp * 1.6)) < -70 ? -70 : (90 - (temp * 1.6))
//   // return value 250 > x > -70
// }

// const AppRadialChart: React.FC<Props> = ({ data }) => {

//   const chartData = {
//     timestamp: data.timestamp,
//     value: data.value,
//     fill: getTemperatureLevel(data.value).color
//   }
//   const chartValue = generateValueForChart(data.value)

//   console.log(chartData)

//   return (
//     <Card>
//       <CardContent>
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <RadialBarChart
//             data={[chartData]}
//             startAngle={0}
//             endAngle={90} // -70 (maximum value)
//             // innerRadius={80}
//             // outerRadius={110}
//             innerRadius="60%"
//             outerRadius="100%"
//           >
//             <PolarGrid
//               gridType="circle"
//               radialLines={false}
//               stroke="none"
//               // className="first:fill-muted last:fill-background"
//               // polarRadius={[86, 74]}
//             />
//             <RadialBar dataKey="value" fill={chartData.fill} cornerRadius={10}/>
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-4xl font-bold"
//                         >
//                           {chartData.value.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground/60 text-2xl font-bold"
//                         >
//                           pHa
//                         </tspan>
//                       </text>
//                     );
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//           </RadialBarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }

// export default AppRadialChart;
