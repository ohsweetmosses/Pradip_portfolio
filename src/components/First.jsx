import React from 'react'
import Pradip from '../assests/pradipdon.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const First = () => {
    return (
        <div id='home' name="home" className='h-screen z-0 w-full bg-gradient-to-b from-black to-gray-800 via-black'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Front-End Developer
                    </h2>
                    <p className='text-grey-500 py-4 max-w-md text-white'>
                        I exhibit a profound aptitude for crafting visually captivating and highly intuitive user interfaces using HTML, CSS, and JavaScript.
                    </p>

                    <div>
                        <a href="#projects">
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500 cursor-pointer'>
                                Projects
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div>
                    <img src={Pradip} alt="my-profile" className="rounded-full mt-20 z-[-1] mx-auto w-2/3 md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default First
