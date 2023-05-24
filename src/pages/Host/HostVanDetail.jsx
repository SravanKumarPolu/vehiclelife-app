 import React from 'react';
 import { Link, Outlet,NavLink, useParams,useLoaderData } from "react-router-dom";
import { getHostVans  } from '../../api';


export function loader({params}){
    return getHostVans(params.id)
}
export default function HostVanDetail(){
    
    const {id}=useParams()
     const [currentVan,setCurrentVan]=React.useState(null)
    // const currentVan=useLoaderData();
     const activeStyles={
        fontWeight: 'bold',
        textDecoration: 'none',
         color: '#161616' 
     }
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
        <section className='host-van-details-section'>
        <Link to=".." relative='path' className="back-button" >&larr; <span>Back to all vans </span></Link>
            <h1 className='host-van-details-page'> Host van Detail page</h1>
        <div className='host-van-details-container'>
        <div className='host-van-details-block'>
        <img src={currentVan.imageUrl} width={150} />
        <div className='host-van-details'>
       <p> <span>{currentVan.type}</span></p>
        <h2>{currentVan.name}</h2>
        <p>₹{currentVan.price}/day</p>
        </div>
        </div>
        <nav className='host-van-detail-nav'>
<NavLink to="." end 
style={({isActive})=>isActive ? activeStyles : null }
>Infor </NavLink>
<NavLink to="price"
style={({isActive})=>isActive ? activeStyles : null }
>Price </NavLink>
<NavLink to="photo"
style={({isActive})=>isActive ? activeStyles : null }
>Photo </NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
        </div>
        </section>
    
        </>
         
    )
} 
