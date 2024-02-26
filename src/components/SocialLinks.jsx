import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'
import"./ScrollBar.css"

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    linkedin <FaLinkedin size={20}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={20}/>
                </>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={20}/>
                </>
            ),
            href: 'mailto:itisshubham79@gmail.com',
            }
    ]

 return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed bg-black-100 with scrollbar'>
        <ul>

            {links.map(({id, child, href, style}) =>(
            <li key={id} className={`flex justify-between items-center w-40 h-10 px-10 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'  ${style}`}>
            <a href={href} className='flex justify-between items-center w-full text-white'> 
                {child}
            </a>
        </li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks