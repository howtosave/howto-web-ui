import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import RadioGroupA from './RadioGroup';

export default {
  title: `Components-headlessui/${RadioGroupA.name}`,
  component: RadioGroupA,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as ComponentMeta<typeof RadioGroupA>;

const items = [
  {
    id: 'Startup',
    label: 'Startup',
    description: (<>
      <span>
        {'12GB'}/{'6 CPUs'}
      </span>{' '}
      <span aria-hidden="true">&middot;</span>{' '}
      <span>{'160 GB SSD disk'}</span>
    </>),
  },
  {
    id: 'Business',
    label: 'Business',
    description: (<>
      <span>
        {'12GB'}/{'6 CPUs'}
      </span>{' '}
      <span aria-hidden="true">&middot;</span>{' '}
      <span>{'160 GB SSD disk'}</span>
    </>),
  },
  {
    id: 'Enterprise',
    label: 'Enterprise',
    description: (<>
      <span>
        {'12GB'}/{'6 CPUs'}
      </span>{' '}
      <span aria-hidden="true">&middot;</span>{' '}
      <span>{'160 GB SSD disk'}</span>
    </>),
  },
]

const Template: ComponentStory<typeof RadioGroupA> = (args) => {
  let [selected, setSelected] = React.useState(items[0].id)

  return (
    <RadioGroupA selectedId={selected} onChange={setSelected} items={items} />
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
