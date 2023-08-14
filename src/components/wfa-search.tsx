'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
    initialSearch: string
}

const WfaSearch = ({ initialSearch }: Props) => {
    const [search, setSearch] = useState(initialSearch ?? "");
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (search == "") {
                    router.replace(`/wfa`)
                    return router.refresh()
                }

                router.replace(`/wfa?search=${encodeURIComponent(search)}`);
                router.refresh();
            }}
            className="flex items-center w-full gap-2 mt-4"
        >
            <input
                className="border-2 flex-1 border-box bg-[#f1f1f1] border-[#000000] px-4 py-2 text-sm"
                type="text"
                placeholder="Type to search WFA Place"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
            />
            <button type='submit' className='hidden' />
        </form>
    )
}

export default WfaSearch