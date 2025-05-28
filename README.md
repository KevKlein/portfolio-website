# Developer Portfolio SPA

This is a full-stack MERN (MongoDB, Express, React, Node.js) single-page application built to showcase my skills in web development through a portfolio of interactive features and projects.
## ✨ Features

    Single Page Application (SPA) using Vite + React for fast development and navigation
    Global navigation bar and consistent styling across all pages
    Pages include:
        Home: Overview of technologies used in this portfolio
        Topics: Highlights of concepts and tools I've learned
        Gallery: A responsive image gallery with themed visuals
        Order Page: An interactive form with dynamic subtotal and grand total calculation
        Scooter Shenanigans CRUD: Connected to a custom MongoDB collection, 
            allowing Create, Read, Update, and Delete operations through a React UI

## 🛠 Technologies

    Frontend: React, Vite, HTML, CSS (with custom theming and flex/grid layouts)
    Backend: Node.js, Express
    Database: MongoDB, Mongoose
    Version Control: Git & GitHub

## 📦 Project Structure

    portfolio/
    ├── backend-shenanigans/       # Express backend with MongoDB integration
    │   ├── models/
    │   ├── controllers/
    │   └── .env              # MongoDB connection string and PORT
    └── frontend/
        ├── public/           # Favicons
        ├── src/
        │   ├── assets/       # Images for site background and Gallery page
        │   ├── data/         # Products table definitions for Order page
        │   └── modules/      # Pages and reusable UI components
        └── index.html        # Includes custom favicons and meta tags


## To run the app locally:

Clone the repository

Install dependencies for both frontend/ and backend-movies/

Create a .env file in backend-shenanigans/ with your MongoDB Atlas connection string

Run backend:
```
cd backend-shenanigans
npm install
npm start
```
Run frontend:
```
cd frontend
npm install
npm run dev
```
