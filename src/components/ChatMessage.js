import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img 
    className='h-8'
    alt="user"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"></img>
<span className='font-bold px-2'>{name}</span>
<span>{message}</span>
    </div>
  )
}

export default ChatMessage
