import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid';

 function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 
      bg-white shadow-md p-5">
      <div className="relative flex items-center h-10
       cursor-pointer my-auto">
              <Image src="https://links.papareact.com/qd3"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  alt="header-image"
               />
          </div>
      <div className="flex items-center md:border-2 rounded-full
          py-2 md:shadow-sm">
        <input className="pl-5 bg-transparent outline-none flex-grow 
        text-gray-600 text-sm placeholder-gray-400"
          type="text"
          placeholder="Start your search" />
        <SearchIcon 
          className=" hidden h-8 bg-red-500 text-white p-2 
          rounded-full cursor-pointer md:inline-flex md:mx-2"
        />
      </div>
      <div className="flex items-center justify-end space-x-4">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header;