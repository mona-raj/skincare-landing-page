import React from 'react'

const Faq = ({q, a}) => {
  return (
    <div>
      <h3>{q}</h3>
      <p>{a}</p>
    </div>
  )
}

export default Faq