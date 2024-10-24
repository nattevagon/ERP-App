"use client";

import { Button, Input, Menu, MenuHandler, MenuItem, MenuList, Switch } from "@material-tailwind/react"
import { ArrowLeftStartOnRectangleIcon, BookOpenIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white ml-4 mr-4 rounded-lg p-4 drop-shadow-md sticky top-0 z-20">
      <div className="container flex">
        <div className="flex-1">
          <div className="w-[400px] hidden lg:block">
            <Input
              size="lg"
              placeholder="Search"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex items-center justify-center">
            <Switch
              defaultChecked
            />
          </div>
          <div>
            <Menu placement="bottom-end">
              <MenuHandler>
                <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100">
                  <div className="text-md">Hai, Avatar!</div>
                  <img
                    className="ml-2 w-8 h-8 rounded-full"
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1729775783~exp=1729779383~hmac=682cb1273fbac1a316e6e2a43c9ce54348d19ff9685bd058f1a84375c6043037&w=740"
                    alt="Avatar"
                  />
                </div>
              </MenuHandler>
              <MenuList className="rounded-lg border-0 drop-shadow-md">
                <Link href="/profile">
                  <MenuItem className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-4" strokeWidth={2} color="black" />
                    <div>My Profile</div>
                  </MenuItem>
                </Link>
                <Link href="/contact">
                  <MenuItem className="flex items-center">
                    <BookOpenIcon className="h-4 w-4 mr-4" strokeWidth={2} color="black" />
                    <div>My Contact</div>
                  </MenuItem>
                </Link>
                <Link href="/account">
                  <MenuItem className="flex items-center">
                    <Cog6ToothIcon className="h-4 w-4 mr-4" strokeWidth={2} color="black" />
                    <div>Account</div>
                  </MenuItem>
                </Link>
                <MenuItem className="flex items-center">
                  <ArrowLeftStartOnRectangleIcon className="h-4 w-4 mr-4" strokeWidth={2} color="black" />
                  <div>Logout</div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header