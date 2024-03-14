import React, { useState } from 'react';
import Welcome from '../components/Welcome';
import Form from '../components/Form';
import SignIn from '../components/SignIn';
import CreateNew from '../components/CreateNew';

const Landlords = () => {
  const [step, setStep] = useState('welcome');

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleSignIn = () => {
    handleStepChange('signIn');
  };

  const handleCreateAccount = () => {
    handleStepChange('createAccount');
  };

  const handleSubmit = () => {
    handleStepChange('listProperty');
  };
  const handleThanks = () => {
    handleStepChange('thanks');
  };

  return (
    <div className="sm:container mx-auto">
      <header className="relative flex justify-between px-8 py-4 bg-slate-300">
        <h1 className="text-center ml-4 sm:ml-32 font-poppins capitalize text-2xl font-semibold text-slate-500">Accommodation Finder</h1>
        <ul className="flex items-center gap-4 pr-4">
          <li><button onClick={handleSignIn} className="focus:outline-none font-poppins text-slate-500 hover:text-cyan-500 ">Sign in</button></li>
          <li className="rounded-md"><button onClick={handleCreateAccount} className="focus:outline-none rounded-md font-poppins text-slate-200 px-4 py-2 hover:bg-cyan-600 hover:text-slate-100 bg-cyan-500 ">Create Account</button></li>
        </ul>
      </header>
      {step === 'welcome' && <Welcome handleWelcome={() => handleStepChange('createAccount')} />}
      {step === 'listProperty' && <Form handleProperty={handleSubmit} handleThanks={handleThanks} />}
      <section>
        <SignIn signIn={step === 'signIn'} handleSubmit={handleSubmit} />
        <CreateNew createNew={step === 'createAccount'} handleSubmit={handleSubmit} />
        {step === 'thanks' && (
          <div className="flex flex-col justify-center text-center text-stone-500 h-[30vh] mt-[10%] sm:mt-[20%] rounded-sm w-[90vw] sm:w-[50vw] px-4 py-12 mx-auto items-center bg-slate-300 shadow-md">
            <h2 className="font-poppins font-semibold text-2xl">Thank you for using Accommodation Finder!</h2>
            <p className="font-poppins font-light text-xl mt-4">Your property has been listed...</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Landlords;
