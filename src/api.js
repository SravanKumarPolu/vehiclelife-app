
export async function getVans(){
    const res=await fetch("/api/vans")
    if(!res.ok){
        throw{
            message:"Failed to fetch data",
            statusText:res.statusText,
            status:res.status
        }
 
    }
   
    const data=await res.json()
    // .then(res=>res.json())
    // .then(data=>setVans(data))
    return data.vans;

} 