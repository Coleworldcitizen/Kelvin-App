import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faVanShuttle } from '@fortawesome/free-solid-svg-icons/faVanShuttle';

import { faSquareParking } from '@fortawesome/free-solid-svg-icons/faSquareParking';
import places from "./../data/places";
import { db } from '../components/ImageURL';









// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

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

// Get a reference to the database service
const database = getDatabase(app);

const Find = () => {
  

  
  const [imageUrls, setImageUrl ] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(database, '/UserData');
      onValue(dataRef, (snapshot) => {
        // Firebase returns snapshot.val() as an object, so convert it to an array
        const dataArray = snapshot.val() ? Object.values(snapshot.val()) : [];
        setData(dataArray);
      });
    };

    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [roomsFilter, setRoomsFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [parkingFilter, setParkingFilter] = useState("All");
  const [generatorFilter, setGeneratorFilter] = useState("All");
  const [shuttleFilter, setShuttleFilter] = useState("All");

  const handleRoomsFilterChange = (e) => {
    setRoomsFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleParkingFilterChange = (e) => {
    setParkingFilter(e.target.value);
  };

  const handleGeneratorFilterChange = (e) => {
    setGeneratorFilter(e.target.value);
  };
  
  const handleShuttleFilterChange = (e) => {
    setShuttleFilter(e.target.value);
  };

  const getPriceRange = (range) => {
    switch (range) {
      case "80-150":
        return { min: 80, max: 150 };
      case "151-250":
        return { min: 151, max: 250 };
      case "251-350":
        return { min: 251, max: 350 };
      case "351-400":
        return { min: 351, max: 400 };
      default:
        return null;
    }
  };

  const filteredData = data.filter((elem) => {

    const matchesSearch = elem.location.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesRooms =
      roomsFilter === "All" ? true : elem.rooms === parseInt(roomsFilter, 10);
  
    const priceRange = getPriceRange(priceFilter);
  
    const matchesPrice =
      priceFilter === "All"
        ? true
        : priceRange
        ? elem.price >= priceRange.min && elem.price <= priceRange.max
        : false;

   
       
  
    const matchesParking =
      parkingFilter === "All" ? true : elem.parking === (parkingFilter === "Yes");

      const matchesGenerator =
    generatorFilter === "All" ? true : elem.generator === (generatorFilter === "Yes");

  const matchesShuttle =
    shuttleFilter === "All" ? true : elem.shuttle === (shuttleFilter === "Yes");
  
    return matchesRooms && matchesSearch && matchesPrice && matchesParking && matchesGenerator && matchesShuttle;
  });
  

  const filteredPlaces = places.filter((elem) => {


    const matchesRooms =
      roomsFilter === "All" ? true : elem.number_of_rooms === parseInt(roomsFilter, 10);

    const priceRange = getPriceRange(priceFilter);

      const matchesSearch = elem.address.toLowerCase().includes(searchTerm.toLowerCase());
  

    const matchesPrice =
      priceFilter === "All"
        ? true
        : priceRange
        ? elem.price >= priceRange.min && elem.price <= priceRange.max
        : false;

    const matchesParking =
      parkingFilter === "All"
        ? true
        : parkingFilter === "Yes"
        ? elem.parking
        : !elem.parking;

        const matchesGenerator =
    generatorFilter === "All" ? true : elem.generator === (generatorFilter === "Yes");

  const matchesShuttle =
    shuttleFilter === "All" ? true : elem.shuttle === (shuttleFilter === "Yes");

    return matchesSearch && matchesRooms && matchesPrice && matchesParking && matchesGenerator && matchesShuttle;
  });

  const width = window.innerWidth;

  console.log(width);



 

  useEffect(() => {
      const imagesRef = ref(db, 'images');
      const imagesListener = onValue(imagesRef, (snapshot) => {
          const data = snapshot.val();

          if (data) {
              const urls = Object.values(data).map((item) => item.imageUrl);
              setImageUrl(urls);
          }
      });

      return () => {
          imagesListener();
      }
  }, [])




  return (
    <>
      <div className="pb-96">


     


        <div className="flex justify-center text-center mt-0 w-[100vw] font-poppins bg-cyan-500 sm:p-2 p-6">
          <section className="sm:whitespace-nowrap sm:px-8 sm:my-2">
            <select value={roomsFilter} onChange={handleRoomsFilterChange} className="sm:px-2 md:px-4 lg:px-12 py-2 focus:outline-none rounded-sm">
              <option value="All">Rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <select value={priceFilter} onChange={handlePriceFilterChange} className="sm:px-2 md:px-4 lg:px-12 py-2 focus:outline-none">
              <option value="All">Price</option>
              <option value="80-150">$80 - $150</option>
              <option value="151-250">$151 - $250</option>
              <option value="251-350">$251 - $350</option>
              <option value="351-400">$351 - $400</option>
            </select>

            <select value={parkingFilter} onChange={handleParkingFilterChange} className="sm:px-2 md:px-4 lg:px-12 py-2 focus:outline-none">
              <option value="All">Parking</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <select value={generatorFilter} onChange={handleGeneratorFilterChange} className="sm:px-2 md:px-4 lg:px-12 py-2 focus:outline-none">
              <option value="All">Generator</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <select value={shuttleFilter} onChange={handleShuttleFilterChange} className="sm:px-2 focus:outline-none rounded-r-sm py-2 md:px-4 lg:px-12">
              <option value="All">Shuttle</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search by address"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-4 md:w-[400px] sm:w-[300px] sm:p-2 xs:w-[310px] sm:h-[20px] h-[50px] rounded-xl focus:outline-none mt-2"
                />
                <span><FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-[35%] xs:right-[18%] lg:right-[30%] md:right-[25%] sm:right-[25%] text-2xl ml-[-60px] sm:text-xl" /></span>
              </div>
            </div>
          </section>
        </div>

     
        <section className=" mt-16">
          {data.length > 0 &&  <h2 className=" text-center font-poppins text-2xl tracking">Recently Listed</h2>}
       
          <div className="  grid md:grid-cols-2 mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-8">
           
          {filteredData.map((elem, index) => (
  <section key={elem.id} className="relative group">
    <div className="relative h-[300px] w-[100%]">
      <div className="absolute top-0 left-0 h-[300px] w-[100%]">
        <img src={imageUrls[index] || ""} alt="img" className="object-cover z-10 w-full h-full hover:cursor-pointer hover:-z-10 hover:mix-blend-overlay rounded-t-md" />
      </div>
    </div>
    <div className="bg-slate-800 text-slate-200 p-2 pb-4 rounded-b-md font-kode">
      <h2>
        <span>
          <FontAwesomeIcon className="text-red-900 px-2" icon={faLocationDot} />
        </span>
        {elem.location}
      </h2>
      <h3>
        <span>
          <FontAwesomeIcon className="text-green-800 px-2 pt-2" icon={faHouse} />
        </span>
        {elem.rooms}
      </h3>
      <h3>
        <span>
          <FontAwesomeIcon className="text-blue-500 px-2 pt-2" icon={faSquareParking} />
          {elem.parking ? "Yes" : "No"}
        </span>
        <span>
     <FontAwesomeIcon icon={faVanShuttle} className="text-yellow-500 px-2 pt-2" />
     {elem.shuttle ? "Yes" : "No"}
        </span>
       
      </h3>
      <h3 className="bg-cyan-400 text-slate-100 p-2 absolute right-0 rounded-tr-md top-0">${elem.price}</h3>
    </div>

    <button
      className="cursor-pointer focus:outline-none z-10 absolute top-[40%] left-[35%] bg-cyan-500 px-4 py-2 hover:bg-cyan-600 hover:text-slate-200 font-poppins rounded-md text-slate-100 hidden group-hover:block"
      onClick={() => {
        try {
          const whatsappUrl = `https://wa.me/${elem.contact}`;
          window.open(whatsappUrl, "_blank");
        } catch (error) {
          console.error("Error opening WhatsApp link:", error);
          // Optionally, you can display a user-friendly error message here
        }
      }}
    >
      Talk to agent
    </button>
  </section>
))}

      
          </div>
        </section>


<hr className=" w-[100vw] my-8 "/>

<div className="grid md:grid-cols-2 mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-8">
  {filteredPlaces.map((elem) => (
    <section key={elem.id} className="relative group">
      <div className="h-[300px] w-[100%]">
        <img src={elem.image} alt="ooops" className="object-cover w-full h-full hover:cursor-pointer hover:mix-blend-overlay rounded-t-md" />
      </div>
      <div className="bg-slate-400 text-slate-200 p-2 pb-4 rounded-b-md font-kode">
        <h2><span><FontAwesomeIcon className="text-red-900 px-2" icon={faLocationDot} /></span>{elem.address}</h2>
        <h3><span><FontAwesomeIcon className="text-green-800 px-2 pt-2" icon={faHouse} /></span>{elem.number_of_rooms}</h3>
        <h3>
        <span>
          <FontAwesomeIcon className="text-blue-500 px-2 pt-2" icon={faSquareParking} />
          {elem.parking ? "Yes" : "No"}
        </span>
        <span>
     <FontAwesomeIcon icon={faVanShuttle} className="text-yellow-500 px-2 pt-2" />
     {elem.shuttle ? "Yes" : "No"}
        </span>
       
      </h3>
        <h3 className="bg-cyan-400 text-slate-100 p-2 absolute right-0 rounded-tr-md top-0">${elem.price}</h3>
      </div>

      <button
        className="absolute top-[40%] left-[35%] bg-cyan-500 px-4 py-2 hover:bg-cyan-600 hover:text-slate-200 font-poppins rounded-md text-slate-100 hidden group-hover:block"
        onClick={() => {
          window.open(`https://wa.me/${elem.phone}`, "_blank");
        }}
      >
        Talk to agent
      </button>
    </section>
  ))}
</div>
</div>
     
    </>
  );
};

export default Find;
