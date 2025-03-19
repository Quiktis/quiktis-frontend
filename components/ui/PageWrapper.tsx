import React from 'react'

const PageWrapper = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='w-full px-20 mx-auto flex flex-col gap-10 min-h-screen'>
        {children}
    </div>
  )
}

export default PageWrapper