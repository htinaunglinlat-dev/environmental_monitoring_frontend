// ✅ Sensor data received from the server through the "datas" event
export interface SensorReading {
  _id: string;                    // MongoDB ID
  device_id: string;              // Associated device's unique identifier
  temperature: number;
  humidity: number;
  air_quality: number;
  LED_status: "ON" | "OFF";
  timestamp: string;
}

// ✅ List of device IDs received from the server through the "devices" event
export type DeviceIDList = string[]; // Array of all connected device IDs

// ✅ Payload sent to server through the "send_to_esp32" event to control LED
export interface LEDTogglePayload {
  device_id: string;              // Target device ID to control
  value: "ON" | "OFF";            // Desired LED state
}
