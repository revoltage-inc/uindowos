import type { StoryObj, Meta } from '@storybook/react'
import { LoginForm } from './LoginForm'

export default {
  component: LoginForm,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof LoginForm>

export const Default: StoryObj<typeof LoginForm> = {
  args: {},
}
