import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Animation {
  showTerminal: boolean
  switchOff: boolean
  moveApp: boolean
}

export interface AnimationState {
  animation: Animation
}

export type UpdateAnimationPayload = Animation
export type AddHistoryPayload = string

const initialState: AnimationState = {
  animation: {
    showTerminal: true,
    switchOff: true,
    moveApp: true,
  },
}

export const animationSlice = createSlice({
  name: 'animation',
  initialState: initialState,
  reducers: {
    updateAnimation(state: any, action: PayloadAction<UpdateAnimationPayload>) {
      state.animation = action.payload
    },
    addHistory(state: any, action: PayloadAction<AddHistoryPayload>) {
      state.animation.history.push(action.payload)
    },
    reset(): AnimationState {
      return initialState
    },
  },
})
