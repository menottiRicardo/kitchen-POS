/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import { DataStore } from "aws-amplify";
import { Order, Status } from "../../src/models";
import { ProductsOrdered } from "../../src/API";

export default function OrderSlider({
  open,
  setOpen,
  id,
  order,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  order: Order;
}) {
  const [selected, setSelected] = useState("");

  const createCategoryGraph = async () => {
    console.log(order);
    const completeProducts = order?.products?.map((product: any) => ({
      ...product,
      status: Status.PREPARED,
    }));
    const newUpdate = await DataStore.save(
      Order.copyOf(order, (o) => {
        (o.status = Status.PREPARED), (o.products = completeProducts);
      })
    );

    console.log(newUpdate)
    // setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-medium text-gray-900">
                        Cambiar Estatus
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex px-4 sm:px-6 justify-center items-center h-full">
                      {/* Replace with your content */}
                      <div>
                        <div
                          className={`bg-gray-100 shadow-md h-48 w-48 flex items-center rounded-md justify-center font-medium p-4 ${
                            selected === "preparada"
                              ? "border-2 border-primary-300"
                              : "border-2 border-gray-100"
                          }`}
                          onClick={() => setSelected("preparada")}
                        >
                          <p className="p-2 text-2xl">Preparada</p>
                        </div>
                        <button
                          className="p-3 bg-primary-300 rounded-md text-white font-medium mt-4 w-full"
                          onClick={createCategoryGraph}
                        >
                          Guardar
                        </button>

                        {/* /End replace */}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
