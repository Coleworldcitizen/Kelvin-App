import React from 'react';

function CreateNew({ createNew, handleSubmit }) {
  return (
    createNew && (
      <section className='shadow-md shadow-gray-500 md:h-full md:w-[40vw] w-full uppercase tracking mx-auto mt-8 md:mt-32 bg-gray-300 text-stone-500 py-4 px-6 rounded-md'>
        <form onSubmit={handleSubmit} className='md:w-[60%] w-full m-auto'>
          <InputField label="Name" name="name" type="text" required />
          <InputField label="Surname" name="surname" type="text" required />
          <InputField label="Email" name="email" type="email" required />
          <InputField label="Password" name="password" type="password" required />
          <button type="submit" className="bg-stone-700 hover:bg-stone-600 hover:text-slate-200 text-slate-300 font-poppins px-4 py-2 mt-8 rounded-md text-center w-full md:w-auto">
            Submit
          </button>
        </form>
      </section>
    )
  );
}

const InputField = ({ label, name, type, required }) => (
  <p className="flex flex-col justify-center mt-4">
    <label className="text-stone-500 capitalize font-poppins" htmlFor={name}>{label}</label>
    <input className='bg-transparent border-b border-stone-600 focus:outline-none w-full' placeholder={`Enter your ${label}`} name={name} type={type} required={required} />
  </p>
);

export default CreateNew;
