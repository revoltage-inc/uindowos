import type { StoryObj, Meta } from '@storybook/react'
import { NotFound } from './NotFound'

export default {
  component: NotFound,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof NotFound>

export const Default: StoryObj<typeof NotFound> = {
  args: {},
}
