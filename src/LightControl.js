import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LightControl = () => {
    
    const [response, setResponse] = useState('');
    const [comPort, setComPort] = useState('');

    const sendCommandON = () => {
        console.log('helo');
        axios.post('http://localhost:5000/sendcommand', {cmd: "ON"},)
            .then(response => {
                setResponse(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error sending command:', error);
                setResponse('Error sending command ' + error);
            });
    };

    const sendCommandOFF = () => {
        
        axios.post('http://localhost:5000/sendcommandOFF', {cmd: "OFF"},)
            .then(response => {
                setResponse(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error sending command:', error);
                setResponse('Error sending command ' + error);
            });
    };

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

    return ( 
        <div className="light">
            <h2>Light Control</h2>
            <Link to="/FanControl">Fan Control</Link>
            <Link to="/">Home</Link>
            <input type="text" placeholder="Enter COM port" value={comPort} onChange={(e) => setComPort(e.target.value)} />
            <button onClick={connectArduino}>Connect to Arduino</button>
            <button className="on" onClick={() => sendCommandON()}>ON</button>
            <button className="off" onClick={() => sendCommandOFF()}>OFF</button>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
        </div>
     );
}
 
export default LightControl;
