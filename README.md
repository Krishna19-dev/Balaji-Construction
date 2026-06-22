<div align="center">

# 🏗️ BALAJI CONSTRUCTION

### *Building Dreams, Delivering Excellence*

> A modern, fully responsive construction company website showcasing services, projects, expertise, and client testimonials — built with pure HTML, CSS & JavaScript.

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-FF6B00?style=for-the-badge&logo=google-chrome&logoColor=white)

![GitHub last commit](https://img.shields.io/github/last-commit/Krishna19-dev/balaji-construction?style=flat-square&color=0F172A)
![GitHub repo size](https://img.shields.io/github/repo-size/Krishna19-dev/balaji-construction?style=flat-square&color=FF6B00)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

<br>

[🌐 Live Demo](https://balaji-construction-six.vercel.app/) · [📸 Screenshots](#-screenshots) · [🚀 Quick Start](#-installation--local-setup) · [🐛 Report Bug](https://github.com/Krishna19-dev/balaji-construction/issues) · [✨ Request Feature](https://github.com/Krishna19-dev/balaji-construction/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-technology-stack)
- [Website Sections](#-website-sections)
- [Responsive Design](#-responsive-design)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation--local-setup)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Roadmap](#-future-improvements-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🏢 Project Overview

**Balaji Construction** is a professional, modern corporate website built to represent a construction company's digital presence. The website is designed with a clean and bold visual identity using **Orange (#FF6B00)**, **Navy Blue (#0F172A)**, and **White** — colors that communicate trust, strength, and professionalism.

The site is crafted entirely with vanilla **HTML5**, **CSS3**, and **JavaScript** — no frameworks, no dependencies — making it lightweight, fast, and easy to deploy anywhere. It serves as a complete digital brochure for showcasing services, portfolios, team expertise, and client testimonials, while providing seamless ways for potential clients to get in touch.

Whether you're a recruiter evaluating frontend skills, a client evaluating the company, or a developer looking for a reference project — this site delivers a polished, real-world experience.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎨 **Modern Corporate Design** | Bold color palette with clean typography and professional layout |
| 📱 **Fully Responsive** | Pixel-perfect across desktop, tablet, and mobile viewports |
| 🎬 **Smooth Animations** | CSS transitions and scroll-triggered animations for a premium feel |
| 🧭 **Sticky Navigation** | Fixed navbar with smooth scroll and active section highlighting |
| 🖼️ **Project Portfolio** | Filterable gallery showcasing completed construction projects |
| 💬 **Testimonials Slider** | Auto-rotating client reviews with navigation controls |
| 📬 **Contact Form** | Functional contact form with client-side validation |
| ⚡ **Zero Dependencies** | Pure HTML/CSS/JS — no frameworks, no libraries, no build tools |
| 🔍 **SEO Ready** | Semantic HTML5, meta tags, and structured content for discoverability |
| ♿ **Accessible** | ARIA labels, keyboard navigability, and high-contrast color ratios |

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat) **HTML5** | Semantic page structure and content markup |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) **CSS3** | Styling, animations, Flexbox & Grid layouts |
| ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) **JavaScript (ES6+)** | Interactivity, DOM manipulation, form validation |
| 🎨 **CSS Custom Properties** | Theme tokens for consistent color/spacing system |
| 📐 **CSS Grid & Flexbox** | Responsive multi-column layouts |
| 🔠 **Google Fonts** | Professional typography (integrated via CDN) |
| 🖼️ **Font Awesome** | Icon library for service and feature icons |

---

## 🗂️ Website Sections

### 🏠 Hero Section
Full-screen landing section with a compelling headline, subtext, a CTA button ("Get a Free Quote"), and a background image that immediately communicates the construction industry.

### 🏛️ About Us
Company story, founding values, team strength, years of experience, and what sets Balaji Construction apart from competitors — with animated counters for stats.

### 🔧 Services
Grid-based layout showcasing core services including:
- Residential Construction
- Commercial Buildings
- Renovation & Remodeling
- Interior Design
- Project Consultation
- Quality Inspection

### 🏙️ Projects Portfolio
Filterable image gallery of completed projects with categories (All / Residential / Commercial / Renovation). Each project card includes the name, location, and year of completion.

### 🏆 Why Choose Us
Icon-driven section highlighting key differentiators — on-time delivery, experienced team, quality materials, certified professionals, and transparent pricing.

### 💬 Testimonials
Auto-scrolling carousel of verified client testimonials, complete with star ratings, client names, and project type.

### 📞 Contact Section
Three-column layout with office address, phone/email details, and a working contact form with fields for name, email, phone, service type, and message.

### 🔗 Footer
Multi-column footer with quick navigation links, social media icons, newsletter subscription field, and copyright notice.

---

## 📱 Responsive Design

The website adapts gracefully across all screen sizes using a **mobile-first** approach:

| Breakpoint | Target Device | Layout |
|---|---|---|
| `< 480px` | Mobile (small) | Single column, stacked nav |
| `480px – 768px` | Mobile (large) | Single column, hamburger menu |
| `768px – 1024px` | Tablet | 2-column grids, condensed nav |
| `1024px – 1280px` | Laptop | 3-column grids, full nav |
| `> 1280px` | Desktop / Wide | Full layout, max-width container |

Key responsive techniques used:
- CSS Grid `auto-fit` / `minmax()` for fluid columns
- Flexbox wrapping for navigation and card layouts
- `clamp()` for fluid typography scaling
- CSS media queries at standard breakpoints
- Touch-friendly tap targets (minimum 44×44px)
- Hamburger navigation menu for mobile

---

## 📁 Folder Structure

```
balaji-construction/
│
├── index.html                  # Main entry point
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Global styles & CSS variables
│   │   ├── responsive.css      # Media queries & breakpoints
│   │   └── animations.css      # Keyframe & transition styles
│   │
│   ├── js/
│   │   ├── main.js             # Core interactivity & scroll logic
│   │   ├── slider.js           # Testimonials carousel
│   │   ├── portfolio.js        # Project filter logic
│   │   └── form.js             # Contact form validation
│   │
│   ├── images/
│   │   ├── hero/               # Hero section background images
│   │   ├── projects/           # Portfolio project images
│   │   ├── team/               # Team member photos
│   │   ├── logo/               # Company logo variants
│   │   └── icons/              # Custom icon assets
│   │
│   └── fonts/                  # Local font files (if any)
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Installation & Local Setup

### Prerequisites

Make sure you have one of the following installed:
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local server tool (optional but recommended): [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), `http-server`, or Python

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Krishna19-dev/balaji-construction.git
```

### Step 2 — Navigate to the Project Directory

```bash
cd balaji-construction
```

### Step 3 — Launch the Website

**Option A — Open directly (simplest):**
```bash
# Just double-click index.html, or open via terminal:
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Option B — Using VS Code Live Server (recommended):**
1. Open the project folder in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser opens automatically at `http://127.0.0.1:5500`

**Option C — Using Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option D — Using Node.js `http-server`:**
```bash
npx http-server .
# Then open: http://localhost:8080
```

---

## 🧭 Usage

Once the site is running locally:

1. **Navigate** using the sticky top navbar or scroll through sections
2. **Explore Services** by clicking on any service card for details
3. **Browse Projects** using the filter buttons (All / Residential / Commercial / Renovation)
4. **Read Testimonials** via the auto-rotating slider (use arrows to navigate manually)
5. **Submit a Query** via the Contact Form (client-side validation active)
6. **Test Responsiveness** by resizing your browser or using DevTools device emulator

To customize for your own brand:
- Update **color variables** in `assets/css/style.css` under `:root`
- Replace **images** in `assets/images/` with your own
- Edit **content** directly in `index.html`
- Update **contact details** in the Contact section

---

## 📸 Screenshots

<div align="center">

### 🏠 Hero Section
*Full-screen landing with animated headline and CTA*

![Hero Section](https://balaji-construction-six.vercel.app/images/hero-bg.png)

---

### 🏛️ About Us
*Company overview with 20+ years of excellence*

![About Us](https://balaji-construction-six.vercel.app/images/about-company.png)

---

### 🏙️ Projects Portfolio

| 🏡 Residential | 🏢 Commercial | 🔨 Renovation |
|---|---|---|
| ![Sunrise Villa Complex](https://balaji-construction-six.vercel.app/images/project-residential.png) | ![Balaji Tech Park](https://balaji-construction-six.vercel.app/images/project-commercial.png) | ![Heritage House Revival](https://balaji-construction-six.vercel.app/images/project-renovation.png) |
| **Sunrise Villa Complex** | **Balaji Tech Park** | **Heritage House Revival** |
| Luxury 4BHK villas, Bangalore | 50,000 sq.ft IT complex, Hyderabad | Complete renovation, 40-yr residence |

---

🌐 **Live Site:** [balaji-construction-six.vercel.app](https://balaji-construction-six.vercel.app/)

</div>

---

## 🗺️ Future Improvements Roadmap

### 🔜 Version 2.0 (Planned)
- [ ] 🌙 **Dark Mode Toggle** — User-switchable light/dark theme
- [ ] 🌍 **Multilingual Support** — Hindi + English language switcher
- [ ] 📊 **Animated Statistics** — Counter animations for projects/clients/years
- [ ] 🔍 **Project Search Bar** — Filter portfolio by keyword or category

### 🔮 Version 3.0 (Future)
- [ ] 🗄️ **Backend Integration** — Node.js + Express for form handling & email
- [ ] 📩 **Email Notifications** — Auto-reply on form submission via Nodemailer
- [ ] 📍 **Google Maps Embed** — Office location on interactive map
- [ ] 🖼️ **Lightbox Gallery** — Full-screen image viewer for project photos
- [ ] 🧾 **PDF Quote Generator** — Downloadable quote form
- [ ] 📱 **PWA Support** — Offline access via Service Workers

### ♿ Accessibility & Performance
- [ ] Full WCAG 2.1 AA compliance audit
- [ ] Lazy loading for all images
- [ ] WebP image format optimization
- [ ] Lighthouse score target: 95+ across all metrics

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork** the repository
   ```bash
   # Click "Fork" at the top-right of this page
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit
   ```bash
   git commit -m "✨ feat: add your feature description"
   ```

4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub

### Commit Message Convention

| Prefix | Use For |
|---|---|
| `✨ feat:` | New features |
| `🐛 fix:` | Bug fixes |
| `🎨 style:` | UI/CSS changes |
| `📝 docs:` | Documentation updates |
| `♻️ refactor:` | Code restructuring |
| `🚀 perf:` | Performance improvements |

> Please ensure your PR description clearly describes the problem and solution. Include screenshots for UI changes.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

```
MIT License — Copyright (c) 2025 Krishna Choudhary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, and distribute it,
subject to the conditions of the MIT License.
```

---

## 👤 Author

<div align="center">

### Krishna Choudhary

*Frontend Developer | UI/UX Enthusiast | Building pixel-perfect web experiences*

[![GitHub](https://img.shields.io/badge/GitHub-Krishna19--dev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Krishna19-dev)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF6B00?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#)

</div>

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

*It motivates me to keep building and sharing open-source work.*

**[⬆ Back to Top](#-balaji-construction)**

---

*Built with 🧱 and ❤️ by [Krishna Choudhary](https://github.com/Krishna19-dev)*

</div>
