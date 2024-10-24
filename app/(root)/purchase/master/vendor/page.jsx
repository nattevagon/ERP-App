"use client";

import { PageLayout, Tables } from "@/components"
import { usePathname } from "next/navigation"
import React from 'react'

function Vendor() {
  const pathname = usePathname()

  return (
    <div className="">
      <PageLayout
        title="Vendor"
        desc="Lihat informasi vendor"
        type="viewAll"
      >
        <Tables pathname={pathname} />
      </PageLayout>
    </div>
  )
}

export default Vendor