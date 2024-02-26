import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experience'
        }
    ];

    const handleScroll = (id) => {
        setTimeout(() => {
            const item = document.getElementById(id);
            console.log(item)
            if (item) {
                window.scrollTo({
                    top: item.offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100); 
    };

    // Define the style for Times New Roman font
    const timesNewRomanStyle = {
        fontFamily: 'Times New Roman'
    };
    
    return (
        <div className="flex z-50 justify-between items-center w-full h-20 px-4 text-white bg-black ">
            <div style={timesNewRomanStyle}>
                <h1 className="text-5xl font-Calibri ml-2">Shubham Mishra</h1>
            </div>

            <ul className="hidden md:flex cursor-pointer">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200">
                        <Link to="/" onClick={() => handleScroll(link)}>{link}</Link>
                    </li>
                ))}
                <li className="px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200">
                    <Link to="/contact" style={timesNewRomanStyle}>Contact</Link>
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
                {nav ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link to="/" onClick={() => {handleScroll(link); setNav(!nav)}} style={timesNewRomanStyle}>{link}</Link>
                        </li>
                    ))}
                    <li className="px-4 text-white cursor-pointer capitalize py-6 text-4xl">
                        <Link to="/contact" style={timesNewRomanStyle}>Contact</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavBar;
