import React from 'react'

const ReasonToBuy = ({no, title, text}) => {
  return (
    <div className='flex gap-7.5'>
      <div className='text-4xl tracking-tight leading-[1.5em]'>{no}</div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-4xl tracking-tight leading-[1.5em]'>{title}</h3>
        <p className='text-[0.8em]'>{text}</p>
      </div>
    </div>
  )
}

export default ReasonToBuy