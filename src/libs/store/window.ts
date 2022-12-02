import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Props as WindowProps } from '@components/common/Window'

export interface Window {
  propsList: WindowProps[]
}

export interface WindowState {
  window: Window
}

export type UpdateWindowPayload = Window
export type AddHistoryPayload = string

const initialState: WindowState = {
  window: {
    propsList: [],
  },
}

export const windowSlice = createSlice({
  name: 'window',
  initialState: initialState,
  reducers: {
    updateWindow(state: any, action: PayloadAction<UpdateWindowPayload>) {
      state.window = action.payload
    },
    addHistory(state: any, action: PayloadAction<AddHistoryPayload>) {
      state.window.history.push(action.payload)
    },
    reset(): WindowState {
      return initialState
    },
  },
})
