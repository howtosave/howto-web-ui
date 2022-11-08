import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ListboxA from './Listbox';

export default {
  title: `Components/${ListboxA.name}`,
  component: ListboxA,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof ListboxA>;

const Template: ComponentStory<typeof ListboxA> = (args) => <ListboxA {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  items: [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ],
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('link', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
