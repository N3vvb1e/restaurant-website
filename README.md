# Casa Românească (Next.js Project)

This repository contains a Next.js application for a Romanian restaurant called **Casa Românească**. The project is built using Next.js 13's App Router architecture and demonstrates a modern, responsive restaurant website.

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

This Next.js application showcases a restaurant website with multiple pages and modern web features:

- **Homepage**: Welcoming visitors with featured dishes, special offers, and opening hours
- **Menu**: Interactive menu with categorized items (appetizers, main courses, desserts, drinks)
- **Gallery**: Image showcase with carousel functionality
- **About**: Restaurant's story and team information
- **Contact**: Reservation form and location information

The website is built with TypeScript and uses Tailwind CSS for styling, ensuring type safety and a responsive design.

---

## Project Structure

```
app/
├── about/
│   └── page.tsx           # About page
├── components/            # Shared components
│   ├── Footer.tsx
│   └── Navbar.tsx
├── contact/
│   └── page.tsx          # Contact/reservation page
├── gallery/
│   └── page.tsx          # Photo gallery
├── menu/
│   └── page.tsx          # Restaurant menu
├── globals.css           # Global styles & Tailwind imports
├── layout.tsx            # Root layout with shared components
└── page.tsx              # Homepage
```

Configuration files:
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS settings
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS configuration
- `eslint.config.mjs`: ESLint rules

---

## Technologies Used

- **Next.js 13** (with App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality
- **PostCSS** for CSS processing

---

## Installation

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## Running the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## Pages and Features

### Homepage
`app/page.tsx`
- Featured dishes showcase
- Opening hours display
- Special offers and promotions
- Call-to-action buttons for reservations

### Menu
`app/menu/page.tsx`
- Categorized menu items
- Interactive filtering system
- Detailed dish descriptions and prices

### Gallery
`app/gallery/page.tsx`
- Interactive image carousel
- Restaurant ambiance showcase
- Food presentation photos

### About
`app/about/page.tsx`
- Restaurant history
- Team information
- Mission and values
- Traditional Romanian cuisine background

### Contact
`app/contact/page.tsx`
- Interactive reservation form
- Form validation
- Success message handling
- Location map integration
- Contact details display

### Layout
`app/layout.tsx`
- Consistent navigation header
- Responsive footer
- Mobile-friendly design
- Shared layout elements across all pages

---

_Built with ❤️ for Casa Românească - Your Gateway to Authentic Romanian Cuisine_
