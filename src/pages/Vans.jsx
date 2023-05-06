import React from "react";

import {Link ,useSearchParams}  from 'react-router-dom'


export default function Vans(){
    const [searchParams,setSearchParams]=useSearchParams();
    const [vans,setVans]=React.useState([])
    const typeFilter=searchParams.get("type")
    console.log(typeFilter); 
console.log(searchParams.toString());
    React.useEffect(() => {
       fetch("/api/vans")
   .then(res=>res.json() )
   .then(data=>setVans(data.vans))
    }, [])
    console.log(vans)
    
    const displayedVans=typeFilter
    ?vans.filter(van=>van.type===typeFilter)
    :vans
    const vanElements=displayedVans.map(van=>(
        
     <div key={van.id} className="van-title" >
     <Link to={van.id} state={{search: `?${searchParams.toString()}`,type:typeFilter}} > 
     <img src={van.imageUrl} alt="" />
     <div className="van-info"  >
        <h3 >{van.name}</h3>
        <p>₹{van.price} <span>/day</span></p>
     </div>
        <p  className={`van-type${van.type} selected`} >{van.type}</p> 
        </Link>
     </div> 

    ))
    function handleFilterChange(key,value){
        setSearchParams(prevParams=>{
            if(value==null){
                prevParams.delete(key)
            }
            else{
                prevParams.set(key,value)
            }
            return prevParams
        })
       }
 

    return(
        <div className="van-list-container">
        <h1>Explore our van Options</h1>
        <div className="van-list-filter-buttons">
            <nav>
            {/* First way  of filter VAns
                <Link to="?type=comfortable" className="van-type-comfort">Comfort</Link>
                <Link to="?type=luxury" className="van-type-luxury">Luxury</Link>
                <Link to="?type=rugged" className="van-type-rugged">Rugged</Link>
                <Link to="?type=simple" className="van-type-simple">Simple</Link> */}

                {/* 2nd way of filter vans of #VanLife */}
              
                <button onClick={()=>setSearchParams({type:"comfortable"})}
                className={`van-type comfort  ${typeFilter==="comfortable"?"selected":""}`}
                >Comfort</button>
       
                
                <button onClick={()=>setSearchParams({type:"luxury"})}
                 className={`van-type luxury  ${typeFilter==="luxury"?"selected":""}`}
                >Luxury</button>
                <button onClick={()=>setSearchParams({type:"rugged"})}
                 className={`van-type rugged  ${typeFilter==="rugged"?"selected":""}`}
                >Rugged</button>
                <button onClick={()=>setSearchParams({type:"simple"})}
                className={`van-type simple  ${typeFilter==="simple"?"selected":""}`} >Simple</button>
                {/* <button onClick={()=>handleFilterChange("type","comfortable")}>Comfort</button>
                <button onClick={()=>handleFilterChange({"type","luxury"})}>Luxury</button>
                <button onClick={()=>handleFilterChange({"type","rugged"})}>Rugged</button>
                <button onClick={()=>handleFilterChange({"type","simple"})}>Simple</button> */}
            </nav>
             {/* 1 St way of filter vans of #VanLife 
            <Link to="."className="van-type-clear-filter">Clear</Link>
     */}
     
{ typeFilter ? (<button onClick={()=>handleFilterChange("type",null)}>clear</button>):null}

        </div>
        <div className=" van-list " >
        {vanElements}
        </div>
        </div>
        
        
    )
} 