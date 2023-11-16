import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Node from '../assets/node.png'
import MDB from '../assets/mongo.png'
import Git from '../assets/github.png'
import Express from '../assets/express.png'
import React from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full '>
       <div>
       <p className='text-4xl   font-bold  w-fit border-b-4 border-pink-600'>Experience</p>
        <p className='py-4 my-4'>These are the technologies I've worked with</p>
     
      
        </div>
      <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={MDB} alt="MONGO icon" />
            <p className='my-4'>MONGO DB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between  '>
            <img className='w-20 mx-auto' src={Express} alt="Express icon" />
            <p className='my-4'>Express</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between  '>
            <img className='w-20 mx-auto' src={React} alt="React icon" />
            <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={Node} alt="Node icon" />
            <p className='my-4'>NODE</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={JS} alt="JS icon" />
            <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={HTML} alt="html icon" />
            <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-between '>
            <img className='w-20 mx-auto' src={Git} alt="Git icon" />
            <p className='my-4'>GITHUB</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
