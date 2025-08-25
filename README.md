# TSN Security Website

A full-stack security website built with React, TypeScript, and Express.js, featuring OSINT analysis capabilities.

## 🚀 Deployment on Vercel

This project is configured for deployment on Vercel with both frontend and backend functionality.

### Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Node.js**: Version 18 or higher

### Deployment Steps

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

2. **Environment Variables** (if needed):
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add any required environment variables

3. **Deploy**:
   - Vercel will automatically build and deploy your project
   - The build process will:
     - Install dependencies
     - Run `npm run build` (builds the React frontend)
     - Deploy the static files and API routes

### Project Structure

```
├── client/                 # React frontend
├── server/                 # Express.js backend (for local development)
├── api/                    # Vercel API routes
│   ├── ping.ts
│   ├── demo.ts
│   ├── osint/
│   │   ├── analyze.ts
│   │   └── analysis/[id].ts
│   └── placeholder/[width]/[height].ts
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

### API Endpoints

- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint
- `POST /api/osint/analyze` - Start OSINT analysis
- `GET /api/osint/analysis/:id` - Get analysis status
- `GET /api/placeholder/:width/:height` - Placeholder images

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck
```

### Features

- **Frontend**: React with TypeScript, Tailwind CSS, Radix UI components
- **Backend**: Express.js API routes (deployed as Vercel functions)
- **OSINT Analysis**: Simulated intelligence gathering platform
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful, accessible components

### Why Vercel?

✅ **Single Repository Deployment**: Both frontend and backend deploy from one repo  
✅ **Serverless Functions**: API routes run as serverless functions  
✅ **Automatic Scaling**: Handles traffic spikes automatically  
✅ **Global CDN**: Fast loading worldwide  
✅ **Zero Configuration**: Works out of the box  
✅ **Free Tier**: Generous free tier for personal projects  

### No Separate Backend Needed

This project **does not require** separate backend deployment on services like Railway or Render because:

1. **Lightweight Backend**: Simple Express.js API with no database dependencies
2. **Serverless Architecture**: Vercel functions handle API requests
3. **Mock Data**: Currently uses simulated data (no external services)
4. **Stateless**: No persistent state that requires a dedicated server

### Future Considerations

If you later need:
- **Database**: Add Vercel Postgres or external database
- **File Storage**: Use Vercel Blob or external storage
- **Heavy Computation**: Consider background jobs or external services
- **Real-time Features**: Add WebSocket support via external services

For now, Vercel provides everything you need for a production-ready deployment! 