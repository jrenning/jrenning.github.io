import React from 'react'


type Props = {
    children: any
    margin_y?: number
}

function Card({children, margin_y}: Props) {
  return (
    <div className={`shadow-xl p-8 mx-4 rounded-md my-${margin_y} 
    bg-tertiary_color space-y-2`}>
        {children}
    </div>
  )
}

export default Card