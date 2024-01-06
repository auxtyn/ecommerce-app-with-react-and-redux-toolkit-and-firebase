import React from 'react'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-dark py-3 text-white'>
      <p>&copy; {year} All rights reserved</p>

    
    </footer>
  )
}

export default Footer
