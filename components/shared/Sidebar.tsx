import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href={"/"} className='sidebar-logo'>
                logo image
            </Link>

        </div>
    </div>
  )
}

export default Sidebar