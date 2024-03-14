import StudentRoom from '../assets/student room.avif'
import Landlord from '../assets/landlord.avif'
import { Link } from "react-router-dom";
import Button from '../components/Button';

const Home = ()=>{
	return <>

<div id='home'  className=' md:text-base sm:pb-[60px]'>
<h1 id='header' className=" sm:text-2xl border-none md:text-3xl lg:text-4xl bg-transparent font-poppins uppercase text-center  text-4xl tracking-normal pt-8 font-bold text-cyan-600 xs:text-xl "> Gwamps Accomodation Finder </h1>


<div className=' xs:flex-col xs:px-8 md:flex-col  sm-px-32  flex justify-center items-center gap-12 mt-[12%] sm:mt-[5%] md:mt-[15%] sm:flex-col md:flex   lg:flex-row  '>

<Link to = "/tenants">
	<Button src={StudentRoom}  name='GET ROOM'/>

</Link>
 
<Link to="landlords">

<Button src={Landlord} name='GET TENANT'/>

</Link>

</div>


</div>

	</>
}
export default Home;