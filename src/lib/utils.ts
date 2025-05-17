import type { Label } from "@/components/AppRadialChart";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTemperatureLevel(temp: number) {
  if (temp >= 60) return { level: "Danger (Hot)", color: "#DC2626" };
  if (temp >= 40) return { level: "Warning (Warm)", color: "#F97316" };
  if (temp >= 20) return { level: "Normal (Mild)", color: "#EAB308" };
  if (temp >= 0) return { level: "Cool", color: "#3B82F6" };
  if (temp >= -20) return { level: "Cold", color: "#06B6D4" };
  if (temp >= -40) return { level: "Very Cold", color: "#6366F1" };
  return { level: "Danger (Frozen)", color: "#8B5CF6" };
}

export function getHumidityLevel(humidity: number) {
  if (humidity < 30) return { level: "Very Dry", color: "#DC2626" }; // Red
  if (humidity < 40) return { level: "Dry", color: "#F97316" }; // Orange
  if (humidity < 60) return { level: "Comfortable", color: "#10B981" }; // Green
  if (humidity < 70) return { level: "Humid", color: "#EAB308" }; // Yellow
  return { level: "Very Humid", color: "#3B82F6" }; // Blue
}

export function getPressureLevel(pressure: number) {
  if (pressure < 980) return { level: "Stormy", color: "#DC2626" };
  if (pressure < 1000) return { level: "Unstable", color: "#F97316" };
  if (pressure < 1020) return { level: "Fair", color: "#EAB308" };
  if (pressure < 1040) return { level: "High", color: "#10B981" };
  return { level: "Very High", color: "#3B82F6" };
}

export function getAqiLevel(aqi: number) {
  if (aqi <= 50) return { level: "Good", color: "#22C55E" };
  if (aqi <= 100) return { level: "Moderate", color: "#EAB308" };
  if (aqi <= 150) return { level: "Unhealthy (SG)", color: "#F97316" };
  if (aqi <= 200) return { level: "Unhealthy", color: "#EF4444" };
  if (aqi <= 300) return { level: "Very Unhealthy", color: "#8B5CF6" };
  return { level: "Hazardous", color: "#7F1D1D" };
}

export function getProperSensorDataLevel(label: Label, data: number | null) {
  if (!data) {
    return { level: "Unknown", color: "#EAB308" };
  } else if (label === "Temperature") {
    return getTemperatureLevel(data);
  } else if (label === "Humidity") {
    return getHumidityLevel(data);
  } else if (label === "AirQuality") {
    return getAqiLevel(data);
  } else if (label === "Pressure") {
    return getPressureLevel(data);
  }
  return { level: "Unknown", color: "#EAB308" };
}
