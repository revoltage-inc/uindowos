import type { StoryObj, Meta } from '@storybook/react'
import { Terminal } from './Terminal'

export default {
  component: Terminal,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof Terminal>

export const Default: StoryObj<typeof Terminal> = {
  args: {},
}
