import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import NewArrivals from '../Components/NewArrivals'
import NewsLetter from '../Components/NewsLetter'

function Home() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewArrivals/>
        <NewsLetter/>
    </div>
  )
}

export default Home