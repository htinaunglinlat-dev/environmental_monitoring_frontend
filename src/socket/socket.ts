import {io, Socket} from "socket.io-client"

export type SensorDataType = {
  _id: string;
  device_id: string;
  temperature: number;
  humidity: number;
  air_quality: number;
  LED_status: "ON" | "OFF";
  timestamp: string;
};

export const URL = "http://192.168.110.172:8000"
// export const URL = "http://localhost:3000"

interface ServerToClientEvents {
  devices: (deviceLists: string[]) => void
  datas: (sensorData: SensorDataType) => void
}

interface ClientToServerEvents {
  send_to_esp32: (data: {device_id: string, value: "ON" | "OFF"}) => void
}


const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL)

export const getSocket = () => socket