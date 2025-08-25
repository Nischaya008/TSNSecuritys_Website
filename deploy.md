# 🚀 Vercel Deployment Guide

## Quick Deployment Steps

### 1. Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

1. **Visit [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Import your repository** from the list
5. **Configure project settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist/spa` (auto-detected)
   - Install Command: `npm install` (auto-detected)
6. **Click "Deploy"**

### 3. Verify Deployment

After deployment, Vercel will provide you with:
- **Production URL**: `https://your-project.vercel.app`
- **Preview URLs**: For each pull request

### 4. Test Your Application

Visit your production URL and test:
- ✅ Homepage loads correctly
- ✅ Navigation works
- ✅ API endpoints respond:
  - `https://your-project.vercel.app/api/ping`
  - `https://your-project.vercel.app/api/demo`
  - `https://your-project.vercel.app/api/osint/analyze` (POST)

### 5. Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS records as instructed

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### API Route Issues
- Check function logs in Vercel dashboard
- Verify API routes are in the `api/` directory
- Test endpoints locally first

### Environment Variables
- Add any required environment variables in Vercel dashboard
- Go to Settings → Environment Variables
- Redeploy after adding variables

## Success! 🎉

Your TSN Security Website is now live on Vercel with:
- ✅ Frontend: React application
- ✅ Backend: API routes as serverless functions
- ✅ Global CDN for fast loading
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests

No separate backend deployment needed! Everything runs on Vercel's serverless infrastructure. 