import type { StoryObj, Meta } from '@storybook/react'
import { Switch } from './Switch'

export default {
  component: Switch,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'coral-pink',
    },
  },
} as Meta<typeof Switch>

export const Default: StoryObj<typeof Switch> = {
  args: {},
}
