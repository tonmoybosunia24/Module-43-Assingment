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
      <div className='flex px-20 gap-5'>
        <Blogs handleCookDetails={handleCookDetails}></Blogs>
        <Cookings cooksDetail={cooksDetail}></Cookings>
      </div>
    </>
  )
}

export default App
