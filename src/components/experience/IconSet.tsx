import Image from 'next/image';
import React from 'react'

type Props = {
    name: string
    link: string
}

function IconSet({name, link}: Props) {
  return (
    <div className="flex flex-col">
      <Image src={link} width={40} height={40} alt="" />
      <h2 className='text-center'>{name}</h2>
    </div>
  );
}

export default IconSet