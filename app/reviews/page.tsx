"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

export default function Reviews() {
  const router = useRouter();
  const handleReviews = () => {
       router.push("/reviews/other-users")
  }
  const createNewReview = () => {
    router.push("/reviews/new")
  }
  return (
    <div className="flex p-5 gap-28" >
      <div className="text-center">
        <h1>Reviews by other users</h1>
        <button onClick={handleReviews}>Click Here</button>
      </div>
      <div className="text-center">
        <h1>Review a song</h1>
        <button onClick={createNewReview}>Click Here</button>
      </div>
    </div>
  )
}
