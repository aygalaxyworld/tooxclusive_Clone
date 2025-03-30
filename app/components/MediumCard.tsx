import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MediumCardProps {
    href1: string;
    src1: string;
    alt1: string;
    title1: string;
    date1: string;
    href2: string;
    src2: string;
    alt2: string;
    title2: string;
    date2: string;
  }

export default function MediumCard ({ href1, src1, alt1, title1, date1, href2, src2, alt2, title2, date2 }: MediumCardProps) {
  return (
    <div className="flex my-4 w-full flex-col space-y-5 md:space-x-6 md:flex-row md:space-y-0">
            <div className=" w-full md:w-1/2 ">
              <div className="grid grid-cols-3 ">
                <div>
                <Link href={href1}>
                <Image
                  src={src1}
                  alt={alt1}
                  layout="responsive"
                  width={120}
                  height={86}
                  />
                </Link>
                 </div>
              <div className="col-span-2 flex flex-col  ml-3">
                <Link href={href1}>
                    <h3 className="text-left text-sm  md:text-base text-black font-semibold hover:text-red-500">{title1}</h3>
                </Link>
                <Link href={href1}>
                  <h3 className="text-left font-medium text-10m uppercase mt-2 md:text-11m">
                  <i className="fa-regular fa-clock text-blue-700 "></i>
                  <span className="ml-2 text-gray-400">{date1}</span>
                  </h3>
                </Link>

              </div>
              </div>
             </div>
             <div className=" flex w-full md:w-1/2 ">
            <div className="grid grid-cols-3 ">
                <div>
                  <Link href={href2}>
                  <Image
                  src={src2}
                  alt={alt2}
                  layout="responsive"
                  width={120}
                  height={86}
                  />
                  </Link>
                </div>
              <div className="col-span-2 flex flex-col  ml-3">
                <Link href={href2}>
                    <h3 className="text-left text-sm  md:text-base text-black font-semibold  hover:text-red-500">{title2}</h3>
                </Link>
                <Link href={href2}>
                  <h3 className="text-left font-medium text-10m uppercase mt-2 md:text-11m">
                  <i className="fa-regular fa-clock text-blue-700 "></i>
                  <span className="ml-2 text-gray-400">{date2}</span>
                  </h3>
                </Link>
              </div>

              </div>
             </div>
          </div>
  )
}
