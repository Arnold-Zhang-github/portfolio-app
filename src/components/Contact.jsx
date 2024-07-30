import React from "react";

const Contact = () => {
   return (
      <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
         {" "}
         <form method="POST" action="https://getform.io/f/pboxvyna" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-white">Contact</p>

               <div className="flex gap-4 text-white mt-5">
                  {" "}
                  <div className="hover:bg-blue-500 rounded-lg p-4">
                     <a href="https://www.linkedin.com/in/arnold-zhang-36310a285/">LinkedIn</a>
                  </div>
                  <div className="hover:bg-blue-500 rounded-lg p-4">
                     <a href="">Github</a>
                  </div>
                  <div className="hover:bg-blue-500 rounded-lg p-4">
                     <a href="">Resume</a>
                  </div>
               </div>

               <p className="mt-5 text-white ml-4 ">Email - zhanga8866@gmail.com</p>

               <p className="mt-5 text-white ml-4 ">Or you can contact me with the form below</p>
            </div>

            <input className="p-2" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2" type="email" placeholder="Your Email" name="email" />
            <textarea className="p-2" name="message" rows="10" id="" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-blue-300 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center">Submit, Let's Collaborate</button>
         </form>
      </div>
   );
};

export default Contact;
