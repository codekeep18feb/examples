import requests
import random


from app import db, Book

# Fetch todo items from JSONPlaceholder
response = requests.get('https://jsonplaceholder.typicode.com/todos')
todos = response.json()

# Cover images URLs
cover_images = [
    'https://images.pexels.com/photos/5642102/pexels-photo-5642102.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3817675/pexels-photo-3817675.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5641821/pexels-photo-5641821.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/28471038/pexels-photo-28471038/free-photo-of-majestic-snow-capped-mountain-with-glacial-waterfall.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5458351/pexels-photo-5458351.jpeg?auto=compress&cs=tinysrgb&w=600'
]

def add_books():
    # Clear existing books
    Book.query.delete()
    
    for todo in todos:
        # Randomly choose a cover image
        cover_image = random.choice(cover_images)
        
        # Create a new book
        book = Book(
            title=todo['title'],
            author='Unknown',  # You can modify this as needed
            available=True,
            cover_image=cover_image
        )
        
        # Add and commit to the database
        db.session.add(book)
    
    db.session.commit()

if __name__ == '__main__':
    add_books()
    print("Books added successfully.")
