import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Cookings from './Components/Cookings/Cookings'
import Header from './Components/Header/Header'

function App() {
  const [cooksDetail, setCooksDetail] = useState([])
  const handleCookDetails = cooks =>{
    const newCookDetail = [...cooksDetail, cooks]
    setCooksDetail(newCookDetail)
  }
  return (
    <>
      <Header></Header>
      <div className='text-center pb-5'>
        <h2 className='text-3xl lg:text-4xl font-bold'>Our Recipes</h2>
        <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
        <p className='lg:hidden text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:mb-5 px-5 lg:px-20 gap-5'>
        <Blogs handleCookDetails={handleCookDetails}></Blogs>
        <Cookings cooksDetail={cooksDetail}></Cookings>
      </div>
    </>
  )
}

export default App
