# Food Donation App

## Overview

This project is a full-stack food donation application where users can donate and request surplus food. It features user authentication, food management, and a detailed view of available foods. The project leverages React, Node.js, Express, MongoDB, and Tailwind CSS.

---

## Features

### 1. Navbar

- **Links:**
  - Home
  - Available Foods
  - Add Food (Private)
  - Manage My Foods (Private)
  - My Food Request (Private)
  - Login / Signup
- **Conditional Rendering:**
  - If not logged in: Show Login and Signup buttons.
  - If logged in: Show Profile Picture and Logout button.

---

### 2. Authentication System

- **Login Page:**
  - Email and Password-based authentication.
  - Google or GitHub login.
  - Redirect to Register Page.
  - Show error (toast/sweet alert) if credentials don't match.
- **Register Page:**
  - Fields: Name, Email, photoURL, Password.
  - Password Requirements:
    - At least one uppercase letter.
    - At least one lowercase letter.
    - Minimum 6 characters.
  - Redirect to Login Page.
  - Show toast/sweet alert on successful registration.

---

### 3. Home Page

- **Banner/Slider:**
  - Eye-catching and responsive.
- **Featured Foods Section:**
  - Displays 6 featured food items.
  - "Show All" button redirects to Available Foods Page.
- **Extra Sections:**
  - Two additional sections to enhance user experience.
  - Attractive and relevant to food donation.

---

### 4. Add Food (Private)

- **Form Fields:**
  - Food Name
  - Food Image
  - Food Quantity
  - Pickup Location
  - Expiry Date/Time
  - Additional Notes
  - Donator Image, Name, Email (Auto-filled from logged-in user)
  - Food Status (Default: "Available")
- **Action:**
  - Clicking "Add" saves food to the database.
  - Display added food in the Available Foods Page.

---

### 5. Available Foods Page

- **Sorting:**
  - Sort foods by expiry date.
- **Display:**
  - All available foods shown in card format.
  - View Details button navigates to the food details page.
  - If not logged in, redirect to Login Page when trying to view details.

---

### 6. Food Details Page

- **Details:**
  - Show full food information.
  - Request Button opens a modal with the following fields (some non-editable):
    - Food Name
    - Food Image
    - Food ID
    - Donator Email
    - Donator Name
    - User Email (Logged-in user)
    - Request Date (Auto-filled current date/time)
    - Pickup Location
    - Expiry Date
    - Additional Notes (Editable)
- **Action:**
  - Requesting food changes its status to "Requested" and removes it from available foods.

---

### 7. Manage My Foods (Private)

- **Display:**
  - Shows all foods added by the logged-in user.
  - Display in tabular format.
- **Actions:**
  - Update Button: Opens a modal/form to update food details.
  - Delete Button: Asks for confirmation before deleting food.

---

### 8. My Food Request (Private)

- **Display:**
  - Shows all food requests made by the logged-in user.
  - Displays data in tabular format.

---

### 9. Layout Toggle

- Toggle between three-column and two-column layouts on the Available Foods Page.

---

### 10. API and State Management

- **TanStack Query:**
  - Fetch and manage API calls.
  - Use mutation for adding and updating food items.

---

### 11. Search and Security

- **Search:**
  - Implement search functionality by food name.
- **JWT Security:**
  - Create and store JWT token upon login.
  - Verify token on private routes.

---


## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Firebase / Auth0
- **API Management:** Axios, TanStack Query
- **State Management:** React Context / Redux

---


