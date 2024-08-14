from flask import Flask, render_template, redirect, url_for, request, make_response
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, verify_jwt_in_request

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

# Initialize the database
@app.before_first_request
def create_tables():
    db.create_all()

# Route for signup page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        
        return redirect(url_for('login'))
    return render_template('signup.html')

# Route for login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity=user.username)
            response = make_response(redirect(url_for('profile')))
            response.set_cookie('access_token_cookie', access_token)
            return response
        else:
            return 'Invalid credentials', 401
    return render_template('login.html')

# Route for profile page
@app.route('/profile')
@jwt_required(locations=["cookies"])
def profile():
    verify_jwt_in_request(locations=["cookies"])
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()
    return render_template('profile.html', username=user.username, email=user.email)

if __name__ == '__main__':
    app.run(debug=True)
