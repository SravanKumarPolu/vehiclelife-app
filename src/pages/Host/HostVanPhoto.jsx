import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhoto(){
    const {currentVan }=useOutletContext();
    return(
        <section>
           
            <img src={currentVan.imageUrl} className='host-van-detail-image' width={150} />
        </section>
    )
}