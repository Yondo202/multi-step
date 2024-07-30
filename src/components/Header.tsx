import React, { ReactNode } from 'react'

const Header = ({ children }:{ children:ReactNode }) => {
  return (
    <div className='text-3xl font-semibold mb-2 max-sm:text-2xl'>
      {children}
    </div>
  )
}

export default Header
