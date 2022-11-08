import { Fragment } from 'react'
import Link from 'next/link';
import { RadioGroup as RadioGroupA } from '@headlessui/react'
import SVGIcon from '../SVGIcon/SVGIcon';

type RadioItem = {
  id: any;
  label: string;
  description?: JSX.Element;
};

interface RadioGroupProps {
  selectedId: any;
  onChange: (selectedId: any) => void;
  items: RadioItem[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ items, selectedId, onChange }) => {
  return (
    <RadioGroupA value={selectedId} onChange={onChange}>
      <RadioGroupA.Label className="sr-only">Server size</RadioGroupA.Label>
      <div className="space-y-2">
        {items.map((item) => (
          <RadioGroupA.Option
            key={item.id}
            value={item.id}
            className={({ active, checked }) =>
              `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
              ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
              relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroupA.Label
                        as="p"
                        className={`font-medium  ${
                          checked ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.label}
                      </RadioGroupA.Label>
                      {item.description && (
                        <RadioGroupA.Description
                          as="span"
                          className={`inline ${
                            checked ? 'text-sky-100' : 'text-gray-500'
                          }`}
                        >
                          {item.description}
                        </RadioGroupA.Description>
                      )}
                    </div>
                  </div>
                  {checked && (
                    <div className="shrink-0 text-white">
                      <SVGIcon name="check" className="h-6 w-6" viewBox="0 0 24 24" />
                    </div>
                  )}
                </div>
              </>
            )}
          </RadioGroupA.Option>
        ))}
      </div>
    </RadioGroupA>
  );
}

export default RadioGroup;
