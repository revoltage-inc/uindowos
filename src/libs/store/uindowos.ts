import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Props as WindowProps } from '@components/common/Window'

export interface UindowOS {
  terminalAnimation: boolean
  switchOffAnimation: boolean
  appMoveAnimation: boolean
  windowPropsList: WindowProps[]
}

export interface UindowOSState {
  uindowos: UindowOS
}

export type UpdateUindowOSPayload = UindowOS
export type AddHistoryPayload = string

const initialState: UindowOSState = {
  uindowos: {
    terminalAnimation: true,
    switchOffAnimation: true,
    appMoveAnimation: true,
    windowPropsList: [],
  },
}

export const uindowosSlice = createSlice({
  name: 'uindowos',
  initialState: initialState,
  reducers: {
    updateUindowOS(state: any, action: PayloadAction<UpdateUindowOSPayload>) {
      state.uindowos = action.payload
    },
    addHistory(state: any, action: PayloadAction<AddHistoryPayload>) {
      state.uindowos.history.push(action.payload)
    },
    reset(): UindowOSState {
      return initialState
    },
  },
})
