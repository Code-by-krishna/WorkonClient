import { useState } from 'react'
import Card from './Component/card'
import Nature from "./assets/Images/nature.jpeg"
import Fitness from "./assets/Images/fitness.jpg"
import Cricket from "./assets/Images/Cricket.webp"
import './App.css'

function App() {

  return (
    <>
      <h1  className=' text-center mt-3 text-4xl font-serif'>Cards: </h1>
      <div className='flex '>

        <div>
          <Card Src={Nature} Type='Nature image' Discription='Nature is the physical world and everything in it that is not made by people, including plants, animals, mountains, oceans, and stars.'/>
        </div>
        <div>
          <Card Src={Fitness} Type='Fitness image' Discription='Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, '/>
        </div>
        <div>
          <Card Src={Cricket} Type='Create image' Discription='Cricket News Live Today December 3, 2024: Josh Hazlewood opens India' />
        </div>
        <div>
          <Card Src={Cricket} Type='Create image' Discription='Cricket News Live Today December 3, 2024: Josh Hazlewood opens India' />
        </div>
        
      </div>
    </>
  )
}

export default App
