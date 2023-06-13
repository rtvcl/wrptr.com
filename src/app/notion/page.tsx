import NotionService from '@/lib/notion-service'
import Image from 'next/image'
import React from 'react'

type Props = {}

const NotionPage = async (props: Props) => {
    const notionService = new NotionService()
    const posts = await notionService.getPublishedBlogPosts()
    console.log("🚀 ~ file: page.tsx:9 ~ NotionPage ~ posts:", posts)

    return (
        <ul>
            {posts.map(item => (
                <li key={item.id}>
                    <div className="flex space-x-4">
                        <Image
                            width={320}
                            height={240}
                            className="flex-shrink-0 object-cover w-32 h-24 bg-slate-300"
                            src={item.cover || ""}
                            alt={item.slug}
                        />
                        <div className="flex flex-col">
                            <h4 className="text-base font-bold">
                                {item.title}
                            </h4>
                            <p className="mb-4 text-sm line-clamp-2">
                                {item.description}
                            </p>
                            <button className="self-start font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1">
                                read more
                            </button>
                        </div>
                    </div>

                </li>
            ))}
        </ul>
    )
}

export default NotionPage