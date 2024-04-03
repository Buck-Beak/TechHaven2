from flask import Flask, request, jsonify
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Route to handle a simple POST request
@app.route('/api/post', methods=['POST'])
def simple_post():
    if request.method == 'POST':
        data = request.json  # Assuming JSON data is sent in the request
        # Process the data...
        return jsonify({'message': 'Data received successfully'})

# Route to handle a POST request with URL parameters
@app.route('/api/wow', methods=['POST'])
def post_with_params(id):
    if request.method == 'POST':
        data = request.json  # Assuming JSON data is sent in the request
        # Process the data...
        return jsonify({'data': data})

if __name__ == '__main__':
    app.run(debug=True)
