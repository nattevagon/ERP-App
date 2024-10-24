import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ButtonMenu } from "..";
import SidebarMenuList from "@/libs/sidebarMenuList";
import { HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="bg-white w-[280px] h-screen sticky top-0 left-0 z-1 p-4 drop-shadow-md overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 hidden lg:block">
      <div>
        <img
          src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg"
          width={200}
          alt="Picture of the author"
        />
        {/* <div className="text-black mt-2 text-center">MY ERP</div> */}
      </div>
      <div className="mt-4">
        {SidebarMenuList?.map((menu) => (
          <div key={menu.name} className="flex flex-col gap-1">
            <ButtonMenu data={menu}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar