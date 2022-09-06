import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    children?: any
    title: string
    link: string
    image?: string
    description: string
}

function ProjectCard({children, title, image, link, description}: Props) {
  return (
    <div className="p-8 mx-4 rounded-md shadow-xl bg-tertiary_color">
      <h1 className="mb-8 text-2xl font-bold text-center">{title}</h1>

      {image && <Image src={image} layout="responsive" width={600} height={600} />}
      <p className='indent-10'>{description}</p>

      {/* Extra stuff  */}
      {children}
      <a href={link ? link : ""} target="_blank">
        <div className="flex items-center justify-center mt-12">
          <button className="button-standard-primary">
            See the Code
          </button>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard