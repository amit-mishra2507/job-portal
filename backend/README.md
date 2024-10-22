# **JobZee - Job Portal Backend**

This is the backend for the **JobZee Job Portal** web application. The backend is responsible for handling user authentication, job postings, job applications, and database management. It is built using **Node.js** and **Express.js**, with **MongoDB** as the database.

---

## **Overview**

The backend of JobZee manages the following functionalities:

- **User Authentication and Authorization**: Handles secure login and registration of job seekers and recruiters using JWT (JSON Web Tokens).
- **Job Postings**: Allows recruiters to create, update, and delete job listings.
- **Job Applications**: Enables job seekers to apply for jobs, and recruiters to track applicants.
- **Database Management**: Uses MongoDB for storing user data, job listings, and applications.

---

## **Key Features**

- **Secure User Authentication**: Protects user data with JWT tokens and password hashing (bcrypt.js).
- **Role-based Access Control**: Different functionalities for job seekers and recruiters (e.g., posting jobs vs. applying for jobs).
- **RESTful API Endpoints**: Provides API routes for managing users, jobs, and applications.
- **Error Handling**: Includes robust error handling for smooth API operation.
- **Database Integration**: Seamlessly integrates with MongoDB using Mongoose for schema-based data validation.

---

## **Tech Stack**

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for managing user, job, and application data.
- **Mongoose**: ODM for MongoDB, enabling schema-based modeling.
- **JWT (JSON Web Token)**: For secure authentication and session management.
- **bcrypt.js**: For hashing and securing user passwords.
- **Cloudinary**: For image hosting (optional).

---

## **API Endpoints**

The backend provides several RESTful API endpoints:

### **User Routes**
- `POST /register` - Register a new user (job seeker or recruiter).
- `POST /login` - Log in an existing user and issue a JWT token.
- `GET /logout` - Log out the current user.
- `GET /getuser` - Retrieve current user details (protected route).

### **Job Routes**
- `POST /jobs` - Post a new job (Recruiters only).
- `GET /jobs` - Retrieve all available jobs.
- `GET /jobs/:id` - Get detailed information for a specific job.

### **Application Routes**
- `POST /apply` - Apply for a job (Job seekers only).
- `GET /my-applications` - View a list of jobs applied to by the current user.
- `GET /my-jobs` - View all jobs posted by the current recruiter.

---
