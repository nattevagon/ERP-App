"use client";

import { BookmarkSquareIcon, MagnifyingGlassIcon, PlusIcon, PrinterIcon, ShareIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button
} from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageLayout({ children, title, desc, type }) {
  const pathname = usePathname()

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              {desc}
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <Button className="flex items-center p-2">
              <BookmarkSquareIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
            {type === "viewAll" && (
              <Link href={pathname + "/add"}>
                <Button className="flex items-center p-2">
                  <PlusIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
              </Link>
            )}
            {type === "viewAll" && (
              <Button className="flex items-center p-2">
                <PrinterIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            )}
            {type === "viewAll" && (
              <Button className="flex items-center p-2">
                <MagnifyingGlassIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            )}
            {type === "viewAll" && (
              <Button className="flex items-center p-2">
                <ShareIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      {children}
    </Card>
  );
}