# Recipe Book Website

## Project Overview
Recipe Book Website is a user-friendly platform where users can add new recipes, browse through others’ recipes, and like their favorites. The app encourages sharing culinary creativity and discovering new dishes from the community.

## Live Project Link
[View Live Project](https://recipe-book-web-9f064.web.app/)

## Technologies Used
- React.js  
- Node.js  
- Express.js  
- MongoDB  
- Tailwind CSS  
- Firebase Authentication (optional)

## Core Features
- User registration and login  
- Add new recipes with title, ingredients, and instructions  
- Browse and search recipes by category or keyword  
- Like and unlike recipes  
- Responsive design for mobile and desktop devices  

## Dependencies
- React   
- Express   
- MongoDB Driver  
- Axios  
- React Router DOM  
- Tailwind CSS  
- Firebase SDK (if used for auth)

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/recipe-book-website.git
    cd recipe-book-website
    ```

2. **Install dependencies for client and server:**
    ```bash
    cd client
    npm install

    cd ../server
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `/server` directory and add:
    ```
    MONGO_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_api_key  # if using Firebase
    ```

4. **Run the backend server:**
    ```bash
    cd server
    npm start
    ```

5. **Run the frontend client:**
    ```bash
    cd ../client
    npm start
    ```

6. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

## Additional Resources
- [React Documentation](https://reactjs.org/docs/getting-started.html)  
- [MongoDB Documentation](https://docs.mongodb.com/)  
- [Firebase Documentation](https://firebase.google.com/docs)  

---

*Created with ❤️ by [Your Name](https://github.com/your-username)*  
