import React from 'react'

type Props = {}

const VerticalExperienceSection = (props: Props) => {
    return (
        <ol>
            <ListItem title={'SIRCLO'} subtitle='Product Manager' year='2022 - Current' detail={() => (
                <ul className='mt-2'>
                    <li className='mb-2'>
                        <span className='font-bold'>SIRCLO Store platform.</span>
                        <p>- integrate biteship as logistics provider.</p>
                        <p>- handle platform migration to OMS v3.</p>
                    </li>
                    <li className='mb-2'>
                        <span className='font-bold'>Buyer Experience.</span>
                        <p>- add transaction fee implementation.</p>
                        <p>- add product highlights feature.</p>
                        <p>- add discount shipping.</p>
                        <p>- revamp order history.</p>
                        <p>- settings layout adjustment to toggle some sections.</p>
                    </li>
                    <li className='mb-2'>
                        <span className='font-bold'>Promotion and Performance Marketing.</span>
                        <p>- add sirclo ads feature that integrated with meta marketing API.</p>
                        <p>- revamp create product discount experience.</p>
                        <p>- add digital consultation service.</p>
                    </li>
                </ul>
            )} />
        </ol>
    )
}

const ListItem = ({ title, subtitle, detail, year }: { title: string; subtitle: string; detail: () => React.ReactNode; year: string }) => {
    return (<li className='relative pb-4 pl-4 border-l-2 sm:pl-8 border-l-black'>
        <span className='absolute w-4 h-4 bg-white -left-2 ring-1 -top-1 ring-black' />
        <div className='flex'>
            <h4 className="inline-block text-lg font-black">{title}</h4>
            <h5 className="inline-block px-2 py-1 ml-2 text-xs rounded-full bg-slate-200">
                {subtitle}
            </h5>
            <span className='ml-auto'>{year}</span>
        </div>
        {detail()}
    </li>)
}

export default VerticalExperienceSection