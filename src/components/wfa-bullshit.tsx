'use client'

import { Place } from "@prisma/client"
import { useState } from "react"

type Props = {
}

const WFAIntroduction = (props: Props) => {
    const [showIntroduction, setShowIntroduction] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between w-full mb-4'>
                <h1 className="text-4xl font-black ">/wfa-list</h1>
                <button
                    className=" disabled:bg-gray-400 px-6 whitespace-nowrap font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors rotate-1"
                    onClick={() => setShowIntroduction(!showIntroduction)}
                >
                    <div className="-rotate-1">
                        {showIntroduction ? 'cut' : 'show'} the bullsh#t
                    </div>
                </button>
            </div>
            {showIntroduction && (<div className="space-y-4">
                <p >
                    Welcome to the &ldquo;WFA List&ldquo; page! Here, I find inspiration in the simplicity of products created by individuals in the public eye. I also discovered the limitations of Instagram highlights when it comes to storing my list. As a digital artist, I envisioned this curated page as a resource for &ldquo;work from anywhere&ldquo; (WFA) enthusiasts like yourself.
                </p>
                <p>
                    So, without further ado, I present to you my handpicked collection of WFA places. This list serves as a valuable reference for those seeking the perfect remote work destinations. Stay tuned as I continue exploring new horizons and expanding this list with more data. Together, let&lsquo;s embark on exciting adventures in the ever-evolving world of remote work! ✨🌍 #WFAList #DigitalArtist #WorkFromAnywhere
                </p>
            </div>)}
        </>
    )
}

export default WFAIntroduction