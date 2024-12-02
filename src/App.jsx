import './App.css'

import { useState } from "react";

import { FaAngleDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";





function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>

      <div className="py-3 px-6 sm:px-10 bg-white navbar border-[1px] rounded-b-2xl border-black flex items-center justify-between mx-4 sm:mx-8 lg:mx-24">


        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gsweB1kpXA66vN6rE-BwR2qgon12IA3tLQ&s"
            className="h-8 sm:h-10"
            alt="Logo"
          />
        </div>

        <div
          className="lg:hidden text-xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="hidden lg:flex h-16 items-center space-x-6">
          <div
            className="relative flex justify-center items-center cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="flex items-center">
              Explore <FaAngleDown className="mt-1 ml-1" />
            </span>
            {showDropdown && (
              <div className="absolute top-10 bg-white border-[1px] border-black rounded-md w-64 shadow-lg p-3 space-y-2">
                <div className="hover:bg-gray-200 px-2 py-1 rounded"></div>
                <div className="hover:bg-gray-200 px-2 py-1 rounded"></div>
                <div className="hover:bg-gray-200 px-2 py-1 rounded"></div>
              </div>
            )}
          </div>
          <div>Docs</div>
          <div>Pricing</div>
          <div>Blog</div>
          <div>Join Community</div>
        </div>

        <div className="hidden lg:flex h-16 items-center space-x-4">
          <div>Sign In</div>
          <button className="relative rounded-full border-[1px] bg-[#b9a0ff] h-10 w-32 flex justify-center items-center border-black shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none group">
            Sign Up
            <FaArrowRight
              className="ml-3 transition-transform transform group-hover:-rotate-45"
            />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t-[1px] border-black lg:hidden flex flex-col space-y-4 py-4 px-6">
            <div className="cursor-pointer">
              Explore
              <div className="mt-1 ml-4 pl-2 text-gray-700">
                <div className="hover:bg-gray-200 px-2 py-1 rounded">Option 1</div>
                <div className="hover:bg-gray-200 px-2 py-1 rounded">Option 2</div>
                <div className="hover:bg-gray-200 px-2 py-1 rounded">Option 3</div>
              </div>
            </div>
            <div>Docs</div>
            <div>Pricing</div>
            <div>Blog</div>
            <div>Join Community</div>
            <hr className="border-gray-300" />
            <div>Sign In</div>
            <button className="relative rounded-full border-[1px] bg-[#b9a0ff] h-10 w-full flex justify-center items-center border-black shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none">
              Sign Up
              <FaArrowRight className="ml-3" />
            </button>
          </div>
        )}
      </div>


      <div className="bg-[#edfae4] py-3 px-6 sm:px-16 border-[1px] rounded-t-2xl rounded-bl-2xl border-black flex flex-col md:flex-row items-center justify-between mx-4 sm:mx-8 lg:mx-24 mt-10 h-auto md:h-[21rem] space-y-6 md:space-y-0">
        <div className="w-full md:w-[55%] order-2 md:order-1">
          <div className="font-bold text-3xl sm:text-4xl lg:text-5xl text-green-950 text-center md:text-left">
            Unified Inference Platform for any model, on any cloud
          </div>
          <div className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-8 text-center md:text-left">
            Build scalable AI systems with unparalleled speed and flexibility. Deploy in your cloud, iterate faster, and scale at a lower cost.
          </div>
        </div>

        <div className="w-full md:w-[30%] order-1 md:order-2">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgoADmc3dqC1YcYfHNnLORsdqDd3siMT86wulrWWSKxKTdP_QG"
            alt="Overflowing Image"
            className="w-[70%] max-w-[300px] mx-auto md:mx-0 md:h-[20rem] md:max-w-[400px] z-10"
          />
        </div>
      </div>



      <div className="flex flex-col lg:flex-row items-center mx-4 sm:mx-8 lg:mx-24 space-y-6 lg:space-y-0 lg:space-x-5 h-auto lg:h-[12rem]">
        <div className="w-full mt-16 lg:w-[80%] flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 h-auto lg:h-52">
          <div className="relative text-xl text-green-950 p-4 h-44 lg:h-44 border-[1px] border-black w-full lg:w-[50%] rounded-2xl flex items-start justify-start bg-[#b9a0ff] shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none group">
            Get <br /> Started
            <FaArrowRight
              className="absolute right-4 bottom-4 transition-transform transform group-hover:-rotate-45 text-green-950"
              size={20}
            />
          </div>

          <pre className="relative text-xl text-white p-4 h-44 lg:h-44 border-[1px] border-black w-full lg:w-[50%] rounded-2xl flex items-start justify-start bg-[#24605a] shadow-none transition-all ease-in-out duration-300 hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none group">
            Bring Your<br />
            Own<br />
            Cloud
            <FaArrowRight
              className="absolute right-4 bottom-4 transition-transform transform group-hover:-rotate-45 text-white"
              size={20}
            />
          </pre>
        </div>

        <div className="hidden lg:block container border-r-[1px] border-l-[1px] border-b-[1px] border-black rounded-tl-2xl rounded-bl-2xl rounded-br-2xl h-[13rem] bg-[#edfae4]"></div>
      </div>

    </>
  )
}

export default App;
