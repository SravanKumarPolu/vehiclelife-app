import React from "react";
 import {  getVans }  from "../../api";
import {Link ,useSearchParams,useLoaderData}  from 'react-router-dom'


export function Loader(){
   return getVans();
}
export default function Vans(){
     const [searchParams,setSearchParams]=useSearchParams();
    //const [vans,setVans]=React.useState([])
      // const [loading,setLoading]=React.useState(false)
      const [error,setError]=React.useState(null)
      const vans=useLoaderData();
      const typeFilter=searchParams.get("type")
console.log(vans)
 
 

//     React.useEffect(() => {
//       async function loadVans(){
//         setLoading(true)
//         try{
//           const data= await getVans()
//         setVans(data)
//         }catch(err){
//           console.log("there is error")
//           console.log(err)
//           setError(err)
//         }finally{
//           setLoading(false)
//         }
//       }
// loadVans()
//     }, [])
    

 
  
    // console.log(vans)
    
   
    const displayedVans = typeFilter
     ? vans.filter((van) => van.type === typeFilter) 
     : vans;

    const vanElements = displayedVans.map((van) => (
      <div key={van.id} className="van-title">
        <Link to={van.id} 
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
            <img src={van.imageUrl} alt="" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>₹{van.price} <span>/day</span></p>
          </div>
          <p className={`van-type${van.type} selected`}>{van.type}</p>
    
        </Link>
        </div>
      
    )); 
    function handleFilterChange(key,value){
        setSearchParams(prevParams=>{ 
            if(value=== null){
                prevParams.delete(key)
            }
            else{
                prevParams.set(key,value)
            }
            return prevParams
        })
       }



//     if(loading) {
//       return <h1>Loading...</h1>
// }
if(error){
  return <h1>There was an error:{error.message}</h1>
}

    return(
        <div className="van-list-container">
        <h1>Explore our van Options</h1>
        <div className="van-list-filter-buttons">
          <button className={`van-type simple ${typeFilter==="simple"?"selected":""}`}
           onClick={()=>setSearchParams("?type=simple")}>simple</button>
          <button className={`van-type rugged  ${typeFilter==="rugged"?"selected":""}`} 
          onClick={()=>setSearchParams("?type=rugged")}>rugged</button>
          <button className={`van-type luxury  ${typeFilter==="luxury"?"selected":""}`}
            onClick={()=>setSearchParams("?type=luxury")}>luxury</button>
          {
            typeFilter ? (<button className="van-type-clear-filter" onClick={()=>setSearchParams("")}>clear</button>):null
          }
          
        </div>
    
        <div className=" van-list " >
        {vanElements}
        </div>
        </div>

    )
} 