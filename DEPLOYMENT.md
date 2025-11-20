# Skardu Organic - Deployment Guide

## Prerequisites
- Node.js 20+ installed (required for Vite 7)
- npm or yarn package manager
- Modern web browser

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - Copy `.env.local` and update with your API keys
   - Update `GEMINI_API_KEY` if using Gemini AI features
   - Update `VITE_API_URL` to point to your backend API

## Development

**Run Frontend Development Server:**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

**Run Backend Server (if needed):**
```bash
npm run server:dev
```

## Production Build

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## Device Compatibility

This application is fully optimized for:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile devices (iOS Safari, Chrome Mobile, Samsung Internet)
- ✅ Tablets (iPad, Android tablets)
- ✅ Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Mobile-Specific Features
- Touch-optimized tap targets (minimum 44x44px)
- Prevents unwanted zoom on input focus (iOS)
- Smooth scrolling with momentum
- Optimized for iOS Safari bottom bar
- Proper viewport configuration
- Theme color for mobile browsers

## Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: 12+
- Chrome Mobile: Last 2 versions

## Performance Optimizations
- Code splitting with React vendor chunk separation
- Optimized images (max-width: 100%)
- CSS minification
- Tailwind CSS via CDN
- Lazy loading for images

## Deployment Options

### 1. Vercel (Recommended for Frontend)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### 3. Traditional Hosting (Apache/Nginx)
1. Run `npm run build`
2. Upload `dist` folder to your server
3. Configure web server to serve `index.html` for all routes

### 4. Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Mobile Display Issues
- Check viewport meta tag is present
- Verify responsive classes (sm:, md:, lg:, xl:) are working
- Test on actual devices, not just browser DevTools

### Performance Issues
- Enable production mode build
- Check network tab for large assets
- Verify CDN resources are loading correctly

## Additional Notes

- The app uses Tailwind CSS via CDN for rapid styling
- React 19.2.0 is used with latest features
- TypeScript is configured for type safety
- All responsive breakpoints follow Tailwind's default system
