import React, { Component } from 'react';

const Header = function () {
    const headerStyle = {
        textAlign: 'center',
        textTransform: 'uppercase',
        background: '#000',
        color: 'white',
        padding: 20
    }
    return (
        <>
            <div style={headerStyle}>
                Phone Directory
            </div>
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