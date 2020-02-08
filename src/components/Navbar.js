import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper  teal lighten-2">
                <div className="container">
                    <Link to="/" className="brand-logo">PetAPP</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">child_care</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;