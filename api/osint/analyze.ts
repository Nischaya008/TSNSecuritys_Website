import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface OSINTAnalysisRequest {
  type: "phone" | "email" | "ip" | "crypto" | "vehicle" | "international_phone";
  query: string;
}

export interface OSINTAnalysisResponse {
  id: string;
  type: string;
  query: string;
  status: "pending" | "completed" | "failed";
  timestamp: string;
  risk_level?: "low" | "medium" | "high";
  data?: {
    country?: string;
    provider?: string;
    location?: string;
    reputation?: string;
    confidence?: number;
  };
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, query } = req.body as OSINTAnalysisRequest;

    if (!type || !query) {
      return res.status(400).json({
        error: "Missing required fields: type and query",
      });
    }

    // Generate a unique analysis ID
    const analysisId = Math.random().toString(36).substr(2, 9);

    const response: OSINTAnalysisResponse = {
      id: analysisId,
      type,
      query,
      status: "pending",
      timestamp: new Date().toISOString(),
    };

    res.json(response);
  } catch (error) {
    console.error("OSINT Analysis error:", error);
    res.status(500).json({
      error: "Internal server error during analysis",
    });
  }
} 