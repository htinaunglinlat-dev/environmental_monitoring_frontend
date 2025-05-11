export interface SensorDataType {
  _id:         string;
  device_id:   string;
  temperature: number;
  humidity:    number;
  air_quality: number;
  LED_status:  string;
  timestamp:   string;
}

import { configureStore } from '@reduxjs/toolkit'
import { deviceReducer } from './features/deviceSlice';
import { ledReducer } from './features/ledSlice';
import { sensorDataReducer } from './features/sensorDataSlice';
// ...

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
    led: ledReducer,
    sensorData: sensorDataReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch