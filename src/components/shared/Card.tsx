import React from 'react'


type Props = {
    children: any
    margin_y?: number
}

function Card({children, margin_y}: Props) {
  return (
    <div className={`shadow-xl p-8 mx-4 rounded-md my-${margin_y} bg-tertiary_color`}>
        {children}
    </div>
  )
}

export default Card