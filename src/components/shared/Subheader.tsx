import React from 'react'

type Props = {
    name: string
}

function Subheader({name}: Props) {
  return (
    <div>
        <h2 className='flex justify-center my-4 text-2xl text-secondary_color '>{name}</h2>
    </div>
  )
}

export default Subheader