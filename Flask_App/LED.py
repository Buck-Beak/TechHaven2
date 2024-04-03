from flask import Flask, render_template, request
import serial.tools.list_ports
import serial
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize serial connection
global serialInst
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

@app.route('/sendcommand', methods=['POST'])
def send_command():
    com_port = request.form.get('com_port')
    serialInst.baudrate = 9600
    serialInst.port = 'COM3'

    command = request.form.get('command')

    try:
        command= "ON"
        serialInst.write(command.encode('utf-8'))

        return "Connected to Arduino " + command
    except serial.SerialException as e:
        return f"Failed to open serial port: {e}"
    
    '''command = request.form.get('command')
    print("Received command:", command)
    
    if not serialInst.is_open:
        return "Serial connection not open"

    try:
        serialInst.write(command.encode('utf-8'))
        print(command)
        return "Command sent to Arduino"
    except serial.SerialException as e:
        return f"Failed to send command: {e}"'''

@app.route('/connect', methods=['POST'])
def connect():
    
    com_port = request.form.get('com_port')
    serialInst.baudrate = 9600
    serialInst.port = 'COM3'

    try:
        command = "ON"
        serialInst.open()
        

        return "Connected to Arduino"
    except serial.SerialException as e:
        return f"Failed to open serial port: {e}"




if __name__ == '__main__':
    app.run(debug=True)
