import React from 'react'
import Button from '../Shared/Button'

const ProductsCard = ({data}) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {
            data.map((data)=>(
                <div data-aos='fade-up' data-aos-delay={data.aosDelay} className='group' key={data.id}>
                    <div className='relative space-y-3'>
                        <img src={data.img} alt="" className='h-[180px] w-[260px] object-contain rounded-md bg-gray-300 dark:bg-gray-500'/>
                        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 hidden group-hover:flex h-full group-hover:top-[78px] group-hover:rounded-md'>
                            <Button text={'Add To Cart'} bgColor={'bg-primary'} textColor={'text-white'}/>
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{data.title}</h2>
                        <h2 className='font-bold'>${data.price}</h2>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ProductsCard
