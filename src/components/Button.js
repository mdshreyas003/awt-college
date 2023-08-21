import React from 'react'

function Button({flag, setFlag}) {
  
  return (
    <div>
        <button onClick={()=>setFlag(!flag)}>Press</button>
    </div>
  )
}

export default Button