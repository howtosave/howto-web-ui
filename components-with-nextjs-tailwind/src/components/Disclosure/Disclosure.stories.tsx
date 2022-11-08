import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import DisclosureA from './Disclosure';

export default {
  title: `Components/${DisclosureA.name}`,
  component: DisclosureA,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof DisclosureA>;

const Template: ComponentStory<typeof DisclosureA> = (args) => <DisclosureA {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: <span>What is your refund policy?</span>,
  panel: <p>If you're unhappy with your purchase for any reason, email us
  within 90 days and we'll refund you in full, no questions asked.</p>,
  defaultOpen: true,
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('link', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
