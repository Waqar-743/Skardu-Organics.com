<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Skardu Organic - Premium Himalayan Products

![Deploy Status](https://github.com/Waqar-743/Skardu-Organics-site/actions/workflows/deploy.yml/badge.svg)

A modern, responsive e-commerce platform for authentic organic products from Gilgit-Baltistan. Built with React, TypeScript, and Vite.

## 🌐 Live Demo

**Production Site:** https://waqar-743.github.io/Skardu-Organics-site/

## ✨ Features

- 🛒 Full shopping cart functionality
- 🔍 Advanced search with fuzzy matching
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Lightning-fast performance with Vite
- 🔐 User authentication (mock implementation)
- 🎯 Product filtering and sorting
- 💳 Checkout process
- 📦 Inventory management
- ⭐ Product reviews and ratings

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Waqar-743/Skardu-Organics-site.git
   cd Skardu-Organics-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Set your `GEMINI_API_KEY` if using AI features

4. **Run development server:**
   ```bash
   npm run dev
   ```
   
   App will be available at `http://localhost:3000`

## 📦 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run server     # Run backend server (if needed)
npm run server:dev # Run backend with nodemon
```

## 🌍 Deployment

### Automatic Deployment (GitHub Pages)

This project uses GitHub Actions for automatic deployment:

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push to master branch:**
   ```bash
   git push origin master
   ```

3. **Site deploys automatically** in 2-3 minutes!

For detailed instructions, see [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)

### Manual Deployment Options

- **Vercel:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Waqar-743/Skardu-Organics-site)
- **Netlify:** See [DEPLOYMENT.md](DEPLOYMENT.md)

## 📱 Device Compatibility

✅ **Desktop Browsers**
- Chrome/Edge (Last 2 versions)
- Firefox (Last 2 versions)
- Safari (Last 2 versions)

✅ **Mobile Browsers**
- iOS Safari 12+
- Chrome Mobile
- Samsung Internet

✅ **Responsive Breakpoints**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Backend:** Node.js, Express (mock data)
- **Deployment:** GitHub Pages with GitHub Actions

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── components/          # React components
├── controllers/         # Backend controllers
├── models/             # Data models
├── routes/             # API routes
├── middleware/         # Express middleware
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── index.tsx           # Entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 📄 Documentation

- [Deployment Guide](DEPLOYMENT.md) - Comprehensive deployment instructions
- [GitHub Pages Setup](GITHUB_PAGES_SETUP.md) - GitHub Pages configuration
- [Fixes Summary](FIXES_SUMMARY.md) - All bugs fixed and optimizations

## 🐛 Troubleshooting

See [FIXES_SUMMARY.md](FIXES_SUMMARY.md) for common issues and solutions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

ISC License

## 👤 Author

**Waqar**
- GitHub: [@Waqar-743](https://github.com/Waqar-743)

---

<div align="center">
Made with ❤️ for authentic Himalayan products
</div>
