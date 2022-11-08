import { Fragment, useState } from 'react'
import Link from 'next/link';
import { Dialog as DialogA, Transition } from '@headlessui/react'

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Dialog: React.FC<DialogProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <DialogA as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogA.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogA.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  { title }
                </DialogA.Title>

                { children }

              </DialogA.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogA>
  </Transition>
);
}

export default Dialog;
