import React from 'react';

const DashboardCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 ">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-fill border p-4 rounded-lg shadow-md">
        <div className="flex flex-col w-full pb-4">
          <p classNmae="text-2xl lg:text-3xl font-semibold lg:font-bold">$8,765</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className='text-green-700 text-lg'>+21%</span>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-fill border p-4 rounded-lg shadow-md">
        <div className="flex flex-col w-full pb-4">
          <p classNmae="text-2xl lg:text-3xl font-semibold lg:font-bold">$2,800,765</p>
          <p className="text-gray-600">Yearly Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className='text-green-700 text-lg'>+20%</span>
        </div>
      </div>
      <div className="bg-white flex justify-between w-fill border p-4 rounded-lg shadow-md">
        <div className="flex flex-col w-full pb-4">
          <p classNmae="text-2xl lg:text-3xl font-semibold lg:font-bold">12,642</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <div className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className='text-green-700 text-lg'>+30%</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
