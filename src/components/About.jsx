import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen bg-gradient-to-b from-white to-black-800 via-black'>

      <div className='max-w-screen-lg p-4 mx-auto'>

        <h2 className='text-4xl font-bold mb-4'>
          <span className="border-b-4 border-green-500">About</span>
        </h2>

        <div className='text-xl text-white max-w-prose'>
          <p>
            Hi, This is Shubham Mishra, a data scientist enthusiast, an IELTS instructor, and a USA student visa counselor. I have a strong hold in all three fields and am dedicated towards making a name and fame in all these.
          </p>
          <p className='mt-4'>
            As a dedicated professional, I thrive on the intersection of data science, language instruction, and student advocacy. With a passion for uncovering insights from data, guiding students through language proficiency exams, and facilitating their journey to study in the USA, I bring a unique blend of analytical skills, teaching expertise, and immigration counseling experience. My commitment to empowering individuals to achieve their academic and professional goals drives me to excel in each aspect of my multifaceted role.
          </p>
        </div>

        <div className="mt-8">
          {/* Add your picture component here */}
        </div>

      </div>

    </div>
  );
}

export default About;
