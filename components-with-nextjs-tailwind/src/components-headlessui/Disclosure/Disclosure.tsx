import { Fragment } from 'react'
import Link from 'next/link';
import { Disclosure as DisclosureA } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

interface DisclosureProps {
  label: JSX.Element;
  panel: JSX.Element;
  defaultOpen: boolean;
}

const Disclosure: React.FC<DisclosureProps> = ({ label, panel, defaultOpen }) => {
  return (
    <DisclosureA defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <DisclosureA.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          { label }
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-500`}
          />
        </DisclosureA.Button>
        <DisclosureA.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          { panel }
        </DisclosureA.Panel>
      </>
    )}
  </DisclosureA>
);
}

export default Disclosure;
