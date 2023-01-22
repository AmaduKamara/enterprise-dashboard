import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <aside className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-teal-600 hover:bg-teal-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard />
            </div>
          </Link>

          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson />
            </div>
          </Link>

          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag />
            </div>
          </Link>

          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings />
            </div>
          </Link>
        </div>
      </aside>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
