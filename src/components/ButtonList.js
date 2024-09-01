import React from 'react'
import Button from './Button'

const list=["All","Web Development","Gaming","Music","Remix","Jukebox","Stock Markets","Lo-fi","Weight Training","Motivation","Comedy"]
const ButtonList = () => {
  return (
    <div className='flex'>
        {list.map((listItem)=><Button name={listItem}/>)}
    </div>
  )
}

export default ButtonList
