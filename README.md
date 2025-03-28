# User Management App

This is a simple **User Management App** built using **React, Redux, and Bootstrap** with data fetched from [Reqres API](https://reqres.in/). It allows users to **view, edit, and delete** user data.

## Features

- User Login with Token Storage (Mock API)
- Fetch Users with Pagination
- Edit User Details
- Delete Users
- Responsive UI with Bootstrap

## 🛠 Tech Stack

- **Frontend**: React, Redux, React Router, Bootstrap
- **Backend API**: Reqres API (Mock Data)
- **State Management**: Redux Toolkit
- **Routing**: React Router

## Installation & Setup

1. **Clone the repository**

   git clone https://github.com/mohitsharma1507/User-Management.git

2. **Install dependencies**

   npm install

3. **Start the development server**

   npm run dev

   The app will be running at **http://localhost:5173**

## 🔑 Authentication

- The app uses Reqres API for **mock authentication**.
- Use the following credentials to log in:
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```

## 🔄 API Endpoints

- **Login**: `POST https://reqres.in/api/login`
- **Fetch Users**: `GET https://reqres.in/api/users?page=1`
- **Edit User**: `PUT https://reqres.in/api/users/{id}`
- **Delete User**: `DELETE https://reqres.in/api/users/{id}`

## 🛠 Redux Flow

1. **Login** → Token stored in localStorage
2. **Fetch Users** → Stores users in Redux state
3. **Edit User** → Updates Redux state (UI updates automatically)
4. **Delete User** → Removes user from Redux state
