'use client';

import { useState, useEffect } from 'react';
import { Card, Chart } from '../../../shared/ui';
import { AnalyticsData } from '../../../shared/types';

export const AnalyticsWidget = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);
  
  const chartData = analytics.map(item => ({
    name: item.metric,
    value: item.value,
    color: item.trend === 'up' ? 'bg-green-500' : item.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
  }));

  if (loading) {
    return (
      <Card title="Analytics Overview" className="w-full">
        <div className="flex items-center justify-center h-48">
          <div className="text-gray-500">Loading analytics...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Analytics Overview" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {analytics.map((item) => (
          <div key={item.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg min-w-0">
            <div className="flex justify-between items-start mb-2 gap-2">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 truncate flex-1 min-w-0">
                {item.metric}
              </h4>
              <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ${
                item.trend === 'up' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : item.trend === 'down'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
              }`}>
                {item.change > 0 ? '+' : ''}{item.change}%
              </span>
            </div>
            <div className="text-xl xl:text-2xl font-bold text-gray-900 dark:text-white truncate">
              {item.metric.includes('Rate') ? `${item.value}%` : item.value.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
              {item.period}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 overflow-hidden">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
          Metrics Comparison
        </h4>
        <div className="overflow-x-auto">
          <Chart data={chartData} type="bar" height={120} />
        </div>
      </div>
    </Card>
  );
};