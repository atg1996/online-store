#Online store backend

##Table of Contents

**Technologies**  
**Installation**   
**API Endpoints**

##Technologies
###List of technologies used in the project.

Node.js  
Express  
MongoDB  
JWT (JSON Web Tokens)

##Installation
###Instructions for installing and setting up the project.

Clone the repository  
Install dependencies using **npm install**  
Create a .env file and add your MongoDB connection string and JWT secret  
Start the server using **npm start**    


##API Endpoints
###List of API endpoints and their functionality.

###Items
**GET /api/v1/items** - Get all items  
**GET /api/v1/items/:id** - Get an item by ID  
**POST /api/v1/items** - Add a new item  
**PUT /api/v1/items/:id** - Update an item by ID  
**DELETE /api/v1/items/:id** - Delete an item by ID  
###Categories
**GET /api/v1/categories** - Get all categories  
**POST /api/v1/categories** - Add a new category  
**PUT /api/v1/categories/:id** - Update a category by ID  
**DELETE /api/v1/categories/:id** - Delete a category by ID  
###Authentication
**POST /api/v1/register** - Register a new user  
**POST /api/v1/login** - Log in a user
