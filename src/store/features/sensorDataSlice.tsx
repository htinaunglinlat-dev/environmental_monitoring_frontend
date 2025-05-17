import type { SensorDataType } from "@/socket/socket";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = Pick<SensorDataType, "air_quality" | "humidity" | "temperature">

const initialState: InitialStateType = {
  air_quality: 0,
  humidity: 0,
  temperature: 0
}

const sensorDataSlice = createSlice({
  name: "sensorData",
  initialState,
  reducers: {
    setSensorData: (state, action: PayloadAction<InitialStateType>) => {
      state.air_quality = action.payload.air_quality
      state.humidity = action.payload.humidity
      state.temperature = action.payload.temperature
    }
  }
})

export const sensorDataReducer = sensorDataSlice.reducer
export const {setSensorData} = sensorDataSlice.actions