import React from 'react'
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {params:Promise<{AuthorName:string}>;}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { AuthorName } = await params;
  return {
    title: `Publication made by Author ${AuthorName}`,
     };
};

export default async function AuthorName({ params }: Props ) {
  
  const { AuthorName } = await params;

  const authors: { [key: string]: string } = {
    ade: "Author Ade",
    bola: "Author Bola",
    tunde: "Author Tunde"
  };

  if (AuthorName in authors) {
  return (
    <div>
      <h2 className= 'bg-orange-600 p-5 text-center text-xl font-semibold uppercase'>Welcome to publications made by {AuthorName}</h2>  
    </div>
  )
}
else{
  return notFound()
}
}
