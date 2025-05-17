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
import { ledReducer } from './features/ledSlice';
import { sensorDataReducer } from './features/sensorDataSlice';
import { roomListReducer } from './features/roomListSlice';
// ...

export const store = configureStore({
  reducer: {
    led: ledReducer,
    sensorData: sensorDataReducer,
    roomList: roomListReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch