'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
export default function NotFound() {
    const pathname = usePathname();
    const AuthorName = pathname.split('/')[2];
  return (
    <div>
       <div>
      <h2 className= 'bg-orange-600 p-5 text-center text-xl font-semibold uppercase'>No publications made by {AuthorName}</h2>  
    </div>
    </div>
  )
}
