import type { SensorDataType } from "@/pages/temperature/Temperature"
import {io, Socket} from "socket.io-client"

export const URL = "http://192.168.110.172:8000"

interface ServerToClientEvents {
  devices: (deviceLists: string[]) => void
  datas: (sensorData: SensorDataType) => void
}

interface ClientToServerEvents {
  send_to_esp32: (data: {device_id: string, value: "ON" | "OFF"}) => void
}


const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL)

export const getSocket = () => socket