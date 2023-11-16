import { useState } from "react"

import { Link  } from "react-scroll"

 import {FaLinkedin,FaGithub} from "react-icons/fa"
 import {HiOutlineMail} from "react-icons/hi"
 import {BsFillPersonLinesFill} from "react-icons/bs"

function Navbar() {

    const [nav,setNav]=useState(false)
    const handleClick =()=> setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] text-gray-300 flex justify-between items-center px-4 bg-[#0a192f] ">
      <div className="font-bold"></div>
      <div className="hidden md:flex" >
        <ul className="hidden md:flex">
            <li>
              <Link  to='home' smooth={true} duration={500} >Home</Link>
            </li>
            <li>              
              <Link to='about' smooth={true} duration={500} >About</Link></li>
            <li>              
              <Link to='skills' smooth={true} duration={500} >Skills</Link></li>
            <li>              
              <Link to='work' smooth={true} duration={500} >Work</Link></li>
            <li>              
              <Link to='contact' smooth={true} duration={500} >Contact</Link></li>
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

              
         <li className="py-6 text-4xl">
              <Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link>
            </li>
         <li className="py-6 text-4xl">              
              <Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link></li>
         <li className="py-6 text-4xl">              
              <Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link></li>
         <li className="py-6 text-4xl">              
              <Link onClick={handleClick} to='work' smooth={true} duration={500} >Work</Link></li>
         <li className="py-6 text-4xl">              
              <Link onClick={handleClick} to='contact' smooth={true} duration={500} >Contact</Link></li>
        </ul>

        {/* social */}
        <div className="fixed hidden lg:flex flex-col top-[35%] left-0 ">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/ridin-kakkoth/">LinkedIn <FaLinkedin size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/RidinKakkoth">Github <FaGithub size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="mailto:k.ridin@ymail.com">Email <HiOutlineMail size={30} /></a> 
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] "> 
            <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1KOEm6l_zAmjDOXwDkSrg4e2wnCc0mFth/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume <BsFillPersonLinesFill size={30} /></a> 
            </li>
            
          </ul>
        </div>
    </div>
  )
}

export default Navbar
