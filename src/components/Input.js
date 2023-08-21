

import React, { useState } from 'react'

function Input({setBgcol, setColors, colors}) {
    
    const [color,setColor]=useState("white")
    const flashBack= async ()=>{
        // setTimeout(()=>{
        //     setI(i+1)
        //     console.log(i)
        //     setBgcol(colors[i])
        // },1000)
        let id;
        let i=0;
        const api = async()=>{
            setBgcol(colors[i]);
            console.log(i)
            i++;
            if(i>= colors.length)clearInterval(id)
        }
        id = setInterval(api,1000);

    }
  return (
    <div className='bg-white w-fit py-2 border-2 border-black border-dotted m-auto'>
        <form>
        <input className='border border-black mx-2' placeholder='Enter color' onChange={(e)=>{
            setColor(e.target.value)
            
        }} value={color}/>
        <button className='bg-blue p-2' onClick={(e)=>{
            e.preventDefault();
            setBgcol(color)
            const temp = colors
            temp.push(color)
            setColors(temp)
            console.log(colors)
        }}>Color</button>
            <button className='bg-green p-2 mx-2' onClick={(e)=>{e.preventDefault();flashBack()}}>Recap</button>
        </form>
         
    </div>
  )
}

export default Input