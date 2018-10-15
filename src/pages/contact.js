import React from 'react';
import {Link} from 'gatsby';
import Header from '../components/header';

const header = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link>
            <Header headerText='Contact' />
            <p>Send us a message</p>
        </div>
    )
}

export default header;