import React from 'react';
import Header from '../components/header';
import {Link} from 'gatsby';

const about = ()=>{
    return(
        <div >
        <Link to='/'>Home</Link>
            <Header headerText='About Gatsby'  />
            <Header headerText='It is so cool.' />
            <p>SooperDooper!!</p>
        </div>
    )
}

export default about;