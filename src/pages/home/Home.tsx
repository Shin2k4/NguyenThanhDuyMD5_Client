import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import "./home.scss"
import { Outlet } from 'react-router-dom'
import AppCarousel from './components/carousel/Carousel'

export default function Home() {

  return (
    <div className='home_page'>
      <Header></Header>
      <div className='home_page_body'>
        <div className='body_content'>
          <Outlet></Outlet>

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
