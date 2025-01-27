import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'ui';
import type { ButtonProps } from 'ui/src/Button';

export default {
  title: 'Button',
  component: Button
} as Meta<ButtonProps>;

export const Default = () => <Button>Button</Button>;
export const Playground: StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;
