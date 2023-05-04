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
        <div>
        <img src={currentVan.imageUrl} width={150} />
        <h2>{currentVan.name}</h2>
        <p>{currentVan.price}</p>
        <p>{currentVan.type}</p>
        </div>
        </>
        
    )
} 
