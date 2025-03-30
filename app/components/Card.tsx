import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps{
  width : string;
  href: string;
  src: string;
  alt: string;
  title: string;
  date: string;
}
export default function Card({href, src, alt, title, date, width}:CardProps) {
  return (
    <div className={width}>
        <Link href={href}>
            <div className="relative h-56 sm:h-64">
                {/* image Session */}
                <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                priority
                />
                {/* Content Session */}
                <div className="absolute left-3 bottom-6 ">
                  <h3 className="  text-white text-lg font-semibold">{title} </h3>
                  <h3 className=" text-left font-medium text-xs  text-white uppercase mt-2 ">
                  <i className="fa-regular fa-clock "></i>
                  <span className="ml-2">{date}</span>
                  </h3>
                </div>
              </div>
          </Link>
    </div>
  )
}
