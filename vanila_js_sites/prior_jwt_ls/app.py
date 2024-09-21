from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
jwt = JWTManager(app)

# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

# Route for signup page
@app.route('/signup')
def signup_page():
    return render_template('signup.html')

# Route for signup API
@app.route('/api/signup', methods=['POST'])
def api_signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "User created successfully"}), 201

# Route for login page
@app.route('/login')
def login_page():
    return render_template('login.html')

# Route for login API
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.username)
        return jsonify(access_token=access_token)
    else:
        return jsonify({'msg': 'Invalid credentials'}), 401


# @jwt_required()
@app.route('/profile')
def profile_page():
    # Just return the profile page without passing data to it
    return render_template('profile.html')

@app.route('/logout')
def logout():
    response = redirect(url_for('login_page'))
    response.delete_cookie('access_token')
    return response




@app.route('/api/profile')
@jwt_required()
def api_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    
    user_data = {
        'username': user.username,
        'email': user.email
    }
    
    return jsonify(user_data)



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
