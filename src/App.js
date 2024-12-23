import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const App = () => {
  const firstName = "Sara"; // Change this to test the conditional rendering

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg max-w-sm">
        <Image />
        <div className="p-4">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="mt-6 text-center">
        {firstName ? (
          <>
            <p className="text-lg text-gray-800">Hello, {firstName}!</p>
            <img
              src="https://i.pinimg.com/736x/20/c4/06/20c4063cbe0e7f8dc82ddf9062dce6b7.jpg"
              alt="User"
              className="w-24 h-24 rounded-full mx-auto mt-4"
            />
          </>
        ) : (
          <p className="text-lg text-gray-800">Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
