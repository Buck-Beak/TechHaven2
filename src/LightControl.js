import { useState } from 'react';
import axios from 'axios';

const LightControl = () => {
    
    const [response, setResponse] = useState('');
    const [comPort, setComPort] = useState('');

    const sendCommand = (command) => {
        axios.post('http://localhost:5000/sendcommand', {command: command ,})
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

    /*const sendCommand = (command) => {
        fetch('http://localhost:5000/sendcommand', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command: command })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setResponse(data);
        })
        .catch(error => {
            console.error('Error sending command:', error);
            setResponse('Error sending command ' + error);
        });
    };
    
    const connectArduino = () => {
        fetch('http://localhost:5000/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ com_port: comPort })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setResponse(data);
        })
        .catch(error => {
            console.error('Error connecting to Arduino:', error);
            setResponse('Error connecting to Arduino');
        });
    };*/
    

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
