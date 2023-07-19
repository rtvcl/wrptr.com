import { SiGooglemaps, SiInstagram,  SiTiktok } from 'react-icons/si'
import Link from 'next/link'
import { Place } from '@prisma/client'


type Props = {
    places: Place[]
}

const WFAList = (props: Props) => {

  return (
    <ul className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
    {props.places.map((wfa, index) => (
      <li key={wfa.name}
        className=" flex retro-shadow border-[#000000] border-[2px] bg-white p-4"
      >
        <div className='flex flex-col items-start w-full space-y-4'>
          <div className='w-full'>
            <h4 className="inline-block text-lg font-black">{wfa.name}</h4>
            <h5 className='inline-block px-2 py-1 ml-2 text-xs rounded-full bg-slate-200'>{wfa.location_name}</h5>
          </div>

          <ul className='grid grid-cols-2 gap-x-4'>
            <li>affordability: {wfa.affordability}/5</li>
            <li>quitetude: {wfa.quitetude}/5</li>
            <li>drinks: {wfa.drinks}/5 {wfa.is_alcohol && '+ 🍺'}</li>
            <li>connectivity: 3.2/5</li>
          </ul>

        </div>
        <ul className="flex flex-col items-center justify-around text-lg">
          <li>
            <Link
              target="_blank"
              href={wfa.url_ig}
              className='hover:text-pink-500'
            >
              <SiInstagram />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={wfa.url_tt}
              className='hover:text-pink-500'
            >
              <SiTiktok />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={wfa.url_map}
              className='hover:text-pink-500'
            >
              <SiGooglemaps />
            </Link>
          </li>
        </ul>
      </li>
    ))}

  </ul>
  )
}

export default WFAList