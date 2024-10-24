"use client";

import { PageLayout } from "@/components";
import { Checkbox, Input, Typography } from "@material-tailwind/react";
import { useParams } from "next/navigation"
import React from 'react'

function EditVendor() {
  const params = useParams()

  console.log(params.id)

  return (
    <PageLayout
      title="Vendor"
      desc="Lihat informasi vendor"
    >
      <div className="bg-white rounded-lg p-4 drop-shadow-md">
        {/* {params.id === "add" ?
        <div>Add</div>
        :
        <div>View {params.id}</div>
      } */}
        <form className="flex flex-col gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Branch
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Vendor Code
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Name
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Address 1
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Address 2
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Branch
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                ZIP Code
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                City
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Country
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Phone Number
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Email
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                Phone
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium"
              >
                FAX
              </Typography>
              <Input
                maxLength={16}
                placeholder=""
                pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              NPWP
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              TOP
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Type
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              COA Pref(Bill)
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              COA Pref(UnBill)
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-medium"
            >
              Description
            </Typography>
            <Input
              maxLength={16}
              placeholder=""
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Checkbox id="ripple-on" label="PKP" ripple={true} />
          </div>
          <div>
            <Checkbox id="ripple-on" label="Suspend" ripple={true} />
          </div>
        </form>
      </div>
    </PageLayout>
  )
}

export default EditVendor