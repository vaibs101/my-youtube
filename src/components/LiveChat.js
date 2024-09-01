import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRndomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const dispatch=useDispatch();
  const chatMessages=useSelector(store=>store.chat.message);
  const [liveMessage, setLiveMessage]=useState();

  useEffect(()=>{
const i=setInterval(()=>{
//API Poling
  console.log("API Poling")
  dispatch(addMessage({
    name:generateRndomName(),
    message:makeRandomMessage(20),
  }));
},500);

    return ()=>clearInterval(i);
  },[]);

  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
      <div>
      {chatMessages.map((c,index)=>(
        <ChatMessage key={index} name={c.name} message={c.message}/>
      ))
}
</div>
    </div>
    <form className='w-full p2 mt-2 border border-black' onSubmit={(e)=>{
e.preventDefault();
dispatch(addMessage({
  name:"Vaibhav",
  message:liveMessage,
}))
setLiveMessage("");
    }}>

     <input type='text'
     className='px-2 w-96'
     value={liveMessage}
     onChange={(e)=>{
      setLiveMessage(e.target.value)
     }}></input>
     <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
  </>)
}

export default LiveChat;
