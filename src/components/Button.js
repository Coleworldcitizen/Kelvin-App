
export default function Button({src, name}) {
  return (
  	<div className=' w-[400px] xs:w-[320px] relative sm:w-[350px] md:w-[400px]  rounded-md  text-center h-[250px]   '>
		<img src={src} className=' z-10 animate-pulse   object-cover h-[100%]  w-[100%]  hover:mix-blend-overlay rounded-md  '/>

<button className=" -z-10 border-none hover:text-slate-300   absolute top-[52%] md:top-[48%]   sm:top-[45%] sm:left-[30%] md:left-[35%] left-[30%] hover:bg-cyan-600 bg-cyan-500 text-slate-200 uppercase font-kode tracking-wide rounded-md px-4 py-2 " >
{name}
</button>
	</div>

  )
}
