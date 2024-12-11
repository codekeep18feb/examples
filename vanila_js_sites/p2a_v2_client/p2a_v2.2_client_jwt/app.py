import requests
import json

from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from sqlalchemy import and_

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
    uid = db.Column(db.String(150), unique=True, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)


from datetime import datetime, timedelta



# Book Model
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    author = db.Column(db.String(150), nullable=False)
    available = db.Column(db.Boolean, default=True)
    cover_image = db.Column(db.String(255), nullable=True)  # Add this line
    # Remove the rentals relationship backref here


class Rental(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    # Define the backref here
    book = db.relationship('Book', backref='rentals')



# Route for signup page
@app.route('/signup')
def signup_page():
    return render_template('signup.html')


# Route for home page
@app.route('/')
def home_page():
    return render_template('home.html')




# Route to list available books
@app.route('/books')
def list_books():
    books = Book.query.filter_by(available=True).all()
    return render_template('books.html', books=books)

# Route to book a book

@app.route('/book/<int:book_id>', methods=['POST'])
@jwt_required()
def book_book(book_id):
    current_user = get_jwt_identity()
    user = User.query.filter_by(uid=current_user).first()
    book = Book.query.get_or_404(book_id)

    if not book.available:
        return jsonify({'msg': 'Book is not available'}), 400

    data = request.get_json()
    days = data.get('days')
    end_date = datetime.utcnow() + timedelta(days=days)
    
    rental = Rental(user_id=user.id, book_id=book.id, start_date=datetime.utcnow(), end_date=end_date)
    book.available = False
    db.session.add(rental)
    db.session.commit()

    return jsonify({'msg': 'Book booked successfully', 'end_date': end_date})

@app.route('/book/<int:book_id>/availability')
def book_availability(book_id):
    book = Book.query.get_or_404(book_id)
    # Use SQLAlchemy's filter for "greater than" instead of Django-style __gt
    rental = Rental.query.filter(
        and_(Rental.book_id == book.id, Rental.end_date > datetime.utcnow())
    ).order_by(Rental.end_date).first()
    next_available_date = rental.end_date if rental else None
    return render_template('book_availability.html', book=book, next_available_date=next_available_date)


# Route for contact page
@app.route('/contact')
def contact_page():
    return render_template('contact.html')



# Route for signup API
@app.route('/api/signup', methods=['POST'])
def api_signup():
    data = request.get_json()
    uid = data.get('uid')
    email = data.get('email')
    password = data.get('password')
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(uid=uid, email=email, password=hashed_password)
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
    uid = data.get('uid')
    password = data.get('password')

    user = User.query.filter_by(uid=uid).first()
    if user and bcrypt.check_password_hash(user.password, password):
        tezkit_token = create_access_token(identity=user.uid)
        # credentials = {"APP_API_KEY":"amV3ZWxlcnlraW5nX19TRVBSQVRPUl9fdjIuMl9maXJzdF9hcHA=",
        #            "app_name": "v2.2_first_app","tenant": "jeweleryking"}#This all should go in Credentials setup probably!
    

        return jsonify(tezkit_token=tezkit_token)
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
    response.delete_cookie('tezkit_token')
    return response




@app.route('/api/profile')
@jwt_required()
def api_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(uid=current_user).first()
    
    user_data = {
        'uid': user.uid,
        'email': user.email,
        # 'id': user.uid
    }
    
    return jsonify(user_data)



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
