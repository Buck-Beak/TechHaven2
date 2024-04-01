import { useState } from 'react';
import axios from 'axios';

const LightControl = () => {
    
    const [response, setResponse] = useState('');
    const [comPort, setComPort] = useState('');

    const sendCommand = (command) => {
        axios.post('http://localhost:5000/send-command', {command: command ,},)
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error('Error sending command:', error);
                setResponse('Error sending command ' + error);
            });
    };
    const connectArduino = () => {
        axios.post('http://localhost:5000/connect', { com_port: comPort })
            .then(response => {
                setResponse(response.data);
            })
            .catch(error => {
                console.error('Error connecting to Arduino:', error);
                setResponse('Error connecting to Arduino');
            });
    };

    return ( 
        <div className="light">
            <h2>Light Control</h2>
            <input type="text" placeholder="Enter COM port" value={comPort} onChange={(e) => setComPort(e.target.value)} />
            <button onClick={connectArduino}>Connect to Arduino</button>
            <button className="on" onClick={() => sendCommand('ON')}>ON</button>
            <button className="off" onClick={() => sendCommand('OFF')}>OFF</button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
     );
}
 
export default LightControl;
