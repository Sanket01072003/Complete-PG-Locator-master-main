import React from 'react';

const Feedback = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <div className="top text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">WHAT OUR CUSTOMERS SAY ABOUT US</h1>
        </div>
        <div className="bottom flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="left bg-white p-6 rounded-md shadow-md flex flex-col items-center">
            <h1 className="text-5xl text-blue-500 mb-4">"</h1>
            <p className="text-gray-700 text-lg text-center mb-4">The property photos and descriptions on the website are realistic and accurate, giving me a true sense of each home before even scheduling a visit. It saved me time by ensuring I only visited properties that matched my expectations.</p>
            <p className="text-gray-600 font-bold">-Rahul</p>
          </div>
          <div className="middle bg-white p-6 rounded-md shadow-md flex flex-col items-center mx-4">
            <h1 className="text-5xl text-blue-500 mb-4">"</h1>
            <p className="text-gray-700 text-lg text-center mb-4">I had an excellent experience using this PG locator website. The platform boasts an extensive range of property listings, making it easy to find the perfect home that suits my needs and preferences.</p>
            <p className="text-gray-600 font-bold">-Rohan</p>
          </div>
          <div className="right bg-white p-6 rounded-md shadow-md flex flex-col items-center">
            <h1 className="text-5xl text-blue-500 mb-4">"</h1>
            <p className="text-gray-700 text-lg text-center mb-4">What sets this PG locator website apart is its transparency. Rental terms, fees, and any additional costs are clearly presented, providing a level of trust and transparency that is crucial in the rental process.</p>
            <p className="text-gray-600 font-bold">-Sania</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
