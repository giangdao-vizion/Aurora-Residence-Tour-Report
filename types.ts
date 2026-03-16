
export interface KpiData {
  label: string;
  value: string | number;
  trend: number;
  icon: string;
  color: string;
  tooltip?: string;
}

export interface ChartDataItem {
  name: string;
  [key: string]: string | number;
}

export interface TableRow {
  type: string;
  views: number;
  leads: number;
  cvr: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Added Hotspot interface for 360 tour interaction points
export interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
}

// Added Tour interface for virtual tour data
export interface Tour {
  id: string;
  title: string;
  location: string;
  description: string;
  coverImage: string;
  panoramaImage: string;
  views: number;
  hotspots: Hotspot[];
}

// Added AnalyticsStats interface for dashboard summary metrics
export interface AnalyticsStats {
  totalTours: number;
  totalViews: number;
  activeUsers: number;
  storageUsed: string;
}
