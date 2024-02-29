import React from 'react';
import { UserButton } from "@clerk/nextjs";


const Home = () => {
  return (
    <div className=''>
      <p>home</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home