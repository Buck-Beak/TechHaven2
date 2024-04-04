import { Link } from 'react-router-dom';
const FanControl = () => {
    return (
        <div className="fan">
            <h2>Fan Control</h2>
            <Link to="/LightControl">Light Control</Link>
            <Link to="/">Home</Link>
            <ul className="circles1">
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

export default FanControl;