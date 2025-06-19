import React from 'react'

const ProfileBtn = ({url}) => {
  return (
    <button className='bg-[#F8FEE5] h-[40px] w-[40px] rounded-full'>
      <img src={url} alt="" className='h-[20px] w-[20px] m-auto'/>
    </button>
  )
}

export default ProfileBtn