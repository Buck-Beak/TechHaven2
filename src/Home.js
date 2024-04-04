import { Link } from 'react-router-dom';
const Home = () => {
  
    return (
      <div className="home">
        <h1>Tech Haven</h1>
        <div className="center">
            
            <button className="button1">
              <Link to="/FanControl">Fan Control</Link>
            </button>
            <button className="button2">
              <Link to="/LightControl">Light Control</Link>
            </button>
            <div className="alarm">
            <Link to="/Alarm">Alarm</Link>
            </div>
           
        
        </div>
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      </div>

        
    );
  }
   
  export default Home;