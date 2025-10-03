import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from './assets/Hero/Hs1.png'
import Products from './components/Products/Products'
import watch from './assets/ProductsCard/PC8.png'
import Banner2 from './components/Banner/Banner2'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import PopUp from './components/PopUp/PopUp'
import AOS from "aos"
import "aos/dist/aos.css"

const BannerData ={
  discount:"30% OFF",
  title:"FIne Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2: "Air Solo Bass",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum explicabo autem.",
  bgColor: "#f42c37"
}

const BannerData2 ={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"14 Jan to 28 Jan",
  image:watch,
  title2: "Smart Solo",
  title3:"Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum explicabo autem.",
  bgColor: "#1c1c1e"
}

const App = () => {

  const[orderPopUp,setOrderPopUp] = useState(false)

  const handleOrderPopUp = () =>{
    setOrderPopUp(!orderPopUp)
  }

  useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:'ease-in-sine',
        delay:100,
        offset:100,
      }
    )
    AOS.refresh()
  },[])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} handleOrderPopUp={handleOrderPopUp}/>
      <Products />
      <Banner2 data={BannerData2} handleOrderPopUp={handleOrderPopUp}/>
      <Blogs />
      <Partners />
      <Footer />
      <PopUp orderPopUp={orderPopUp} handleOrderPopUp={handleOrderPopUp}/>
    </div>
  )
}

export default App
