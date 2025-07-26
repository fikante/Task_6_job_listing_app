# Job Listing Application

A modern React-based job listing application built with Next.js 13+ and Tailwind CSS. This application showcases job opportunities with detailed descriptions and a clean, responsive design.

## Features

- **Job Listing Dashboard**: Display multiple job opportunities in a card-based layout
- **Detailed Job Pages**: Individual job pages with comprehensive information
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Static Site Generation**: Optimized performance with Next.js SSG
- **Modern UI/UX**: Clean, professional design matching the provided specifications

## Pages

### 1. Landing Page / Job List

![Landing Page](screenshots/landing-page.png)

The main landing page displays a list of job opportunities in a clean, card-based layout. Features include:

- Header with navigation breadcrumb
- "Opportunities" title with result count
- Sort by dropdown (Most relevant)
- Job cards with company avatars, titles, descriptions, and tags
- Responsive design with proper spacing and typography

### 2. Individual Job Card

![Job Card](screenshots/job-card.png)

Each job card displays:

- Company avatar/logo
- Job title in bold
- Company name and location
- Job description snippet (truncated)
- Three colored tags: "In Person" (green), "Education" (orange), and "F" (gray)

### 3. Job Details Page

![Job Details](screenshots/job-details.png)

The detailed job page shows comprehensive information in a two-column layout:

**Left Column (Main Content):**

- Description section with full job description
- Responsibilities list with green checkmarks
- Ideal Candidate requirements
- When & Where information with location icon

**Right Column (Sidebar):**

- About section with dates and location
- Categories tags (orange)
- Required Skills tags (purple)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

