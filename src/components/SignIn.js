import React, {useState} from 'react';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVAk0x75yhyz9O1uZAeEY9IoVxsjx7ZMI",
  authDomain: "gwamps-accomodation.firebaseapp.com",
  projectId: "gwamps-accomodation",
  storageBucket: "gwamps-accomodation.appspot.com",
  messagingSenderId: "38001027312",
  appId: "1:38001027312:web:b569038937dc0f4a1cba35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






function SignIn({ signIn, handleSubmit }) {



  const [state, setState] = useState({
    email:'',
    password:'',
  
  })

 async function handleSubmitt(e){

e.preventDefault()

const {email, password} = state

const options = {
  method: 'POST',
  headers: {
'Content-Type': 'application/json'
  },
  body: JSON.stringify({email, password})
}
const res =  await fetch('https://gwamps-accomodation-default-rtdb.firebaseio.com/User.json', options)
if(res) {
  alert('Message Sent')
}else{
  alert('Error occured')
}
handleSubmit()

}
const handleChange = (event) => {
  const { name, value } = event.target;

  
  setState(prevState => ({
    ...prevState,
    [name]: value,
  }));
};





  
  return (
  
      <>
  
      { signIn && (
        <section className='shadow-md shadow-gray-500 h-full w-[40vw] uppercase tracking mx-auto mt-32 bg-gray-300 text-stone-500 py-4 px-6 rounded-md'>
        <form method='POST' onSubmit={handleSubmitt} className='w-[60%] m-auto'>
          <p className="flex flex-col justify-center mt-2">
            <label className="text-stone-500 capitalize font-poppins" htmlFor='email'>email</label>
            <input  onChange={handleChange} required placeholder='Enter your Email' name='email' className='focus:outline-none bg-transparent border-b border-stone-600'/>
          </p>
          <p className="flex flex-col justify-center mt-4">
            <label className="text-stone-500 capitalize font-poppins" htmlFor='password'>password</label>
            <input  required onChange={handleChange} className='bg-transparent border-b border-stone-600 focus:outline-none' type='password' placeholder='Enter your password'  name='password'/>
          </p>
          <button type='submit' className="bg-stone-700 hover:bg-stone-600 hover:text-slate-200 text-slate-300 font-poppins px-4 py-2 mt-8 rounded-md text-center">
            Submit
          </button>
        </form>
      </section>
      )
      }
  </>
)
     ;
}

export default SignIn;
