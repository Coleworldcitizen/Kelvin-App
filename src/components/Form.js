import React, {useState, useRef} from 'react'
import ImageUpload from "../components/ImageUpload";



// Import the functions you need from the SDKs you need
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





export default function Form({handleProperty, handleThanks}) {
  const formRef = useRef()
  const [state, setState] = useState({
    name:'',
    surname:'',
    price:'',
    rooms:'',
    contact: '',
    email:'',
    location:'',
    parking:false,
    generator:false,
    shuttle:false,
    image:null,
  })

 async function handleSubmit(e){

e.preventDefault()

const {name,
surname,
price,
rooms,
contact,
email,
location,
parking,
generator,
shuttle,
image} = state

const options = {
  method: 'POST',
  headers: {
'Content-Type': 'application/json'
  },
  body: JSON.stringify({name,
    surname,
    price,
    rooms,
    contact,
    email,
    location,
    parking,
    generator,
    shuttle,
    image})
}
const res =  await fetch('https://gwamps-accomodation-default-rtdb.firebaseio.com/UserData.json', options)
if(res) {
  alert('Message Sent')
}else{
  alert('Error occured')
}


handleProperty()
handleThanks()
}
const handleChange = (event) => {
  const { name, value, type, checked, files } = event.target;
  const newValue = type === 'checkbox' ? checked : value;
  
  setState(prevState => ({
    ...prevState,
    [name]: type === 'file' ? URL.createObjectURL(files[0]) : newValue,
  }));
};




 console.log(state)
  
  return (
    <>
  
     <section className=" shadow-md shadow-gray-500 h-full w-[60vw] uppercase tracking  mx-auto mt-32 bg-gray-300 text-stone-500 py-4 px-6 rounded-md">
      <h2  className='   text-center  font-kode font-bold  text-xl uppercase  tracking-widest my-4'>Personal Information</h2>
 <form  method='POST' ref={formRef} className=' flex flex-wrap gap-8 mt-8 items-center justify-center'>

    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins" htmlFor='name'>name</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter Your Name' value={state.name} onChange={handleChange} name='name'/>
    </p>

    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins" htmlFor='surname'>surname</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter Your Surname' onChange={handleChange} value={state.surname} name='surname'/>
    </p>
    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins" htmlFor='contact'>contact</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter Your Contact' onChange={handleChange} value={state.contact} name='contact'/>
    </p>
    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins" htmlFor='email'>email</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter Your Email' onChange={handleChange} value={state.email} name='email'/>
    </p>

     <h2 className=' text-center font-kode w-full font-bold uppercase  tracking-widest text-xl my-4 '>Listing Information</h2>

     <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins"  htmlFor='price'>price</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Set your price' value={state.price} onChange={handleChange} type='number' name='price'/>
    </p>
     <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins" htmlFor='rooms'>rooms</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter number of rooms' type='number' onChange={handleChange} value={state.rooms}  name='rooms'/>
    </p>
     <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize font-poppins"  htmlFor='location'>location</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none' placeholder=' Enter property location' onChange={handleChange} value={state.location} type='text' name='location'/>
    </p>

    <div className=' flex  justify-center w-[40vw]'>

    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize mx-2 font-poppins"  htmlFor='parking'>parking</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none'  onChange={handleChange} value={state.parking} type='checkbox' name='parking'/>
    </p>
    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize  mx-2 font-poppins"  htmlFor='shuttle'>shuttle</label>
      <input required className='bg-transparent border-b border-stone-600 focus:outline-none'  onChange={handleChange} value={state.shuttle} type='checkbox' name='shuttle'/>
    </p>
    <p className="flex flex-col justify-center mt-2">
      <label className="text-stone-500 capitalize  mx-2 font-poppins"  htmlFor='location'>generator</label>
      <input required  className='bg-transparent border-b border-stone-600 focus:outline-none' onChange={handleChange} value={state.generator} type='checkbox' name='generator'/>
    </p>
    
    </div>
  


     <div className="">
     <button onClick={handleSubmit} className=" bg-stone-700  hover:bg-stone-600 hover:text-slate-200 text-slate-300 font-poppins px-4 py-2 rounded-md text-center ">
      Submit
     </button>
     </div> 
    
    </form>
    <ImageUpload/>

    </section>
    </>
   
    
  )
}
