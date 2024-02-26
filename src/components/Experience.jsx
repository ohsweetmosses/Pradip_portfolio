import React from 'react';
import css from '../assests/css.png';
import github from '../assests/github.png';
import html from '../assests/html.png';
import javascript from '../assests/javascript.png';
import python from '../assests/react.png';
import reactImage from '../assests/python.png';
import tailwind from '../assests/tailwind.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500'
    },
    {
      id: 7,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    }
  ];

  return (
    <div id='experience' name='experience' className='justify-center bg-white w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* <div>
          <p className='text-4xl text-black font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6 text-black'>These are the technologies I've worked with</p>
        </div> */}
        <div className="flex items-center justify-center h-screen mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Experience</h1>
            <p className="text-lg mt-4">This text is centered on the page.</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="mt-8 flex justify-start">
            <div className="grid grid-col-2">
              <div className="mr-4 p-4 bg-gray-200 shadow-md rounded-lg">
                <p className="text-green-500 text-6xl font-bold">170+</p>
                <p className="text-black">Students Guided successfully for a US study visa</p>
              </div>
              <div className="p-4 bg-gray-200 shadow-md rounded-lg">
                <p className="text-green-500 text-6xl font-bold">250+</p>
                <p className="text-black">Students taught and excelled the IELTS test</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='w-full max-w-md'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-15 text-center text-black font-bold py-8 px-12 sm:px-0'>
              {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt='' className='w-20 mx-auto' />
                  <p className='mt-4'>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex justify-start">
          <div className="mr-4 p-4 bg-gray-200 shadow-md rounded-lg">
            <p className="text-green-500 text-6xl font-bold">170+</p>
            <p className="text-black">Students Guided successfully for a US study visa</p>
          </div>
          <div className="p-4 bg-gray-200 shadow-md rounded-lg">
            <p className="text-green-500 text-6xl font-bold">250+</p>
            <p className="text-black">Students taught and excelled the IELTS test</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
