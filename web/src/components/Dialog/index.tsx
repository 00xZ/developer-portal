import { memo, Fragment, ReactNode } from "react";
import cn from "classnames";
import { Dialog as BaseDialog, Transition } from "@headlessui/react";
import { Icon } from "src/components/Icon";

interface DialogProps {
  className?: string;
  panelClassName?: string;
  children: ReactNode;
  open?: boolean;
  onClose: () => void;
}

export const Dialog = memo(function Dialog(props: DialogProps) {
  return (
    <Transition show={props.open} as={Fragment}>
      <BaseDialog className={cn(props.className)} onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-neutral-primary/50 z-40"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <BaseDialog.Panel
              className={cn(
                props.panelClassName,
                "relative w-[448px] px-8 py-12 bg-ffffff rounded-xl"
              )}
            >
              <button
                className="absolute top-4 left-4 flex items-center justify-center w-9 h-9 rounded-full bg-ebecef"
                onClick={props.onClose}
              >
                <Icon className="w-6 h-6 text-neutral-primary" name="close" />
              </button>
              {props.children}
            </BaseDialog.Panel>
          </Transition.Child>
        </div>
      </BaseDialog>
    </Transition>
  );
});
