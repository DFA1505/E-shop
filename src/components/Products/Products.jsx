import React from 'react'
import Heading from '../Shared/Heading'
import ProductsCard from './ProductsCard'
import PC1 from '../../assets/ProductsCard/PC1.png'
import PC2 from '../../assets/ProductsCard/C6.png'
import PC3 from '../../assets/ProductsCard/PC3.png'
import PC4 from '../../assets/ProductsCard/PC4.png'
import PC5 from '../../assets/ProductsCard/C1.png'
import PC6 from '../../assets/ProductsCard/PC6.png'
import PC7 from '../../assets/ProductsCard/PC7.png'
import PC8 from '../../assets/ProductsCard/PC8.png'
const ProductsData =[
    {
        id:1,
        img: PC1,
        title: 'Boat Headphone',
        price: '120',
        aosDelay:'0'
    },
    {
        id:2,
        img: PC2,
        title: 'Speaker',
        price: '420',
        aosDelay:'0'
    },
    {
        id:3,
        img: PC3,
        title: 'Goggles',
        price: '320',
        aosDelay:'0'
    },
    {
        id:4,
        img: PC4,
        title: 'Printer',
        price: '220',
        aosDelay:'0'
    },
    {
        id:5,
        img: PC5,
        title: 'Air Pods',
        price: '100',
        aosDelay:'0'
    },
    {
        id:6,
        img: PC6,
        title: 'Virtual Reality Goggles',
        price: '500',
        aosDelay:'0'
    },
    {
        id:7,
        img: PC7,
        title: 'Charger',
        price: '56',
        aosDelay:'0'
    },
    {
        id:8,
        img: PC8,
        title: 'Smart Watch',
        price: '180',
        aosDelay:'0'
    },
]

const Products = () => {
  return (
    <div>
      <div className="container">
        <Heading title={'Our Products'} subtitle={'Explore Our Products'}/>
        <ProductsCard data={ProductsData}/>
      </div>
    </div>
  )
}

export default Products
