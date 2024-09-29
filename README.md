# EVNTO - Event Management Platform

**Tech Stack:** MERN (MongoDB, ExpressJS, ReactJS, NodeJS)

## Problem Statement
EVNTO is designed to create a seamless experience for users to discover, access, and engage with new and upcoming events. Additionally, the platform provides event organizers with an intuitive and secure system to manage their events effectively. The solution is divided into three core components: the **Frontend**, **Backend**, and **Admin Panel**, each operating independently to ensure security and scalability.


---

## Key Features

### 1. **Admin Panel**
The admin panel empowers event organizers to manage their events with ease. The key functionalities include:
- **Event Creation:** Organizers can create new events through a user-friendly form.
- **Event Management:** Organizers can view all events, update event details, or remove events from the database.
- **Ticket Management:** The panel shows the status of newly booked tickets, allowing organizers to approve or reject ticket requests before allocation to attendees.


### 2. **Frontend**
The frontend is built with ReactJS, ensuring a smooth and interactive user experience. Key aspects include:
- **User Registration and Authentication:** Users can create accounts using Google or other methods, and securely log in to access event features.
- **Event Browsing and Ticket Booking:** Users can browse multiple events, select tickets, and add them to their cart for a streamlined booking experience.
- **Payment Integration:** The platform integrates Stripe for secure and efficient payment processing. After payment, orders are verified and added to the user's order history.
- **Persistent Components:** Navbar and footer components are developed separately and integrated across pages such as Home, My Orders, etc., using React Router DOM.



### 3. **Backend**
The backend is powered by ExpressJS and provides the core functionality to support all user and admin interactions. Key responsibilities include:
- **API Endpoints:** Backend APIs are designed using controllers and routers for modularity and clarity.
- **Database Integration:** MongoDB is used for handling all event, user, and ticket data. Models are created for each data collection, ensuring data consistency and security.
- **Security & Scalability:** The backend also focuses on providing a secure environment for user data and event transactions.



---

## System Architecture

- **Frontend:** ReactJS-based interface for users to browse events, manage tickets, and process payments.
- **Backend:** ExpressJS server handling API requests, interacting with MongoDB, and processing event and user data.
- **Admin Panel:** Separate module providing full control to event organizers for event and ticket management.



---

## Conclusion
EVNTO is an efficient, user-friendly platform that streamlines the event discovery and management process. By separating the frontend, backend, and admin panel, the platform ensures security, modularity, and ease of maintenance, while offering a seamless experience for both users and event organizers.

