import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Dialog from './Dialog';

export default {
  title: `Components/${Dialog.name}`,
  component: Dialog,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: '',
    // See https://storybook.js.org/docs/react/essentials/actions
    actions: { 
      argTypesRegex: '^on.*',
      handles: ['onClose'],
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  let [isOpen, setIsOpen] = React.useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
  <Dialog isOpen={isOpen} title="Payment is Successful" onClose={closeModal}>
    <>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Got it, thanks!
        </button>
      </div>
    </>
  </Dialog>
  );
}

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
