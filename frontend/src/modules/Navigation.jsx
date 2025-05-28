import { Link } from 'react-router-dom';

function Navigation() {
    return (
       <>
           <nav className='pages-nav'> 
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/shenanigansPage">Scooter Shenanigans</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/order">Order</Link>
            </nav>
       </>
    );
}
export default Navigation;