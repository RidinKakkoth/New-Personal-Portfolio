import { useState } from "react"

 import {FaLinkedin,FaGithub} from "react-icons/fa"
 import {HiOutlineMail} from "react-icons/hi"
 import {BsFillPersonLinesFill} from "react-icons/bs"

function Navbar() {

    const [nav,setNav]=useState(false)
    const handleClick =()=> setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] text-gray-300 flex justify-between items-center px-4 bg-[#0a192f] ">
      <div>Logo</div>
      <div className="hidden md:flex" >
        <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      </div>
        {/* hamberg */}
      <div className="md:hidden z-10 " onClick={handleClick}>
        {
            !nav?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        }

      </div>
    
        {/* mobile  */}
        <ul className={!nav?"hidden" : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* social */}
        <div className="fixed hidden lg:flex flex-col top-[35%] left-0 ">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="/">LinkedIn <FaLinkedin size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="/">Github <FaGithub size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="/">Email <HiOutlineMail size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="/">Resume <BsFillPersonLinesFill size={30} /></a> 
            </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Navbar
