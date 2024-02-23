import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Hello, I am Pradip Basnet, a passionate data scientist and front-end developer. With a strong background in both fields, I bring a unique blend of analytical thinking and creative problem-solving to my work.</p>
<br/>
<p className='text-xl'>As a data scientist, I specialize in machine learning, data analysis and visualization utilizing my expertise to extract valuable insights from complex datasets. On the front-end development side, I excel in HTML, CSS and JavaScript crafting intuitive and visually appealing user interfaces. With a proven track record of delivering impactful projects, I am dedicated to leveraging data-driven solutions and innovative designs to create meaningful experiences. I am constantly driven by my curiosity and enthusiasm for both fields and I thrive on challenging projects that allow me to combine my technical skills and creativity. Let's connect and collaborate on exciting ventures!</p>
            </div>
    </div>
  )
}

export default About
