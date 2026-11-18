# Ashel Dsouza — Developer Portfolio Website

[![Portfolio Status](https://img.shields.io/badge/Status-Completed-22c55e.svg)](https://github.com/asheldsouza-13)
[![Degree](https://img.shields.io/badge/MCA-Poornaprajna_Institute_of_Management-black.svg)](https://pim.ac.in)
[![Design](https://img.shields.io/badge/Style-Minimal_Monochrome-0f172a.svg)](#design-system)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success.svg)](#accessibility)

The official, authentic developer portfolio website for **Ashel Dsouza**, First-Year Master of Computer Applications (MCA) student at **Poornaprajna Institute of Management (PIM)**, Udupi, Karnataka.

Designed and engineered with strict adherence to academic and technical accuracy, professional dignity, zero-bloat performance, and high-contrast monochrome aesthetics.

---

## 🌟 Student Profile & Identity

- **Name:** Ashel Dsouza
- **Professional Headline:** MCA Student | Aspiring Software Developer | AI & ML Enthusiast
- **Institution:** Poornaprajna Institute of Management (PIM), Udupi, Karnataka
- **Location:** Udupi, Karnataka, India
- **Email:** [dsouzaashel1301@gmail.com](mailto:dsouzaashel1301@gmail.com)
- **Phone:** [+91 8088826513](tel:8088826513)
- **LinkedIn:** [linkedin.com/in/asheldsouza13](https://www.linkedin.com/in/asheldsouza13/)
- **GitHub:** [github.com/asheldsouza-13](https://github.com/asheldsouza-13)

---

## 📐 Design System & Architectural Principles

- **Visual Theme:** Minimal and Professional.
- **Color Palette:** High-contrast Monochrome (Pure Black `#09090b` / Slate & Crisp White `#ffffff`).
- **Default Appearance Mode:** Light Theme (with seamless instant toggle to Dark Theme, persisting preference via `localStorage`).
- **Typography:** Modern clean system sans-serif font stack paired with precision monospace accents for technical meters and badges.
- **Motion & Depth:** Subtle transitions and micro-interactions adhering strictly to `prefers-reduced-motion` for accessibility.
- **Zero Bloat Performance:** 100% pure semantic HTML5, modern CSS3 (custom properties, CSS Grid, Flexbox), and native modular JavaScript. Zero external CDN dependencies or heavy frameworks.

---

## 📂 Project Structure

```
My Portfolio/
├── index.html            # Main portfolio document (semantic, accessible, SEO/OG tags)
├── css/
│   ├── style.css         # Design tokens, theme variables, layout, components, responsiveness
│   └── print.css         # Print & PDF export stylesheet for clean resume generation
├── js/
│   └── app.js            # Theme switch, mobile drawer, scrollspy, modals, form & copy actions
├── assets/
│   ├── ashel-dsouza.jpg  # Professional profile portrait
│   ├── favicon.svg       # Geometric monochrome developer monogram
│   └── og-image.svg      # High-resolution OpenGraph preview banner
├── serve.ps1             # Local zero-dependency static web server
└── README.md             # Project documentation and deployment instructions
```

---

## 🎓 Academic Education & Background

| Degree | Institution | Duration | Status | Specialization / Score |
| :--- | :--- | :--- | :--- | :--- |
| **Master of Computer Applications (MCA)** | Poornaprajna Institute of Management (PIM), Udupi | 2026 – 2028 | **Pursuing** | Computer Applications & Software Development |
| **Bachelor of Computer Applications (BCA)** | Poornaprajna College, Udupi | 2023 – 2026 | **Completed** | Computer Applications · **8.5 CGPA** |

---

## 💻 Verified Programming Proficiency

> **Honesty & Integrity Policy:** All competencies reflect the student's exact verified self-assessment without inflation.

### Core Languages (`Level: Basic`)
- **C:** Basic (Imperative / System Fundamentals)
- **C++:** Basic (Object-Oriented Programming & DSA)
- **Java:** Basic (Application Logic & OOP Architecture)
- **Python:** Basic (Scripting, Data Manipulation)
- **PHP:** Basic (Server-side Web Development)
- **C#:** Basic (Modern Object-Oriented .NET)
- **JavaScript:** Basic (Interactive Client-side Logic)

### Web Development Fundamentals
- **HTML:** Basic (Document Semantic Structure)
- **CSS:** Basic (Layout, Flex/Grid, Responsive Styling)

### Query & Database Languages
- **SQL:** Basic (Relational Data Querying & CRUD)
- **MySQL / SQLite:** Relational schema design and query execution

### Tools, Libraries & Infrastructure
- **Data Science & AI:** NumPy, Pandas
- **Development Tools & IDEs:** GitHub, Visual Studio Code, Google Antigravity
- **Cloud & Deployment:** AWS, Microsoft Azure, Vercel, GitHub Pages, Google Cloud
- **Software Engineering:** Data Structures & Algorithms, Object-Oriented Programming, Testing and Debugging

---

## 🚀 Featured Projects

### **Online Food Ordering System**
- **Category:** Web Development
- **Status:** Completed
- **Problem Solved:** Reduces the need for manual food ordering and simplifies the ordering process by providing an online platform for browsing food items and placing orders.
- **Key Contributions:** Designed and developed the website interface using **HTML** and **CSS**, and implemented the application functionality using **Java**. Worked on creating a user-friendly food ordering platform.
- **Tech Stack:** HTML5, CSS3, Java

---

## ⚡ Interactive Features

1. **Sticky Header & ScrollSpy Navigation:** Smoothly highlights the active section as you scroll.
2. **Instant Light / Dark Theme Switcher:** Automatically remembers user preference in `localStorage`.
3. **Mobile Drawer Navigation:** Accessible slide-out menu with touch backdrop, focus trapping, and keyboard support (`Escape` to close).
4. **Project Detail Modal:** Deep dive into the architecture, workflow, and engineering highlights of the Online Food Ordering System.
5. **Print-Optimized Resume Modal:** Instant view of Ashel's recruiter-ready CV with one-click **Print / Save as PDF** support.
6. **Quick Copy Buttons:** One-click copy for email and phone with accessible toast alerts.
7. **Interactive Mailto Generator:** Direct contact form that prepares formatted email drafts.

---

## 🚢 Deployment Guide

This portfolio requires zero build tools and can be launched immediately using any web server or static hosting platform:

### 1. GitHub Pages
1. Push the project repository to GitHub: `https://github.com/asheldsouza-13/portfolio`
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` (root) and click **Save**.
4. Your site will be live at `https://asheldsouza-13.github.io/portfolio/`.

### 2. Vercel
1. Install Vercel CLI or import the GitHub repository in the Vercel Dashboard.
2. Deploy directly with zero configuration:
   ```bash
   npx vercel
   ```

### 3. Local Preview
Simply open `index.html` in any web browser (Google Chrome, Microsoft Edge, Firefox, Safari) or run a simple local web server:
```bash
# Using Python (if available):
python -m http.server 3000

# Or using npx serve:
npx serve .
```

---

## ♿ Accessibility & Performance

- **WCAG 2.1 Level AA Compliance:** High contrast ratios across both light and dark themes.
- **Screen Reader Friendly:** Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with explicit `aria-label`, `aria-hidden`, and `role` attributes.
- **Keyboard Navigable:** Complete tab index navigation with visible outline focus rings and `Escape` key handlers on all modals.
- **Reduced Motion Support:** Honors user operating system preference for `prefers-reduced-motion`.
