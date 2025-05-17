import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface RoomType {
  roomName: string;
  deviceList: string[];
}

export type RoomListType = Record<string, RoomType>;

const initialState: RoomListType = {
  "living room": {
    roomName: "living room",
    deviceList: [],
  },
  kitchen: {
    roomName: "kitchen",
    deviceList: [],
  },
};

const roomListSlice = createSlice({
  name: "roomList",
  initialState,
  reducers: {
    addRoom: (state, action: PayloadAction<string>) => {
      state[action.payload.toLowerCase()] = {
        roomName: action.payload.toLowerCase(),
        deviceList: [],
      };
    },
    addDevicesToRoom: (
      state,
      action: PayloadAction<{ roomName: string; deviceList: string | string[] }>
    ) => {
      if (Array.isArray(action.payload.deviceList)) {
        state[action.payload.roomName].deviceList = [
          ...state[action.payload.roomName].deviceList,
          ...action.payload.deviceList,
        ];
      } else {
        state[action.payload.roomName].deviceList = [...state[action.payload.roomName].deviceList, action.payload.deviceList]
      }
    },
  },
});

export const roomListReducer = roomListSlice.reducer;
export const { addDevicesToRoom, addRoom } = roomListSlice.actions;
