"use client"

import React, { useState } from 'react'
import { ChevronDownIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonSubMenu } from "..";
import { usePathname } from "next/navigation";

function ButtonMenu({ data }) {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="my-2">
            {data.menus.length > 0 ?
                <div>
                    <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded" onClick={() => setMenuOpen(!menuOpen)}>
                        {data.icon}
                        <div className="text-black flex-1">{data.name}</div>
                        <ChevronDownIcon className={"h-4 w-4 ml-2" + (menuOpen ? " rotate-180" : " rotate-0")} strokeWidth={2} color="black" />
                    </div>
                    <motion.ul
                        animate={menuOpen ? { height: 'fit-content', } : { height: 0, }}
                        className="flex-col flex h-0 pl-4 text-[0.8rem] font-normal  overflow-hidden"
                    >
                        {data.menus?.map((menu) => (
                            <div key={menu.name} className="flex flex-col gap-1">
                                <ButtonSubMenu data={menu} />
                            </div>
                        ))}
                    </motion.ul>
                </div>
                :
                <Link href={data.link} className="my-4">
                    <div className={"flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded"+ (data.link === pathname ? " bg-gray-100" : "")}>
                        {data.icon}
                        <div className="text-black">{data.name}</div>
                    </div>
                </Link>
            }
        </div>
    )
}

export default ButtonMenu