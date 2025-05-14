# Neighbourhood Resource Sharing App

> **Inspiration & Lab Final Project**  
> A modern platform to share resources, save money, and build stronger communities.

---

## Table of Contents

- [Introduction](#introduction)  
- [Why This App Matters](#why-this-app-matters)  
- [Project Objectives](#project-objectives)  
- [Core Features](#core-features)  
- [Required Forms & Data](#required-forms--data)  
- [Application Workflow](#application-workflow)  
- [Database Structure](#database-structure)  
- [Diagrams](#diagrams)  
- [Milestones](#milestones)  
- [Team](#team)  
- [License & Contact](#license--contact)  

---

## Introduction

The **Neighbourhood Resource Sharing App** is a community‐driven platform that lets local residents lend, borrow, and request everyday items from one another. Instead of purchasing tools or furniture for occasional use, neighbors can share resources to save money, reduce waste, and build trust.

---

## Why This App Matters

1. **Quick Borrow** – Need a drill for 5 minutes? Borrow it instead of buying.  
2. **Sustainable Sharing** – Own a party table used once a year? Let others borrow it.  
3. **Local Support** – Just moved in and need cleaning supplies? Borrow from your neighbor.  

This app helps people live smarter, waste less, and feel more connected with their community.

---

## Project Objectives

- **Facilitate Item Sharing**  
  Allow neighbors to list and discover items available for borrowing.  
- **Reduce Waste**  
  Encourage reuse instead of constant purchasing.  
- **Build Local Trust**  
  Promote a helpful, engaged community.  
- **Provide a Clean Interface**  
  Deliver a responsive, user-friendly experience on all devices.

---

## Core Features

### User Management
- **Registration & Login**: Sign up with name, email, password, location.  
- **Profile Page**: View/edit personal info and listed items.  
- **Admin Role**: Moderate users, items, and reviews.

### Item Management
- **Add Item**: Title, description, photo upload, category, availability.  
- **Search & Browse**: Filter by keyword, category, location, availability.  
- **Item Details**: View description, photos, owner info, borrow options.

### Borrowing System
- **Request to Borrow**: Send messages with requested date ranges.  
- **Borrow History**: Track past lends and borrows.

### Messaging System
- **In-App Chat**: Coordinate pickups and ask questions.

### Reviews & Ratings
- **Leave Reviews**: Rate and review transactions.  
- **Trust System**: Build credibility through feedback.

---

## Required Forms & Data

| Form Name         | Fields                                         |
| ----------------- | ---------------------------------------------- |
| Sign Up Form      | Name, Email, Password                          |
| Login Form        | Email, Password                                |
| Add Item          | Title, Description, Photo Upload, Category, Available Dates |
| Search Bar        | Keyword, Category Filter, Location Filter      |
| Borrow Request    | Message, Requested Dates                       |
| Edit Profile      | Name, Photo, Email, Location                   |
| Review Form       | Star Rating, Short Comment                     |

---

## Application Workflow

1. **Register / Login**  
2. **Dashboard** – Browse available items nearby  
3. **Add Item** – Lenders list items to share  
4. **Request to Borrow** – Borrowers contact owners  
5. **In-App Chat** – Coordinate pickup details  
6. **Review** – Borrowers leave feedback post-return  
7. **Admin Moderation** – Admins manage users, items, reviews  

---

## Database Structure

| Table             | Columns                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| **Users**         | UserID (PK), UserName, Email, Password, Role, Location, CreatedAt                       |
| **Items**         | ItemID (PK), OwnerID (FK → Users), Title, Description, Category, PhotoPath, Available, CreatedAt |
| **BorrowRequests**| RequestID (PK), ItemID (FK → Items), BorrowerID (FK → Users), Message, Status, RequestedDate |
| **Messages**      | MessageID (PK), SenderID (FK → Users), ReceiverID (FK → Users), Content, SentAt         |
| **Reviews**       | ReviewID (PK), FromUserID (FK → Users), ToUserID (FK → Users), Rating, Comment, CreatedAt, RequestID (FK → BorrowRequests) |

---

## Diagrams

- **ERD (Entity-Relationship Diagram)**  
- **UML Class Diagram**  
- **Wireframes** (PDF): `docs/wireframes.pdf`

---

## Milestones

| Phase                        | Status                       | Date             |
| ---------------------------- | ---------------------------- | ---------------- |
| Form Teams                   | Completed                    | March 11, 2025   |
| Project Planning             | Completed                    | March 15, 2025   |
| Team Website                 | Completed                    | March 15, 2025   |
| Project Analysis             | Completed                    | April 25, 2025   |
| Development – Core Features  | In Progress                  | Due May 31, 2025 |
| Testing Phase                | Planned                      | May 25, 2025     |
| Project Submission           | Planned                      | May 31, 2025     |
| Project Demonstration        | Planned                      | June 3, 2025     |

---

## Team

- **Jean Paul Iradukunda**  
  Developer & Project Manager  
  - Implements responsive designs and interactive features.  

---

## License & Contact

© 2025 ShareHub – Neighbourhood Resource Sharing App  
[GitHub Repository](https://github.com/sharehub)  
[Contact Us](ikundajp@gmail.com)
