import React from 'react'



export const metadata = {
  title: "about tooxclusive | #1 Nigerian Music and Entertainment Website",
}



export default async function Songs({params}:{params: Promise<{songs : string}>;}) {
  const {songs} = await params; 
  console.log(songs)
  return (
    <div>
      <h1> welcome to the {songs} page</h1>
    </div>
  )
}
