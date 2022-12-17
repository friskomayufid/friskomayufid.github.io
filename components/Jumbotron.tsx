import React from 'react'
import Image from 'next/image'

function Jumbotron() {
  return (
    <div className="container mx-auto px-4 md:w-[1200px] bg-white">
      <div className="grid grid-cols-12 gap-3 mt-20">
        <div className="col-span-6 mt-12">
          <p className="text-secondary font-semibold">Halo, namaku</p>
          <h1 className="text-primary text-6xl font-bold mt-2">
            Frisko Mayufid
          </h1>
          <h3 className="text-secondary text-5xl mt-3">Frontend Engineer</h3>
          <p className="text-secondary w-8/12 mt-5">
            Bekerja sebagai frontend engineer di salah satu start-up di Jakarta.
            Hobi nonton film dan main games.
          </p>
          <button className="btn btn-primary mt-5">Say Hello!</button>
        </div>
        <div className="col-span-6 mx-auto">
          <Image
            priority
            src="/assets/profile.svg"
            alt="Frisko Profile"
            width={450}
            height={450}
            className="border-dashed border-2 border-sky-500 rounded-full p-1"
          />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
