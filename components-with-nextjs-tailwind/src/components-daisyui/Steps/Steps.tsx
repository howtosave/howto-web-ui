import React from 'react'

type StepItem = {
  label: React.ReactNode;
  variant?: ThemeColor;
};

interface StepsProps extends React.HTMLProps<HTMLUListElement> {
  items: StepItem[];
  orientation?: 'vertical' | 'horizontal' | false;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Steps: React.FC<StepsProps> = ({ items, orientation, className }) => {
  return (
    <ul className={classNames('steps', orientation && `steps-${orientation}`, className)}>
      {items && items.map((item) => (
        <li className={classNames('step', item.variant && `step-${item.variant}`)}>{item.label}</li>
      ))}
    </ul>
  );
};

export default Steps;
