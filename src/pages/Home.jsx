import React, { useState } from 'react'
import SliderComp from '../companent/home/SliderComp'
import Sorting from '../companent/home/Sorting'
import Categori from '../companent/home/Categori'
import Product from '../companent/home/Product'

const Home = () => {
  const[sort,setSort]=useState('')
  const[category,setCategory]=useState('')
  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Categori setCategory={setCategory}/>
        <Product category={category} sort={sort}/>

      </div>
    </div>
  )
}

export default Home
