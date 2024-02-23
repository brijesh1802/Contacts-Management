# Contact Management API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

The Contact Management API allows users to register, log in, and perform CRUD operations on their contacts. Users can add, update, and delete contacts after logging in.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User registration and login
- Secure authentication using JWT
- Password hashing using Bcrypt
- Add, update, and delete contacts for authenticated users
- RESTful API design for ease of use

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your database of choice)
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brijesh1802/Contacts-Management.git

2. Navigate to the project directory:
   ```bash
   cd contact-management-api

3. Install dependencies:
   ```bash
   npm install

4. Set up your environment variables (e.g., database connection, JWT secret) by creating a .env file based on the provided .env.example.

5. Start the server:
   ```bash
   npm run dev

## Usage

1. Register a new user.
2. Log in with your credentials.
3. Use the provided API endpoints to manage your contacts.

## API Endpoints

* POST /api/register: Register a new user.
* POST /api/login: Log in and receive a JWT token.
* GET /api/contacts: Get all contacts for the authenticated user.
* ST /api/contacts: Add a new contact.
* GET /api/contacts/:id: Get details of a specific contact.
* PUT /api/contacts/:id: Update a specific contact.
* DELETE /api/contacts/:id: Delete a specific contact.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make changes and commit (git commit -am 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a pull request.

## License

This project is licensed under the MIT License.

# Contact

* Name : Brijesh Jaya Poojary.
* Email : brijeshpujari333@gmail.com.
