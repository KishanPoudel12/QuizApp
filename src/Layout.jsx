import React from 'react'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
     <Header/>
     <main className='flex-grow'>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default Layout