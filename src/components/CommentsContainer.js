import React from 'react'

const commentsData=[
    {
        name:"Vaibhav",
        text:"lorem ipsum",
        replies:[

        ]
    },
    {
        name:"Vaibhav",
        text:"lorem ipsum",
        replies:[
            {
                name:"Vaibhav",
                text:"lorem ipsum",
                replies:[
        
                ]
            },
            {
                name:"Vaibhav",
                text:"lorem ipsum",
                replies:[
        
                ]
            },
            {
                name:"Vaibhav",
                text:"lorem ipsum",
                replies:[
        
                ]
            },   
        ]
    },
    {
        name:"Vaibhav",
        text:"lorem ipsum",
        replies:[]
    },
    
];

const Comment=({data})=>{
const {name,text,replies}=data;
return <div className='flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg'>
<img
className='w-12 h-8'
alt="user"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"></img>
<div className='px-3'>
<p className='font-bold'>{name}</p>
<p>{text}</p>
</div>
</div>
}

const CommentList=({comments})=>{
return comments.map((comment,index)=>(
    <div key={index}>
         <Comment data={comment}/>;
         <div className='pl-5 border border-l-black ml-5'>
         <CommentList comments={comment.replies}/>
         </div>
         </div>
));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comment={commentsData}/>
    </div>
  )
}

export default CommentsContainer
