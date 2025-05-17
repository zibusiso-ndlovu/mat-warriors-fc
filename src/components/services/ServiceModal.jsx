// src/components/services/ServiceModal.jsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

const ServiceModal = ({ service, isOpen, onClose }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl
                                    bg-white p-6 shadow-xl transition-all">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400
                           hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="mt-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    {service.title}
                  </Dialog.Title>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <p className="text-gray-600 mb-6">
                    {service.fullDescription || service.description}
                  </p>

                  {/* Detailed Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <FaCheck className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Pricing
                    </h4>
                    <p className="text-gray-600">
                      Starting at ${service.startingPrice} per service
                    </p>
                    {service.pricingNotes && (
                      <p className="text-sm text-gray-500 mt-2">
                        {service.pricingNotes}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={onClose}
                      className="flex-1 bg-blue-600 hover:bg-blue-700
                               text-white py-3 px-6 rounded-lg
                               transition-colors duration-300"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 border border-gray-300
                               text-gray-700 hover:bg-gray-50
                               py-3 px-6 rounded-lg
                               transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ServiceModal;