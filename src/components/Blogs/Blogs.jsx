import React from 'react'
import Heading from '../Shared/Heading'
import B1 from '../../assets/Blogs/B1.jpg'
import B2 from '../../assets/Blogs/B2.jpg'
import B3 from '../../assets/Blogs/B3.jpg'

const BlogData = [
    {
        title: 'How to choose perfect smartwatch',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur at sit dolorum aspernatur. Odit suscipit cum debitis nesciunt magnam fugit, quis nobis unde fugiat molestias officia aut rerum quasi.",
        published:'Jan 20, 2024 by German Cano',
        img:B1
    },
    {
        title: 'How to choose perfect gadget',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur at sit dolorum aspernatur. Odit suscipit cum debitis nesciunt magnam fugit, quis nobis unde fugiat molestias officia aut rerum quasi.",
        published:'May 13, 2024 by Kang Haerin',
        img:B2
    },
    {
        title: 'How to choose perfect headphone',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur at sit dolorum aspernatur. Odit suscipit cum debitis nesciunt magnam fugit, quis nobis unde fugiat molestias officia aut rerum quasi.",
        published:'Dec 22, 2025 by Santiago Marques',
        img:B3
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        <Heading title={'Recent News'} subtitle={'Explore Our Blogs'}/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {
                BlogData.map((data)=>(
                    <div className='bg-white dark:bg-gray-900' key={data.title} data-aos='flip-up'>
                        <div className='mb-1 overflow-hidden rounded-2xl '>
                            <img src={data.img} alt="" className='w-full h-[220px] object-cover rounded-lg hover:scale-105 duration-500'/>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Blogs
