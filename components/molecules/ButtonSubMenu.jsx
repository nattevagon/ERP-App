"use client"

import React, { useState } from 'react'
import { ChevronDownIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ButtonSubMenu({ data }) {
    const pathname = usePathname()
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    return (
        <div className="my-1">
            <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer rounded" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                <div className="text-black">{data.name}</div>
                <ChevronDownIcon className={"h-4 w-4 ml-2" + (subMenuOpen ? " rotate-180" : " rotate-0")} strokeWidth={2} color="black" />
            </div>
            <motion.ul
                animate={
                    subMenuOpen ? { height: 'fit-content', } : { height: 0, }
                }
                className="flex-col flex h-0 pl-4 text-[0.8rem] font-normal  overflow-hidden"
            >
                {data.subMenus?.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                        <Link href={menu.link} className="my-1">
                            <div className={"flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded" + (menu.link === pathname ? " bg-gray-100" : "")}>
                                <div className="text-black">{menu.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </motion.ul>
        </div>
    )
}

export default ButtonSubMenu