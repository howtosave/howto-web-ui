import { Fragment, useEffect, useRef, useState, SVGProps } from 'react'
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SVGIcon from '../SVGIcon/SVGIcon';

type DropdownMenuItem = {
  label: string;
  icon?: string;
  items?: DropdownMenuItem[];
}

interface DropdownProps {
  label: string;
  menuItems: DropdownMenuItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, menuItems }) => {
  return (
  <Menu as="div" className="relative inline-block text-right">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        { label }
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>
    {menuItems && menuItems.length > 0 && (
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          { menuItems.map(({ items }) => (
            <div className="px-1 py-1 ">
              { items && items.map((item) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      key={item.label}
                    >
                      {item.icon ? active ? (
                        <SVGIcon
                          name="edit-active"
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <SVGIcon
                          name="edit-inactive"
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : ''}
                    {item.label}
                  </button>
                )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    )}
  </Menu>
  );
};

export default Dropdown;
