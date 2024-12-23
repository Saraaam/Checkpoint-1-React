import React from 'react';
import product from '../product'; // Import product data
import reactTshirt from '../image/249d06102cefbf01819e20dd3ff71372.jpg'; // Import the image

const Image = () => {
  return (
    <img
      src={reactTshirt} // Use the imported image
      alt={product.name}
      className="w-full h-auto rounded-md"
    />
  );
};

export default Image;
