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

export interface OSINTStatsResponse {
  activeInvestigations: number;
  dataPointsAnalyzed: number;
  highRiskAlerts: number;
  successRate: string;
}
