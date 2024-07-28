// components/BookingArtistForm.js
import { useForm } from 'react-hook-form';

const BookArtistForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:max-w-4xl max-w-full mt-4 p-4 shadow-xl p-5 bg-white rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-1">
            Full Name<em className="text-red-500">*</em>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            {...register("fullName", { required: true, maxLength: 50 })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.fullName ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.fullName && <span className="text-red-500 text-sm">Full name is required and should be less than 50 characters.</span>}
        </div>

        {/* Contact Number */}
        <div className="sm:col-span-1">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-900 mb-1">
            Contact Number<em className="text-red-500">*</em>
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            placeholder="1234567890"
            {...register("contactNumber", { required: true, pattern: /^[0-9]{3}[0-9]{3}[0-9]{4}$/ })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.contactNumber ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.contactNumber && <span className="text-red-500 text-sm">Valid contact number is required (123-456-7890).</span>}
        </div>

        {/* Event Type */}
        <div className="sm:col-span-1">
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-900 mb-1">
            Event Type<em className="text-red-500">*</em>
          </label>
          <input
            id="eventType"
            name="eventType"
            type="text"
            placeholder="Wedding, Birthday, etc."
            {...register("eventType", { required: true })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.eventType ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.eventType && <span className="text-red-500 text-sm">Event type is required.</span>}
        </div>

        {/* Event Date and Time */}
        <div className="sm:col-span-1">
          <label htmlFor="eventDateTime" className="block text-sm font-medium text-gray-900 mb-1">
            Event Date and Time<em className="text-red-500">*</em>
          </label>
          <input
            id="eventDateTime"
            name="eventDateTime"
            type="datetime-local"
            {...register("eventDateTime", { required: true })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.eventDateTime ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.eventDateTime && <span className="text-red-500 text-sm">Event date and time is required.</span>}
        </div>

        {/* Service Required */}
        <div className="sm:col-span-1">
          <label htmlFor="serviceRequired" className="block text-sm font-medium text-gray-900 mb-1">
            Service Required<em className="text-red-500">*</em>
          </label>
          <input
            id="serviceRequired"
            name="serviceRequired"
            type="text"
            placeholder="Catering, Decoration, etc."
            {...register("serviceRequired", { required: true })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.serviceRequired ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.serviceRequired && <span className="text-red-500 text-sm">Service required is necessary.</span>}
        </div>

        {/* Number of People */}
        <div className="sm:col-span-1">
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-900 mb-1">
            Number of People<em className="text-red-500">*</em>
          </label>
          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            placeholder="100"
            {...register("numberOfPeople", { required: true, min: 1 })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.numberOfPeople ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.numberOfPeople && <span className="text-red-500 text-sm">Number of people is required and must be at least 1.</span>}
        </div>

        {/* Additional Requirements */}
        <div className="sm:col-span-1">
          <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-900 mb-1">
            Additional Requirements
          </label>
          <input
            id="additionalRequirements"
            name="additionalRequirements"
            placeholder="Any specific needs?"
            {...register("additionalRequirements")}
            className="block w-full rounded-sm border-0 bg-transparent ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>

        {/* Pricing */}
        <div className="sm:col-span-1">
          <label htmlFor="pricing" className="block text-sm font-medium text-gray-900 mb-1">
            Pricing<em className="text-red-500">*</em>
          </label>
          <input
            id="pricing"
            name="pricing"
            type="text"
            placeholder="Estimated budget"
            {...register("pricing", { required: true })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.pricing ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.pricing && <span className="text-red-500 text-sm">Pricing is required.</span>}
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-1">
            Address<em className="text-red-500">*</em>
          </label>
          <textarea
            id="address"
            name="address"
            type="text"
            placeholder="Event location address"
            {...register("address", { required: true })}
            className={`block w-full rounded-sm border-0 bg-transparent ring-1 ${errors.address ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-500 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6`}
          />
          {errors.address && <span className="text-red-500 text-sm">Address is required.</span>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-1">
            Payment options
          </label>
            <pre>Payment Getway or else</pre>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="theme text-semibold text-white py-2 px-4 rounded-sm w-[150px] center hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookArtistForm;
