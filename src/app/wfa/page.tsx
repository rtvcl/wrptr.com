
import WFAIntroduction from '@/components/wfa-bullshit'
import { Place } from '@prisma/client'
import WFAList from '@/components/wfa-list'

type Props = {}

const WFCList = async (props: Props) => {

  const response = await fetch('http://localhost:3000/api/wfa', { method: 'GET' })
  const data: { data: Place[] } = await response.json()
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
          <WFAList places={data.data} />
        </div>
      </div>
    </section>
  )
}

export default WFCList