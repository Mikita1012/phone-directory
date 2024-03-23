import React, { Component, useEffect, useState } from 'react';
import './Header.css'
import { useLocationDetail } from './customizedHook';




const Header = function (props) {

    const locationDetail = useLocationDetail();
    const { city, region, country_name } = locationDetail;

    return (
        <>
            <div className='header'>
                {props.heading}
            </div>
            <h4 style={{textAlign: 'center'}}> Welcome user. You location is - {city} from {region} in {country_name}</h4>
        </>
    );
}

// class Header extends Component {
//     render() {
//         return (
//             <>
//                 <div className='header'>
//                     Phone Directory
//                 </div>
//             </>
//         );
//     }
// }

export default Header;