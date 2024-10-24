import React from 'react'

function Dashboard() {
  return (
    <div className="grid grid-cols-3 auto-cols-auto gap-4">
      <div className="grid grid-rows-3 col-span-2 gap-4">
        <div className="bg-white rounded-lg p-8 drop-shadow-md row-span-2">
          A
        </div>
        <div className="bg-white rounded-lg p-8 drop-shadow-md">
          B
        </div>
      </div>
      <div className="grid grid-rows-3 gap-4">
        <div className="bg-white rounded-lg p-8 drop-shadow-md">
          C
        </div>
        <div className="bg-white rounded-lg p-8 drop-shadow-md row-span-2">
          D
        </div>
      </div>
    </div>
  )
}

export default Dashboard