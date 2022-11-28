import React from 'react'
import type { StoryObj } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/assets/css/global.css'
import Image from 'next/image'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from '../src/libs/store'

// @ts-ignore
Image.defaultProps = {
  unoptimized: true,
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'gray',
        value: '#f3f4f6',
      },
      {
        name: 'coral-pink',
        value: '#ff7b88',
      },
    ],
  },
}

const store = createStore()
const persistor = persistStore(store)

export const decorators: StoryObj['decorators'] = [
  (storyFn, context) => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{storyFn(context)}</PersistGate>
    </Provider>
  ),
]
