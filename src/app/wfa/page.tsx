'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { SiGooglemaps, SiInstagram, SiMapbox, SiTiktok } from 'react-icons/si'
import { wfcData } from './data'

type Props = {}

const WFCList = (props: Props) => {
  const [blsht, setBlsht] = useState(true)
  return (
    <section className="max-w-screen-lg mx-4 mb-12 lg:mx-auto">
      <div className='flex items-center justify-between w-full mb-4'>
        <h1 className="text-4xl font-black ">/wfa-list</h1>
        <button
          className=" disabled:bg-gray-400 px-6 whitespace-nowrap font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors rotate-1"
          onClick={() => setBlsht(!blsht)}
        >
          <div className="-rotate-1">
            {blsht ? 'cut' : 'show'} the bullsh#t
          </div>
        </button>
      </div>
      {!blsht && (<div className="space-y-4">
        <p >
          Welcome to the &ldquo;WFA List&ldquo; page! Here, I find inspiration in the simplicity of products created by individuals in the public eye. I also discovered the limitations of Instagram highlights when it comes to storing my list. As a digital artist, I envisioned this curated page as a resource for &ldquo;work from anywhere&ldquo; (WFA) enthusiasts like yourself.
        </p>
        <p>
          So, without further ado, I present to you my handpicked collection of WFA places. This list serves as a valuable reference for those seeking the perfect remote work destinations. Stay tuned as I continue exploring new horizons and expanding this list with more data. Together, let&lsquo;s embark on exciting adventures in the ever-evolving world of remote work! ✨🌍 #WFAList #DigitalArtist #WorkFromAnywhere
        </p>
      </div>)}

      <div>
        {/* there will be search input here, skip it for now */}
        {/* start the list here */}
        <div>
          <ul className='mt-4 space-y-4'>
            {wfcData.map((wfa, index) => (
              <li key={wfa.name}
                className=" flex retro-shadow border-[#000000] border-[2px] bg-white p-4"
              >
                <div className='flex flex-col items-start w-full space-y-4'>
                  <div className='flex items-center justify-between w-full'>
                    <h4 className="text-lg font-black">{wfa.name}</h4>
                  </div>

                  <ul className='grid grid-cols-2 gap-x-4'>
                    <li>affordability: {wfa.perks.affordability}/5</li>
                    <li>quitetude: {wfa.perks.quitetude}/5</li>
                    <li>drinks: {wfa.perks.drinks}/5 {wfa.perks.isAlcohol && '+ 🍺'}</li>
                    <li>connectivity: 3.2/5</li>
                  </ul>

                </div>
                <ul className="flex flex-col items-center justify-around">
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.instagram}
                    >
                      <SiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.tiktok}
                    >
                      <SiTiktok />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.maps}
                    >
                      <SiGooglemaps />
                    </Link>
                  </li>
                </ul>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </section>
  )
}

export default WFCList