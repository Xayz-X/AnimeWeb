import React from "react";

const Card = ({ image_url }) => {
  return (
    <div className="ring-1 w-50 h-50 flex flex-col items-center shadow-md p-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg">
      <img
        className="w-48 h-48 object-cover rounded-t-lg mb-4"
        src={image_url}
        alt={image_url}
      />
      <a
        href={image_url}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="text-white font-bold bg-blue-500 hover:animate-pulse text-center rounded-lg p-2"
      >
        Download
      </a>
    </div>
  );
};

export default Card;
