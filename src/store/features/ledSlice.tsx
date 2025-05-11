import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  status: Record<string, "ON" | "OFF">
};

const initialState: InitialStateType = {
  status: {}
};

const ledSlice = createSlice({
  name: "led",
  initialState,
  reducers: {
    toggleLedStatus: (state, action: PayloadAction<{deviceId: string}>) => {
      state.status[action.payload.deviceId] = state.status[action.payload.deviceId] === "ON" ? "OFF" : "ON"
    },
  },
});

export const ledReducer = ledSlice.reducer;
export const { toggleLedStatus } = ledSlice.actions;
