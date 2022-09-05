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
    <div className="shadow-xl p-8 mx-4 rounded-md bg-tertiary_color">
      <h1 className="text-center font-bold text-2xl mb-8">{title}</h1>

      {image && <Image src={image} layout="responsive" width={600} height={600} />}
      <p>{description}</p>

      {/* Extra stuff  */}
      {children}
      <Link href={link ? link : ""}>
        <div className="flex justify-center items-center mt-12">
          <button className="button-standard-primary">
            See the Code
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard