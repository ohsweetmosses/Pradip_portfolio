import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div name='contact' className=' w-full  h-screen bg-gradient-to-b from-white to black-800 via-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg max-auto h-full'>
        <div className='py-4 mx-auto pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-black-500'>Contact</p>
          <p className='py-8'>Fill this form and let's talk</p>
        </div>

        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2 '>
            <input
              type='text'
              name='name'
              placeholder='Your name here...' 
              value={formData.name}
              onChange={handleChange}
              className='p-2 bg-black border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Your phone number here..'
              value={formData.email}
              onChange={handleChange}
              className='my-4 p-2 bg-black border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='What is your message?'
              rows='10'
              value={formData.message}
              onChange={handleChange}
              className='p-2 bg-black border-2 rounded-md text-white focus:outline-none'
            ></textarea>
            <button
              type='submit'
              className='text-white bg-gradient-to-b from-blue-500 to-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Click me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;