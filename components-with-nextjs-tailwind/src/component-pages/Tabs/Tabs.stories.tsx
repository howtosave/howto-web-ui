import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Tabs from './Tabs';

export default {
  title: `Component-pages/${Tabs.name}`,
  component: Tabs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('link', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
