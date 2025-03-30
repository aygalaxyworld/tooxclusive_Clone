import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DescriptiveCard({href, src, alt, rating, title, date}: {href: string, src: string, alt: string, rating: string, title: string, date: string}) {
  return (
    <div className="flex flex-col w-full">
    <Link href={href}>
    <div className="relative">
    <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={500}
    height={200}
    />
    <span className="absolute left-3 bottom-3 bg-red-600 text-xs font-medium px-2 text-white">{rating}</span>
    </div>
    <h3 className="  text-black text-lg font-semibold mt-3 hover:text-red-500">{title} </h3>
        <h3 className=" text-left font-medium text-xs  text-black uppercase mt-2 ">
        <i className="fa-regular fa-clock text-blue-700"></i>
        <span className="ml-2">{date}</span>
        </h3>
    </Link>
  </div>
  )
}
