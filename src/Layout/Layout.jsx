import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout