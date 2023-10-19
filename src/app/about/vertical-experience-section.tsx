import React from 'react'

type Props = {}


const workExperiences = [
    {
        company: 'SIRCLO',
        title: 'Product Manager',
        duration: '2022 - Present',
        description: 'I have been leading multiple product teams, ranging from promotions and performance marketing to enhancing the buyer experience and managing the full SIRCLO Store Platform.',
        highlight: [
            'Successfully managed 3rd party integrations, including Meta API, Payment Gateway API, and Logistics API.',
            'Achieved a significant increase in website traffic for merchant websites, up to 60%.',
            'Implemented a strategic webstore transaction fee to optimize the cost of goods sold (COGS).',
            'Streamlined operational efficiency by integrating a logistics aggregator, paving the way for future development initiatives.'
        ]
    },
    {
        company: 'MicroAd Indonesia',
        title: 'Product Manager',
        duration: '2021 - 2022',
        description: 'Primarily engaged in consulting on digital-related campaign initiatives, as well as planning and conducting research for products to be developed within the scope of a digital advertising agency.'
    },
    {
        company: 'Astra Credit Companies',
        title: 'IT Product Analyst',
        duration: '2019 - 2021',
        description: 'Successfully completed the ACC Management Trainee IT Program and assumed the role of a Product Analyst with responsibilities for various internal and partner products.',
        highlight: [
            'Managed the ACCPartner product, resulting in a significant increase in product adoption among Jakarta dealer partners, growing from 3 dealers to 11.',
            'Took responsibility for developing reporting features for dealer performance and credit application for top management to facilitate monitoring and strategic decision-making.',
            'Demonstrated a comprehensive understanding of financing and automotive business processes.',
        ]
    }

]
const VerticalExperienceSection = (props: Props) => {
    return (
        <ol>
            {workExperiences.map((workExperience, index) => (
                <ListItem key={workExperience.company} title={workExperience.company} subtitle={workExperience.title} year={workExperience.duration} detail={() => (
                    <div className=''>
                        <p className='mb-2'>{workExperience.description}</p>
                        {workExperience.highlight &&
                            <>
                                <h6 className='mb-2 font-bold'>Highlights:</h6>
                                <ul>
                                    {workExperience.highlight.map((detail, index) => (
                                        <li className='ml-4 list-disc' key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </>
                        }
                    </div>
                )} />
            ))}
        </ol>
    )
}

const ListItem = ({ title, subtitle, detail, year }: { title: string; subtitle: string; detail: () => React.ReactNode; year: string }) => {
    return (
    <li className='relative pb-4 pl-4 border-l-2 sm:pl-8 border-l-black'>
        <span className='absolute w-4 h-4 bg-white -left-2 ring-1 -top-1 ring-black' />
        <div className='flex -translate-y-2'>
            <div className='flex-col flex-1'>
                <h4 className="inline-block text-xl font-bold">{title}</h4>
                <h5 className="inline-block px-2 py-1 ml-2 text-xs rounded-full bg-slate-200">
                    {subtitle}
                </h5>
            </div>
            <span className='italic font-bold text-gray-400'>{year}</span>
        </div>
        {detail()}
    </li>)
}

export default VerticalExperienceSection