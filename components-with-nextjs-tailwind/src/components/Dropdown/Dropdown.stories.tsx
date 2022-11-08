import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Dropdown from './Dropdown';

export default {
  title: `Components/${Dropdown.name}`,
  component: Dropdown,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Options',
  menuItems: [
    { label: '', items: [
      { label: 'Edit', icon: 'edit' },
      { label: 'Duplicate', icon: 'duplicate' },
    ]},
    { label: '', items: [
      { label: 'Archive', icon: 'archive' },
      { label: 'Move', icon: 'move' },
    ] },
    { label: '', items: [
      { label: 'Delete', icon: 'delete' },
    ] },
  ],
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('link', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
