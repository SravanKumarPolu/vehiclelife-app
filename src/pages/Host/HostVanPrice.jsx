import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPrice(){
    const {currentVan} =useOutletContext();
    return(
        <section>
            <h3 className='host-van-detail-price'>Price:₹{currentVan.price}<span>/day</span></h3>
        </section>
    )
}