<div align="center">

  # 📚 DevCheats

  **Your central hub for programming cheatsheets**

  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  [Features](#-features) •
  [Tech Stack](#-tech-stack) •
  [Getting Started](#-getting-started) •
  [Usage](#-usage) •
  [Project Structure](#-project-structure) •
  [Contributing](#-contributing)

</div>

---

## 🌟 Overview

**DevCheats** is a beautifully designed landing page and resource hub that provides quick access to programming cheatsheets for developers. Whether you're working with Python, JavaScript, React, Docker, or SQL, DevCheats offers organized, copy-ready code snippets and syntax references all in one place.

> *"Stop searching. Start coding."* — The best cheatsheets for developers, all in one place.

---

## ✨ Features

- 🔍 **Quick Search** — Find the syntax or command you need in seconds
- 📂 **Wide Range of Topics** — From JavaScript and Python to Docker and Kubernetes
- 🖨️ **Print-Ready** — Clean and minimalist layouts perfect for printing
- 📋 **One-Click Copy** — Copy code snippets to your clipboard instantly
- 🎨 **Modern UI** — Beautiful dark theme with responsive design
- ⚡ **Fast Performance** — Built with Vite for lightning-fast development

---

## 🏷️ Categories

| Category | Topics Covered |
|----------|----------------|
| **Programação** | Python, JavaScript, Go, Rust, Java, Ruby |
| **Frontend** | HTML, CSS, React, TypeScript, TailwindCSS, Next.js, Angular |
| **Backend** | Django, Flask, Ruby on Rails, Spring Boot, GraphQL |
| **DevOps** | Git, GitHub Actions, Dependabot, CodeQL |
| **Banco de Dados** | SQL (SELECT, DML, JOINs) |
| **Ciência de Dados** | Pandas, NumPy, Data Manipulation |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Component Library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS Framework |
| [Axios](https://axios-http.com/) | HTTP Client |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lucasgab2230/devcheats.git
   cd devcheats
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables** (Optional)

   Create a `.env.local` file in the root directory if you need to use the Gemini API:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📖 Usage

### Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

```
devcheats/
├── components/           # React components
│   ├── icons/           # Icon components
│   │   ├── CodeIcon.tsx
│   │   ├── PrinterIcon.tsx
│   │   └── SearchIcon.tsx
│   ├── Categories.tsx   # Category cards grid
│   ├── CTA.tsx          # Call to action section
│   ├── Features.tsx     # Features showcase
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation header
│   └── Hero.tsx         # Hero section
├── data/
│   └── cheatsheets.ts   # Cheatsheet content data
├── pages/
│   ├── CheatsheetPage.tsx  # Individual cheatsheet view
│   └── LandingPage.tsx     # Main landing page
├── .github/
│   ├── dependabot.yml   # Dependabot configuration
│   └── workflows/       # GitHub Actions workflows
├── App.tsx              # Main application component
├── index.html           # HTML entry point
├── index.tsx            # React entry point
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Adding New Cheatsheets

To add new cheatsheets, edit the `data/cheatsheets.ts` file:

```typescript
export const cheatsheetsData: Record<string, { title: string; content: string }[]> = {
  "Category Name": [
    {
      title: 'Cheatsheet Title',
      content: `
// Your code content here
`,
    },
  ],
};
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspired by modern developer tools and documentation sites
- Built with love for the developer community

---

<div align="center">
  <p>Made with ❤️ by the DevCheats team</p>
  <p>
    <a href="https://github.com/lucasgab2230/devcheats">⭐ Star this repo</a> •
    <a href="https://github.com/lucasgab2230/devcheats/issues">🐛 Report Bug</a> •
    <a href="https://github.com/lucasgab2230/devcheats/issues">✨ Request Feature</a>
  </p>
</div>
