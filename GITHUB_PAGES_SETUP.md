# GitHub Pages Deployment Setup

## Automatic Deployment with GitHub Actions

Your repository is now configured to automatically deploy to GitHub Pages whenever you push to the `master` branch.

---

## Setup Steps (One-Time Configuration)

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/Waqar-743/Skardu-Organics-site.new
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - **Source**: GitHub Actions
5. Save the settings

### 2. Add API Key Secret (Optional)

If you're using the Gemini API:

1. In your repository, go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `GEMINI_API_KEY`
4. Value: Your actual Gemini API key
5. Click **Add secret**

---

## How It Works

The workflow file `.github/workflows/deploy.yml` will:

1. **Trigger on**:
   - Every push to `master` branch
   - Manual trigger (via Actions tab)

2. **Build Process**:
   - Checkout code
   - Setup Node.js 18
   - Install dependencies (`npm ci`)
   - Build the project (`npm run build`)
   - Upload build artifacts

3. **Deploy Process**:
   - Deploy the `dist` folder to GitHub Pages
   - Site becomes available at: `https://waqar-743.github.io/Skardu-Organics-site.new/`

---

## Your Live Site URL

Once deployed, your site will be available at:

**🌐 https://waqar-743.github.io/Skardu-Organics-site.new/**

---

## Monitoring Deployments

1. Go to your repository
2. Click the **Actions** tab
3. You'll see all workflow runs
4. Click on any run to see detailed logs
5. Green checkmark ✅ = Successful deployment
6. Red X ❌ = Failed deployment (check logs)

---

## Manual Deployment

You can manually trigger a deployment:

1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select `master` branch
5. Click **Run workflow**

---

## Workflow Status Badge

Add this to your README.md to show deployment status:

```markdown
![Deploy Status](https://github.com/Waqar-743/Skardu-Organics-site.new/actions/workflows/deploy.yml/badge.svg)
```

---

## Local Testing Before Push

Always test locally before pushing:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Troubleshooting

### Build Fails
- Check the Actions logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (using v18)

### 404 Error After Deployment
- Check that GitHub Pages is enabled
- Verify the base path in `vite.config.ts` matches your repo name
- Wait 2-3 minutes after first deployment

### Blank Page
- Check browser console for errors
- Verify asset paths are correct
- Ensure `base` in vite.config.ts is set correctly

### Assets Not Loading
- Check if images/fonts are in the `public` folder or properly imported
- Verify all paths are relative, not absolute

---

## Configuration Files

### `.github/workflows/deploy.yml`
The GitHub Actions workflow that automates deployment.

### `vite.config.ts`
Contains the `base` path for GitHub Pages:
```typescript
base: process.env.NODE_ENV === 'production' ? '/Skardu-Organics-site.new/' : '/'
```

---

## Updating Your Site

Simply push changes to the `master` branch:

```bash
# Make your changes
git add .
git commit -m "Update site content"
git push origin master
```

The site will automatically rebuild and redeploy in ~2-3 minutes!

---

## Custom Domain (Optional)

To use a custom domain like `www.skarduorganic.com`:

1. In repository Settings → Pages
2. Under **Custom domain**, enter your domain
3. Add DNS records at your domain provider:
   - Type: `CNAME`
   - Name: `www`
   - Value: `waqar-743.github.io`
4. Wait for DNS propagation (up to 48 hours)
5. Enable **Enforce HTTPS**

---

## Deployment Timeline

- **Push to GitHub**: Instant
- **Workflow Start**: ~10 seconds
- **Build Time**: ~1-2 minutes
- **Deploy Time**: ~30 seconds
- **Total**: ~2-3 minutes from push to live

---

## Cost

✅ **100% FREE** - GitHub Pages is free for public repositories!

---

## Next Steps

1. ✅ Push the workflow file to GitHub (done automatically)
2. ⏳ Go to Settings → Pages and enable GitHub Pages
3. ⏳ Wait for first deployment to complete
4. 🎉 Visit your live site!

---

## Support

If you encounter issues:
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review [GitHub Actions Logs](https://github.com/Waqar-743/Skardu-Organics-site.new/actions)
- Check [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
