
function About() {
  return (
    <div name='about' className="h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
            <div className="max-w-[1000px] w-full   grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-4 pl-4">
                <p className="text-4xl  font-bold inline border-b-4 border-pink-600">About</p>
            </div>
            <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
                <div className="sm:text-right text-4xl font-bold ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius voluptate dolor sequi facilis, veniam libero. Ipsa, dolorem modi praesentium natus maxime dolore odit voluptates itaque. Aspernatur ratione blanditiis vero.
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
