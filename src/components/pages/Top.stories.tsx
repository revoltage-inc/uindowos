import type { StoryObj, Meta } from '@storybook/react'
import { Top } from './Top'

export default {
  component: Top,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof Top>

export const Default: StoryObj<typeof Top> = {
  args: {},
}
