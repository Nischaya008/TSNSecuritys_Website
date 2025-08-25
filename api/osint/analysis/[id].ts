import type { VercelRequest, VercelResponse } from '@vercel/node';

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
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({
        error: "Analysis ID is required",
      });
    }

    // Simulate fetching analysis status
    // In a real implementation, this would query the database
    const mockResponse: OSINTAnalysisResponse = {
      id,
      type: "phone",
      query: "+1234567890",
      status: "completed",
      timestamp: new Date().toISOString(),
      risk_level: "medium",
      data: {
        country: "United States",
        provider: "Verizon",
        location: "New York",
        reputation: "Clean",
        confidence: 85,
      },
    };

    res.json(mockResponse);
  } catch (error) {
    console.error("Get analysis status error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
} 