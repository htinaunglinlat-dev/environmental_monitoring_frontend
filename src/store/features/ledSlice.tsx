import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  list: Record<string, "ON" | "OFF">
};

const initialState: InitialStateType = {
  list: {}
};

/* initialState = {
  list: {
    "ESP0111": "ON",
    "ESP0111": "OFF"
  }
} */


const ledSlice = createSlice({
  name: "led",
  initialState,
  reducers: {
    setLEDStatus: (state, action: PayloadAction<{deviceId: string, status: "ON" | "OFF"}>) => {
      state.list[action.payload.deviceId] = action.payload.status
    }
  },
});

export const ledReducer = ledSlice.reducer;
export const { setLEDStatus } = ledSlice.actions;
