
import CruiseImg from '../assets/CRUISE.png'
import BellaImg from '../assets/bellacasa.png'
import NETFLIXImg from '../assets/NETFLIX.png'
import WEATHERImg from '../assets/WEATHER.png'
import eatery from '../assets/eatery.png'
import smartmahal from '../assets/smartmahal.png'

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
            <p className="py-6 text-gray-300">Check out some of my recent works</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
           
           {/* grid item */}

            <div 
             style={{
                backgroundImage: `url(${CruiseImg})`,
                backgroundSize: 'contain', // Change this line
                backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
                backgroundPosition: 'center', // Add this line to center the image
              }}
            className=" shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        Booking Application
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://cruisekerala.netlify.app/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="https://github.com/RidinKakkoth/cruise_kerala_client">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
            style={{backgroundImage:`url(${eatery})`,backgroundSize: 'contain', // Change this line
            backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
            backgroundPosition: 'center', }}
            className="shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        Food Delivery App
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://eatery-frontend.onrender.com/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="https://github.com/RidinKakkoth/EATERY-FRONTEND">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>
                      <div 
            style={{backgroundImage:`url(${smartmahal})`,backgroundSize: 'contain', // Change this line
            backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
            backgroundPosition: 'center', }}
            className="shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        Smart Mahal App 
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://kavumpurammasjid.com/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
            style={{backgroundImage:`url(${BellaImg})`,backgroundSize: 'contain', // Change this line
            backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
            backgroundPosition: 'center', }}
            className="shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        Ecommerce Application
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://bellacasa.onrender.com/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="https://github.com/RidinKakkoth/bellacasafashion">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
            style={{backgroundImage:`url(${NETFLIXImg})`,backgroundSize: 'contain', // Change this line
            backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
            backgroundPosition: 'center', }}
            className="shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        NETFLIX Clone
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://reactapp-netflix.netlify.app/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="https://github.com/RidinKakkoth/Netflix-clone-React-App">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div 
            style={{backgroundImage:`url(${WEATHERImg})`,backgroundSize: 'contain', // Change this line
            backgroundRepeat: 'no-repeat', // Add this line to prevent repeating the image
            backgroundPosition: 'center', }}
            className="shadow-lg shadow-[#040c16] group container bg-white rounded-md flex justify-center items-center mx-auto content-div">
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider" >
                        WEATHER Application
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://weather-app-v4hw.onrender.com/">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg "  >Demo</button>
                        </a>
                        <a href="https://github.com/RidinKakkoth/WeatherApp">
                            <button className="text-center rounded-lg px-4 py-3 bg-white m-2 text-gray-700 font-bold text-lg ">Code</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Work
