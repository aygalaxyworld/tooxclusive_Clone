import React from 'react'
import Link from 'next/link'

export default function BulletLink({href, title}:{href: string, title: string}) {
  return (
    <div>
      <Link href={href}>
              <div className="text-black border-b-2 py-3 text-sm border-gray-100 hover:text-red-600">
              <h3>
                <span className="mr-3"><i className="fa-solid fa-caret-right text-black"></i></span>
                {title}
              </h3>
              </div>
              </Link>
    </div>
  )
}
