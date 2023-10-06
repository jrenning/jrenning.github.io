import React from 'react'

type Props = {
    name: string
    Icon: any
}

function SoftIcon({name, Icon}: Props) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-[40px] h-[40px]">
        
      </Icon>
      <h2 className="text-center dark:text-slate-50">{name}</h2>
    </div>
  );
}

export default SoftIcon