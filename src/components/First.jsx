import React from 'react'
import Shubham from '../assests/Shubham.JPG (1).png'
import { MdKeyboardArrowRight } from "react-icons/md";

const First = () => {
    return (
        <div id='home' name="home" className='h-screen z-0 w-full bg-gradient-to-b from-white to black-800 via-black'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                        I'm an aspiring Data Scientist, IELTS instructor and Department head of USA at Vito Education
                    </h2>
                    <p className='text-grey-500 py-4 max-w-md text-white'>
                       My goal is to secure a fine future for myself, while creating an exceptioanl future for others as well
                    </p>

                    <div>
                        <a href="#projects">
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-white-500 cursor-pointer'>
                                Projects
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div>
                    <img src={Shubham} alt="my-profile" className="rounded-full mt-2 z-[-1] mx-auto w-1/3 md:w-1/2 max-w-l" />

                </div>
            </div>
        </div>
    )
}

export default First
