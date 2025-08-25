import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { width, height } = req.query;
  
  const w = parseInt(width as string) || 150;
  const h = parseInt(height as string) || 150;
  
  // Return a simple SVG placeholder
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle" dy=".3em">
      ${w}x${h}
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.send(svg);
} 