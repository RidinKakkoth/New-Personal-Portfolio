import { HiArrowNarrowRight } from "react-icons/hi"
import { Link  } from "react-scroll"


function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full " >
        <p className="text-pink-600" >Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold  text-[#ccd6f6]">Ridin Kakkoth</h1>
        <h2 className="text-4xl sm:text-7xl font-bold  text-[#8892b0]">I'm a MERN Stack Developer.</h2>
        <p className="text-[#8892b0] py-4  max-w-[700px]"> I am a self-taught Full Stack developer proficient in MongoDB, Express.js, React.js and Node.js I build dynamic web apps and efficient RESTful APIs. I am committed to continuous learning and delivering high-quality solutions.</p>
        <div>
        <Link to='work' smooth={true} duration={500} > <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600" >View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 "/>
            </span>
             </button> </Link>
        </div>
      </div>

    </div>
  )
}

export default Home
