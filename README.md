# React + Tailwind Dashboard

A modern **responsive dashboard UI** built using **React, Vite, and Tailwind CSS**.
The project demonstrates reusable UI components, data visualization using charts, and a scalable frontend structure suitable for admin panels or analytics dashboards.

---

# Tech Stack

The project uses the following technologies and versions:

### Core

* React – v19.2.4
* React DOM – v19.2.4
* Vite – v7.3.1

### Styling

* Tailwind CSS – v4.2.1

### Charts

* Recharts – v3.8.0

### Icons

* Lucide React – v0.577.0

### Build & Plugins

* @vitejs/plugin-react – v4.7.0
* @tailwindcss/vite – v4.2.1

### Development Tools

* ESLint – v9.39.4
* eslint-plugin-react-hooks – v7.0.1
* eslint-plugin-react-refresh – v0.5.2

Dependencies and scripts are configured in `package.json`. 

---

# Requirements

Make sure the following are installed:

* Node.js (v18 or higher recommended)
* npm

Check installed versions:

```bash
node -v
npm -v
```

---

# Getting Started

Follow these steps to run the project locally.

---

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Navigate into the project folder:

```bash
cd YOUR_REPO_NAME
```

---

## 2. Install Dependencies

Install all required packages:

```bash
npm install
```

This will install React, Tailwind CSS, Recharts, and other dependencies defined in the project. 

---

## 3. Start Development Server

Run:

```bash
npm run dev
```

The development server will start using Vite.

Open your browser and go to:

```
http://localhost:5173
```

---

# Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

---

# Project Structure

```
dashboard/
│
├── src/
│   ├── components
│   ├── pages
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

Tailwind scans files inside `index.html` and `src` to generate styles. 

Vite is configured with React and Tailwind plugins for fast development and builds. 

---

# Notes

* `node_modules` is not included in the repository.
* Run `npm install` after cloning the project.
* The project uses **Vite for fast hot reload and optimized builds**.
* Tailwind CSS is used for utility-first styling.

---

# License

This project is open-source and can be used for learning and development purposes.
