import { Place } from '@prisma/client'
import React, { ForwardedRef, forwardRef } from 'react'

import { SiGooglemaps, SiInstagram, SiTiktok } from 'react-icons/si'
import Link from 'next/link'


type Props = {
  place: Place
}


const WFAListItem = forwardRef( ({place}: Props, ref: ForwardedRef<HTMLLIElement>) => {
  
  return (
    <li
      ref={ref}
      className=" flex retro-shadow border-[#000000] border-[2px] bg-white p-4">
      <div className='flex flex-col items-start w-full space-y-4'>
        <div className='w-full'>
          <h4 className="inline-block text-lg font-black">{place.name}</h4>
          <h5 className='inline-block px-2 py-1 ml-2 text-xs rounded-full bg-slate-200'>{place.location_name}</h5>
        </div>

        <ul className='grid grid-cols-2 gap-x-4'>
          <li>affordability: {place.affordability}/5</li>
          <li>quitetude: {place.quitetude}/5</li>
          <li>drinks: {place.drinks}/10 {place.is_alcohol && '+ 🍺'}</li>
          <li>connectivity: {place.connectivity}/5</li>
        </ul>

      </div>
      <ul className="flex flex-col items-center justify-around text-lg">
        <li>
          <Link
            target="_blank"
            href={place.url_ig}
            className='hover:text-pink-500'
          >
            <SiInstagram />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={place.url_tt}
            className='hover:text-pink-500'
          >
            <SiTiktok />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={place.url_map}
            className='hover:text-pink-500'
          >
            <SiGooglemaps />
          </Link>
        </li>
      </ul>
    </li>
  )
})

WFAListItem.displayName = 'WFAListItem'

export default WFAListItem