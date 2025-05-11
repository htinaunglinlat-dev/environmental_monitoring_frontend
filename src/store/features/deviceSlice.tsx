import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  lists: string[]
}

const deviceSlice = createSlice({
  name: "devices", 
  initialState: {
    lists: []
  } as initialState, 
  reducers: {
    addDeviceCompletely: (state, action: PayloadAction<string[]>) => {
      // console.log('payload', action.payload)
      // console.log("new devices", state.lists.length);
      // console.log("old devices", action.payload.length)

      if((state.lists.length === action.payload.length)) {
        const validDeviceList = state.lists.map((list) => state.lists.includes(list))
        // [true, false, true] true = valid and keep, false = invalid and remove

        const differentDeviceExists = validDeviceList.includes(false)
        if(differentDeviceExists) {
          console.log("dispatch 1")
          state.lists = action.payload
        }
      } else {
        console.log("dispatch 2")
        state.lists = action.payload
      }
    }
  }
})

export const deviceReducer = deviceSlice.reducer

export const {addDeviceCompletely} = deviceSlice.actions