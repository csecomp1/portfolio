import React, { useEffect, useState } from 'react'

const Technologies = () => {
    const ob={title:"Programming languages known",items:["C++","Java","Javascript","HTML"]};
    const th={title:"Technologies known",items:["React Js","Node Js","Mongo DB","MySQL"]};
    const cw={title:"Coursework" , items:["Data Structures","OOPS","Computer Networks","DBMS"]};
    const [l,setl]=useState({title:"Programming languages known",items:["C++","Java","Javascript","HTML"]});
    /*useEffect(()=>{
       setl(ob);
    },[])*/

  return (
    <div className="tec">
    <div className="tec1">
      <img src="code.png"  onClick={()=>{setl(ob)}}/>
      <img src="front-end.png" onClick={()=>{setl(th)}}/>
      <img src="scholarship.png" onClick={()=>{setl(cw)}}/>
    </div>
    <div className='tec2'>
        <h1>{l.title}</h1>
     { 
        
        l.items.map((it)=>{
            return <><p>{it}</p></>
        })
       
     }
     </div>
  </div>
  
  )
}

export default Technologies