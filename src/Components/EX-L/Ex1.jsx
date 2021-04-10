import React, {useState,useEffect} from 'react';

export default function Ex1({btnname,inValue,incValue}) {
    let count=0;
    const [cnt,setcnt]=useState(inValue?inValue:0);


    const inc=()=>{
        count++;
        setcnt(cnt+1)
        console.log(count);
        console.log(setcnt);
    }

    return (
        <div>
            <div> {count}</div>
            <button onClick={()=>setcnt(cnt+(incValue?incValue:1))}>{btnname?btnname :"submit"}</button>
            <div> {cnt}</div>
        </div>
    )
}
