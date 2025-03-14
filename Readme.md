# CRUD REST API with Node.js, Express.js, and MongoDB Atlas

This is a simple CRUD (Create, Read, Update, Delete) REST API built using **Node.js**, **Express.js**, and **MongoDB Atlas**. It provides basic functionality to manage resources in a database.

---

## Features

- **Create**: Add new resources to the database.
- **Read**: Retrieve a single resource or a list of all resources.
- **Update**: Modify an existing resource.
- **Delete**: Remove a resource from the database.
- **MongoDB Atlas**: Cloud-based database for storing data.
- **RESTful Design**: Follows REST principles for easy integration.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB Atlas**: Cloud-based NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Postman**: Tool for testing API endpoints.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) (for database connection)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/tridev002/crud-api.git
cd crud-api

```
### 2. Install Dependencies
Install the required npm packages:
```bash
npm install

```
### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```bash
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string

```
Replace `your_mongodb_atlas_connection_string` with your MongoDB Atlas connection URI.

### 4. Run the Application
Start the server:
``` bash 
npm start
```
The API will be running at `http://localhost:3000`.

