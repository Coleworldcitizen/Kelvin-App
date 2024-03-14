import React from 'react'

export default function Welcome({handleWelcome}) {
  return (
    <div className=" shadow-md shadow-gray-500 h-full w-[60vw] uppercase tracking text-center  mx-auto mt-32 bg-gray-300 text-stone-500 py-4 px-6 rounded-md">
      <h1 className=' my-4 font-poppins tracking-wider uppercase text-2xl font-bold'>Welcome to the listing page!</h1>
      <p>On this platform, you have the freedom to list your property with a price that you're satisfied with</p>
      <h2 className=' text-stone-600 font-semibold my-4'>So what are you waiting for ? ..</h2>
      <p className=' mt-2'>Click this button to start your real estate journey now!</p>
      <button
      onClick={handleWelcome}
      className="bg-stone-700 hover:bg-stone-600 hover:text-slate-200 text-slate-300 font-poppins px-4 py-2 mt-8 rounded-md text-center"
      >Click here</button>
    </div>
  )
}
