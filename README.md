# Turnpoint Assessment

## Description

This project is a simple CRUD application for managing clients, with a Node.js and Express backend, a PostgreSQL database, and a React frontend.


### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/pohara9720/turnpoint-assessment.git
   cd turnpoint-assessment
   ```

2. Set up environment variables:

   ```sh
   cp .env.example .env
   ```

3. Use the `.env.example` file to create your own .env file with any values you want:

   ```env
   POSTGRES_USER=my_db_user
   POSTGRES_PASSWORD=my_db_password
   POSTGRES_DB=my_db_name
   ```

4. Start your docker container from root:

   ```sh
   docker-compose up -d
   ```

5. Install the deps in each directory:

   ```sh
   cd backend
   npm install
   ..
   cd frontend 
   npm install
   ```

6. Start the development server:

   ```sh
   cd backend
   npm run dev
   ```

7. Start the frontend application:

   ```sh
   ..
   cd frontend
   npm run dev
   ```

## Usage

The backend API will be running on `http://localhost:3000` and the frontend on `http://localhost:5173`.

## Notes

As asked I have added the Wizard functionality with a simple list as the landing page with an option to add a new client. 

I tried to keep styling basic as usually aesthetic designs are left up to the designer. 

