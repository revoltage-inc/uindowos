import type { StoryObj, Meta } from '@storybook/react'
import { Bios } from './Bios'

export default {
  component: Bios,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
} as Meta<typeof Bios>

export const Default: StoryObj<typeof Bios> = {
  args: {},
}
