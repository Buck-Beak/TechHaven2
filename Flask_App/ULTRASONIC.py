from flask import Flask, render_template,jsonify
import serial.tools.list_ports
import serial
from flask_cors import CORS
from flask import Response


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize serial connection
serialInst = serial.Serial()

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'  # Set to '*' to allow requests from any origin
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'  # Specify allowed headers
    response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'  # Specify allowed methods
    return response

# Register the CORS headers function to be called after each request
@app.after_request
def after_request(response):
    response = add_cors_headers(response)
    return response

@app.route('/')
def index():
    # Get available COM ports
    ports = serial.tools.list_ports.comports()
    portsList = [str(port) for port in ports]
    return render_template('index.html', ports=portsList)

@app.route('/connect', methods=['POST'])
def connect():
    serialInst.baudrate = 9600
    serialInst.port = 'COM3'

    try:
        serialInst.open()
        return "Connected to Arduino"
    except serial.SerialException as e:
        return f"Failed to open serial port: {e}"
    
@app.route('/buzzerState', methods=['POST'])


def get_buzzer_state():
    try:
        if serialInst.in_waiting:
            packet = serialInst.readline().strip()
            if packet == b'Buzzer ON':
                return jsonify({'buzzer_state': 'on'})
            elif packet == b'Buzzer OFF':
                return jsonify({'buzzer_state': 'off'})
            else:
                return jsonify({'error': 'Unknown response from Arduino'})
    except serial.SerialException as e:
        return f"Failed to get buzzer state: {e}"

'''    
@app.route('/buzzerON', methods=['POST'])
def buzzerON():


@app.route('/buzzerOFF', methods=['POST'])
def buzzerOFF():
'''  

if __name__ == '__main__':
    app.run(debug=True)
