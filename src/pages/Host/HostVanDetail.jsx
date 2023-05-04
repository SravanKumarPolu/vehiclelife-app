 import React from 'react';
 import { useParams } from "react-router-dom";

export default function HostVanDetail(){
    const {id}=useParams()
    const [currentVan,setCurrentVan]=React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then(res=>res.json())
.then(data=>setCurrentVan(data.vans))
    },[])
  console.log(currentVan)
  if(!currentVan){
    return (
        <h1>Loading..</h1>
    )
  }
    return(
        <>
            <h1> Host van Detail page</h1>
        <div className='host-van-details-container'>
        <img src={currentVan.imageUrl} width={150} />
        <div className='host-van-details'>
       <p> <span>{currentVan.type}</span></p>
        <h2>{currentVan.name}</h2>
        <p>₹{currentVan.price}/day</p>
        </div>
        
        </div>
        </>
        
    )
} 
