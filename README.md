# Casa Românească (Next.js Project)

This repository contains a Next.js application for a Romanian restaurant called **Casa Românească**. The project demonstrates a multi-page setup with a shared layout (navbar and footer), as well as pages for menus, galleries, contact forms, and more.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Pages and Features](#pages-and-features)
  - [Homepage](#homepage)
  - [Menu](#menu)
  - [Gallery](#gallery)
  - [About](#about)
  - [Contact](#contact)
  - [Layout](#layout)

---

## Overview

This Next.js application showcases a restaurant website with multiple pages:

- **Homepage**: Welcoming visitors with popular dishes and opening hours.
- **Menu**: Categorized menu items with filtering (appetizers, main courses, desserts, drinks, etc.).
- **Gallery**: Image carousel and thumbnails of the restaurant's interior and exterior.
- **About**: Restaurant’s history, team members, and values.
- **Contact**: Reservation form (client-side submission) and embedded Google Maps location.

It uses **Tailwind CSS** for styling and includes custom components for the navbar and footer.

---

## Project Structure

Your project files and folders are organized as follows:

```
app
 ┣ about
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ Footer.tsx
 ┃ ┗ Navbar.tsx
 ┣ contact
 ┃ ┗ page.tsx
 ┣ gallery
 ┃ ┗ page.tsx
 ┣ menu
 ┃ ┗ page.tsx
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┗ page.tsx
```

- **app/\_layout.tsx**
  - Defines the root layout for every page: includes the Navbar and Footer components.
- **app/page.tsx**
  - The default homepage, displaying highlights like popular dishes and opening hours.
- **app/components/**
  - Contains shared components:
    - **Navbar.tsx**
      - Main site navigation.
    - **Footer.tsx**
      - Footer with copyright.
- **app/\[section\]/page.tsx**
  - Each folder under `app` has its own page.tsx that defines a separate route:
    - `about/page.tsx`
    - `menu/page.tsx`
    - `gallery/page.tsx`
    - `contact/page.tsx`
- **globals.css**
  - Global CSS file using Tailwind’s base, components, and utilities.
- **public/** (not shown in screenshot but implied)
  - Typically where you might store images, icons, etc.

---

## Technologies Used

- **Next.js 13** (App Router)
- **React**
- **Tailwind CSS**
- **TypeScript**
- **Google Fonts** (Inter)

---

## Installation

**Install dependencies**:

```bash
npm install
```

or

```bash
yarn install
```

## Running the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

---

## Pages and Features

### Homepage

**File**: `/app/page.tsx`  
Displays a welcoming message, some popular dishes, and the restaurant’s opening hours. Includes a call-to-action button to navigate to the **Contact** page to make a reservation.

### Menu

**File**: `/app/menu/page.tsx`  
Contains a list of menu items, grouped by category (appetizers, main, desserts, drinks). Users can filter items by category via client-side state management.

### Gallery

**File**: `/app/gallery/page.tsx`  
Showcases a slideshow of restaurant images with "previous" and "next" buttons and thumbnails below.

### About

**File**: `/app/about/page.tsx`  
Provides background information about the restaurant (founding year, team members, values, etc.).

### Contact

**File**: `/app/contact/page.tsx`  
Contains a simple reservation form using `useState` to handle user input on the client side and display a success message on submission. Also displays contact info, phone number, email, and an embedded Google map for the restaurant location.

### Layout

**File**: `/app/layout.tsx`  
Defines the structure for every page in the application:

- **Navbar** (site navigation links)
- **Main content** (the page-specific content)
- **Footer** (copyright)

---

_Thank you for visiting Casa Românească — enjoy your stay and explore our delicious menu!_
