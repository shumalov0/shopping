
import React from 'react'

interface layout {

    children:React.ReactNode
}

const layout = ({children}:layout) => {
  return (
    <div className='h-screen flex justify-center items-center bgone'>
    {children}
    </div>
  )
}

export default layout