import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function HostVanInfo(){
    const { currentVan }= useOutletContext();
    return(
        <section className='host-van-detail-info'>
            <h4><span>Name:</span> {currentVan.name}</h4>
            <h4><span>Category: </span>{currentVan.type}</h4>
        <h4><span>Description:</span> {currentVan.description }</h4>
        <h3>Visibility: public</h3>
        </section>
    )
}