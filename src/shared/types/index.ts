export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'manager';
  lastActive: Date;
}

export interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
  change: number;
  period: string;
  trend: 'up' | 'down' | 'stable';
}

export interface SalesData {
  id: string;
  product: string;
  revenue: number;
  units: number;
  date: Date;
  category: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: Date;
  createdAt: Date;
}