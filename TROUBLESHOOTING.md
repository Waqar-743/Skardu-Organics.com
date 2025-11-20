# Troubleshooting Guide

## Common Issues and Solutions

### ❌ Build Error: "crypto.hash is not a function"

**Error Message:**
```
You are using Node.js 18.20.8. Vite requires Node.js version 20.19+ or 22.12+.
error during build:
[vite:build-html] crypto.hash is not a function
```

**Cause:**
- Vite 7.2.4 requires Node.js 20.19+ or 22.12+
- The project was using Node.js 18

**Solution:**
✅ **Already Fixed!** The GitHub Actions workflow now uses Node.js 20.

**For Local Development:**
If you encounter this error locally, upgrade your Node.js:

1. **Check your Node.js version:**
   ```bash
   node --version
   ```

2. **Upgrade to Node.js 20+:**
   
   **Windows:**
   - Download from: https://nodejs.org/
   - Install Node.js 20 LTS or higher
   
   **macOS (using Homebrew):**
   ```bash
   brew install node@20
   ```
   
   **Linux (using nvm):**
   ```bash
   nvm install 20
   nvm use 20
   ```

3. **Verify the installation:**
   ```bash
   node --version  # Should show v20.x.x or higher
   ```

4. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **Try building again:**
   ```bash
   npm run build
   ```

---

### ❌ GitHub Actions Deployment Fails

**Check these common issues:**

1. **GitHub Pages Not Enabled**
   - Go to Settings → Pages
   - Ensure "Source" is set to "GitHub Actions"

2. **Wrong Node.js Version**
   - Check `.github/workflows/deploy.yml`
   - Should have `node-version: '20'`

3. **Missing Secrets**
   - If using Gemini API, add `GEMINI_API_KEY` secret
   - Go to Settings → Secrets and variables → Actions

4. **Check Workflow Logs**
   - Go to Actions tab
   - Click on the failed workflow
   - Review detailed error logs

---

### ❌ 404 Error After Deployment

**Symptoms:**
- GitHub Actions shows successful deployment
- Site shows 404 or blank page

**Solutions:**

1. **Check Base Path in vite.config.ts:**
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/Skardu-Organics-site.new/' : '/'
   ```
   - Must match your repository name exactly

2. **Wait for Propagation:**
   - First deployment can take 3-5 minutes
   - Check again after waiting

3. **Check GitHub Pages Settings:**
   - Settings → Pages
   - Verify "Source" is "GitHub Actions"
   - Check that deployment branch is correct

---

### ❌ Assets Not Loading (Images, Fonts, CSS)

**Symptoms:**
- Site loads but images/fonts are broken
- CSS styles not applied

**Solutions:**

1. **Check Asset Paths:**
   - Use relative paths: `./assets/image.png`
   - NOT absolute paths: `/assets/image.png`

2. **Use Vite's Import System:**
   ```typescript
   import logoUrl from './assets/logo.png'
   ```

3. **Place Static Assets in Public Folder:**
   - Move to `/public` folder
   - Access as `/filename.ext` (auto-handled by Vite)

---

### ❌ Build Works Locally but Fails on GitHub

**Common Causes:**

1. **Different Node.js Versions:**
   - Local: Check with `node --version`
   - GitHub: Check workflow file

2. **Case-Sensitive File Paths:**
   - Windows is case-insensitive
   - Linux (GitHub Actions) is case-sensitive
   - Example: `./Components/Header.tsx` ≠ `./components/Header.tsx`

3. **Environment Variables:**
   - Check if all required env vars are in GitHub Secrets

---

### ❌ Blank White Screen

**Debugging Steps:**

1. **Open Browser Console (F12):**
   - Check for JavaScript errors
   - Look for 404 errors on assets

2. **Check Base Path:**
   - Verify `vite.config.ts` base matches repo name

3. **Test Production Build Locally:**
   ```bash
   npm run build
   npm run preview
   ```
   - Visit http://localhost:4173
   - If broken locally, fix before pushing

---

### ❌ Workflow Doesn't Trigger

**Symptoms:**
- Push to master but no workflow runs

**Solutions:**

1. **Check Workflow File Location:**
   - Must be in `.github/workflows/deploy.yml`
   - Check file name and extension

2. **Check Branch Name:**
   - Workflow triggers on `master` branch
   - If using `main`, update workflow file:
   ```yaml
   on:
     push:
       branches:
         - main  # Change from master
   ```

3. **Check Workflow Syntax:**
   - Go to Actions tab
   - Look for syntax errors

---

### ❌ npm ci Fails

**Error:** `No package-lock.json found`

**Solution:**
```bash
npm install  # Generates package-lock.json
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

---

### ❌ Out of Memory Error During Build

**Symptoms:**
```
JavaScript heap out of memory
```

**Solution:**

Add to `package.json` scripts:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS=--max-old-space-size=4096 vite build"
  }
}
```

---

### ❌ Slow Build Times

**Optimization Tips:**

1. **Enable Dependency Pre-bundling:**
   Already configured in `vite.config.ts`

2. **Use Code Splitting:**
   Already enabled with React vendor chunks

3. **Check Bundle Size:**
   ```bash
   npm run build
   ```
   Look at output sizes

4. **Remove Unused Dependencies:**
   ```bash
   npm prune
   ```

---

## Getting Help

If you encounter an issue not listed here:

1. **Check GitHub Actions Logs:**
   - https://github.com/Waqar-743/Skardu-Organics-site.new/actions
   - Click on failed workflow
   - Review detailed logs

2. **Check Documentation:**
   - [DEPLOYMENT.md](DEPLOYMENT.md)
   - [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)
   - [FIXES_SUMMARY.md](FIXES_SUMMARY.md)

3. **Search Existing Issues:**
   - Check if others had similar problems
   - GitHub Issues or Vite discussions

4. **Create an Issue:**
   - Include error message
   - Include relevant logs
   - Describe steps to reproduce

---

## Quick Fixes Checklist

Before asking for help, try these:

- [ ] Node.js version is 20+ (`node --version`)
- [ ] Dependencies installed (`npm install`)
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Base path in vite.config.ts matches repo name
- [ ] Workflow file in `.github/workflows/deploy.yml`
- [ ] Branch name matches workflow trigger
- [ ] No syntax errors in workflow YAML
- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview works locally (`npm run preview`)

---

## Status Check Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Test build locally
npm run build

# Preview production build
npm run preview

# Check git status
git status

# Check git remote
git remote -v

# View recent commits
git log --oneline -5
```

---

**Last Updated:** November 20, 2025
