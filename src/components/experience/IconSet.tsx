import Image from 'next/image';
import React from 'react'

type Props = {
    name: string
    link: string
}

function IconSet({name, link}: Props) {
  return (
    <div className="flex flex-col">
      {/* white text for linux being unseeable */}
      <Image src={link} width={40} height={40} alt="" />
      <h2 className='text-center dark:text-slate-50'>{name}</h2>
    </div>
  );
}

export default IconSet