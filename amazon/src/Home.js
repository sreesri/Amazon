import React from 'react'
import Header from './Header'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
    <img className='home__banner'src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/GW/endstodayprime2._CB632192369_.jpg'/>

    <Product id="23123"
    title="sdfsdfdsfdsf"
    price ={123}
    rating={4}
    image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX522_.jpg"/>
    </div>
    </>
  )
}

export default Home