
import Link from 'next/link'
import { SiGooglemaps, SiInstagram, SiMapbox, SiTiktok } from 'react-icons/si'
import { wfcData } from './data'
import WFAIntroduction from '@/components/wfa-bullshit'

type Props = {}

const WFCList = (props: Props) => {
  return (
    <section className="max-w-screen-lg mx-4 mb-12 lg:mx-auto">
      <WFAIntroduction />

      <div>
        {/* there will be search input here, skip it for now */}
        {/* start the list here */}
        <div>
          <div
            className="flex items-center w-full gap-2 mt-4"
          >
            <input
              className="border-2 flex-1 border-box bg-[#f1f1f1] border-[#000000] px-4 py-2 text-sm"
              type="text"
              placeholder="Type to search WFA Place"
            />
           
          </div>
          <ul className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2'>
            {wfcData.map((wfa, index) => (
              <li key={wfa.name}
                className=" flex retro-shadow border-[#000000] border-[2px] bg-white p-4"
              >
                <div className='flex flex-col items-start w-full space-y-4'>
                  <div className='w-full'>
                    <h4 className="inline-block text-lg font-black">{wfa.name}</h4>
                    <h5 className='inline-block px-2 py-1 ml-2 text-xs rounded-full bg-slate-200'>{wfa.location}</h5>
                  </div>

                  <ul className='grid grid-cols-2 gap-x-4'>
                    <li>affordability: {wfa.perks.affordability}/5</li>
                    <li>quitetude: {wfa.perks.quitetude}/5</li>
                    <li>drinks: {wfa.perks.drinks}/5 {wfa.perks.isAlcohol && '+ 🍺'}</li>
                    <li>connectivity: 3.2/5</li>
                  </ul>

                </div>
                <ul className="flex flex-col items-center justify-around text-lg">
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.instagram}
                      className='hover:text-pink-500'
                    >
                      <SiInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.tiktok}
                      className='hover:text-pink-500'
                    >
                      <SiTiktok />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={wfa.meta.maps}
                      className='hover:text-pink-500'
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