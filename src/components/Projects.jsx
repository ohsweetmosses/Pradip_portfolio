import React, { useState } from 'react';
import website from '../assests/Development.png';
import Design from '../assests/design.png';


const projects = [
  {
    title: 'House',
    type: 'Website',
    description:
      'The Burger House project is a platform that aims to provide bean-to-cup excellence in every cup of coffee. It is designed to cater to coffee enthusiasts ',
    imageUrl: website,
  },
  {
    title: 'Finance',
    type: 'website',
    description:
      'This will be a finance buying app where you don’t have to go to the nursery to buy plants. You can order them by just sitting at your home..',
    imageUrl: website,
  },
  {
    title: 'Fitness App Ux/Ui Design',
    type: 'Design',
    description:
      'Our fitness app is designed to provide users with a seamless and motivating experience to help them achieve their health and fitness goals...',
    imageUrl: Design,
  },
  {
    title: 'Hotel-App ux/ui Design',
    type: 'Design',
    description:
      'A travel planning app is an application for booking hotel reservations, tracking loyalty points, and browsing travel packages,hello. A travel planning...',
    imageUrl: Design,
  },
  {
    title: 'Alcohol Store',
    type: 'Design',
    description:
      'NMS is a platform for buying alcohol, stationery, cosmetics, and other Herbal products at a reasonable price from your home...',
    imageUrl: Design,
  },
  {
    title: 'Traffic Vehicle Management System',
    type: 'Design',
    description:
      'A traffic vehicle management system is a software application or system that is designed to ',
    imageUrl: Design,
    },
];

const categories = ['All', 'Website', 'Design'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.type === selectedCategory;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id='projects' className="bg-white py-5">
      <section className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`mx-1 py-1 px-2 text-sm font-medium rounded-md sm:mx-2 sm:px-6 ${
                selectedCategory === category
                  ? 'bg-red-500 text-black'
                  : 'text-black border hover:bg-gray-700'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group shadow-md hover:shadow-lg "
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-20 w-20 object-cover mx-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>

                <p className="text-sm font-semibold text-black mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 text-sm font-semibold rounded-md bg-red-500 text-white hover:bg-blue-500"
                >
                  Click Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}