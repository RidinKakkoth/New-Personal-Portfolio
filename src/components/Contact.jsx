

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4 ">
      <form method="POST" action="https://getform.io/f/e234d888-a566-4f15-b67f-898674ced754" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-5">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 " >Contact</p>
            <p className="text-gray-300 py-4">Submit the form below or shoot me an email - <span className="font-bold">k.ridin@ymail.com</span></p>
        </div>
        <input type="text" placeholder="Name" className="bg-[#ccd6f6] p-2" name="name" id="" />
        <input type="text" placeholder="Email" name="email" id=""  className="my-4 p-2 bg-[#ccd6f6]"/>
        <textarea name="message" id="" cols="30" className="p-2 bg-[#ccd6f6]" placeholder="Message" rows="10"></textarea>
        <button className="text-white border-2 hover:bg-pink-600 mx-auto py-3 px-4 my-8 flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
