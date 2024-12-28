from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db'
app.config['SECRET_KEY'] = 'mysecretkey'
db = SQLAlchemy(app)

# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)

# Dummy User Model (for demonstration)
class User:
    def __init__(self, uid, email):
        self.uid = uid
        self.email = email

    def to_dict(self):
        return {'uid': self.uid, 'email': self.email}

# Dummy logged-in user
current_user = User(uid="john_doe", email="john@example.com")

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Handle login logic here
        email = request.form['email']
        password = request.form['password']
        # For simplicity, we assume login is successful
        return redirect(url_for('profile'))
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        # In a real app, save user data here
        return redirect(url_for('login'))
    return render_template('signup.html')

@app.route('/profile')
def profile():
    return render_template('profile.html', user=current_user)

@app.route('/products')
def products():
    products_list = Product.query.all()
    return render_template('products.html', products=products_list)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('product_detail.html', product=product)

# API Routes for authentication and signup (simplified)
@app.route('/api/login', methods=['POST'])
def api_login():
    # Just a dummy check, not secure
    return jsonify({'token': 'dummy_token'})

@app.route('/api/signup', methods=['POST'])
def api_signup():
    # In real case, save user data here
    return jsonify({'message': 'Signup successful'})

if __name__ == '__main__':
    app.run(debug=True)
