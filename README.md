# 🚀 Lead Product Engineer - Portfolio

A world-class, fully responsive portfolio built with **Vite + React + Tailwind CSS**.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with mobile menu & active section tracking
│   │   ├── Hero.jsx          # Animated hero with typing effect & stats
│   │   ├── About.jsx         # About + values + code snippet card
│   │   ├── Skills.jsx        # Expertise cards + animated skill bars
│   │   ├── Experience.jsx    # Timeline-style work history
│   │   ├── Projects.jsx      # Featured + grid project cards
│   │   ├── Achievements.jsx  # Achievements + differentiators
│   │   ├── Contact.jsx       # Contact with copy-email feature
│   │   ├── Footer.jsx        # Clean footer
│   │   └── Cursor.jsx        # Custom cursor + scroll progress
│   ├── data/
│   │   └── portfolio.js      # ← ALL your content lives here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open **http://localhost:5173** in your browser.

### 3. Build for production
```bash
npm run build
```

---

## ✏️ Personalizing Your Portfolio

**All your content is in one file: `src/data/portfolio.js`**

Update these fields:
- `personalInfo` - name, email, social links, bio
- `stats` - your key numbers
- `skills` - your expertise areas
- `experience` - work history
- `projects` - your projects
- `achievements` - key wins
- `differentiators` - what sets you apart

---

## 🎨 Design Features

- **Dark industrial theme** with electric green (`#00ff88`) accents
- **Custom magnetic cursor** with smooth lag animation
- **Scroll progress bar** at the top
- **Typing animation** cycling through your roles
- **Animated count-up** stats on scroll
- **Animated skill bars** triggered on scroll
- **Glass morphism cards** with hover glow effects
- **Scroll-reveal animations** on all sections
- **Mobile-first responsive** - works on all screen sizes
- **Active nav highlighting** based on current section

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🔧 Tech Stack
- **Vite** - lightning-fast build tool
- **React 18** - component architecture
- **Tailwind CSS 3** - utility-first styling
- **Google Fonts** - Syne (display) + JetBrains Mono

---

*Built with precision. Designed to impress.*
