import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='flex justify-center items-centerm p-20 flex-col text-center'>
      <div>
      <h1 className='text-3xl font-bold '> 😜 Page Not Found 😜</h1>
      <p className="mt-6 text-lg">The page you are looking for doesn&apos;t exist. You may have mist
      typed the URL or the page may have moved.</p>

      <Link to={"/"}><p className='underline underline-offset-2 text-blue-500 p-2'> ← Go TO HOME PAGE</p></Link>
      
      </div>
      
    </div>
  )
}
