import type { StoryObj, Meta } from '@storybook/react'
import { Login } from './Login'

export default {
  component: Login,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof Login>

export const Default: StoryObj<typeof Login> = {
  args: {},
}
