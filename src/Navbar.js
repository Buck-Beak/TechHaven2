import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
        
        {/*<div className="links">
          <Link to="/">Home</Link>
          <Link to="/FanControl">Fan Control</Link>
        </div>*/}
        <Link to="/Alarm">Alarm</Link>
      </nav>
    );
  }
   
  export default Navbar;