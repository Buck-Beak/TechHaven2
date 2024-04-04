import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Alarm = () => {

    const [response, setResponse] = useState('');
    const [comPort, setComPort] = useState('');
    const [buzzerState, setBuzzerState] = useState('off');

    const connectArduino = () => {
        axios.post('http://localhost:5000/connect', { com_port: comPort, })
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error('Error connecting to Arduino:', error);
                setResponse('Error connecting to Arduino');
            });
    };   

    const fetchBuzzerState = () => {
        axios.get('http://localhost:5000/buzzerState')
            .then(response => {
                setBuzzerState(response.data.buzzer_state);
            })
            .catch(error => {
                console.error('Error fetching buzzer state:', error);
            });
    };

    useEffect(() => {
        fetchBuzzerState();
    }, []);

    return ( 
        <div className="ultrasonic">
            <h2>Alarm</h2>
            <Link to="/LightControl">Light Control</Link>
            <Link to="/">Home</Link>
            <Link to="/FanControl">Fan Control</Link>
            <input type="text" placeholder="Enter COM port" value={comPort} onChange={(e) => setComPort(e.target.value)} />
            <button onClick={connectArduino}>Connect to Arduino</button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
            
        </div>
    );
};

export default Alarm;
