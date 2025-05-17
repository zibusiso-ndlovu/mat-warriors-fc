// src/components/services/BookingForm.jsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaTimes, FaCalendar } from 'react-icons/fa';

const BookingForm = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService?.id || '',
    date: '',
    time: '',
    address: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { id: 'residential', name: 'Residential Cleaning' },
    { id: 'commercial', name: 'Commercial Cleaning' },
    { id: 'deep', name: 'Deep Cleaning' },
    { id: 'move', name: 'Move In/Out Cleaning' },
    { id: 'recurring', name: 'Recurring Services' },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add your actual form submission logic here
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          address: '',
          message: '',
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Dialog.Panel className="w-full max-w-md transform rounded-2xl 
                                    bg-white p-6 shadow-xl transition-all">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 
                           hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="h-6 w-6" />
                </button>

                {/* Form Header */}
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  Schedule a Cleaning
                </Dialog.Title>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400"
                        placeholder="Enter your complete address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 placeholder-gray-400"
                        placeholder="Any special instructions or requirements?"
                      />
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                      Booking submitted successfully! We'll contact you shortly.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                      There was an error submitting your booking. Please try again.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full py-3 px-6 rounded-lg text-white font-medium
                      transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'}
                    `}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Now'}
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingForm;