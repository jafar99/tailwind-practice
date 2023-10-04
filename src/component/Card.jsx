import React, { useState } from "react";


const Card = () => {
  // crreate json for iamge , project and description

  const data = [
    {
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300", // Smaller size
      projectname: "Project 1",
      description:
        "This is Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300", // Smaller size
      projectname: "Project 2",
      description:
        "This is Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300", // Smaller size
      projectname: "Project 3",
      description:
        "This is Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more data entries as needed
  ];

  return (
    <div className="flex justify-center items-center gap-6 mt-2 p-3 flex-col md:flex-row w-full   flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-3   flex-col border rounded-md p-2 hover:shadow-md dark:bg-gray-800"
        >
          <img src={item.image} className=" h-1/2 rounded-md mt-4" />
          <h1 className="dark:text-white">{item.projectname}</h1>
          <p className="mb-3 w-1/2 text-center dark:text-white">
            {item.description}
          </p>
          <button className="py-3 px-6 mb-2  bg-purple-500 rounded-lg text-white font-bold hover:bg-purple-700 hover:shadow-md">
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
