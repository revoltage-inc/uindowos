import type { StoryObj, Meta } from '@storybook/react'
import { Menu } from './Menu'

export default {
  component: Menu,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof Menu>

export const Default: StoryObj<typeof Menu> = {
  args: {},
}
