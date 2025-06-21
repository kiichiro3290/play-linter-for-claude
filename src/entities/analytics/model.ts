import { AnalyticsData } from "../../shared/types";

export const mockAnalytics: AnalyticsData[] = [
	{
		id: "1",
		metric: "Page Views",
		value: 12543,
		change: 12.5,
		period: "Last 30 days",
		trend: "up",
	},
	{
		id: "2",
		metric: "Unique Visitors",
		value: 8921,
		change: -3.2,
		period: "Last 30 days",
		trend: "down",
	},
	{
		id: "3",
		metric: "Conversion Rate",
		value: 4.2,
		change: 0.8,
		period: "Last 30 days",
		trend: "up",
	},
	{
		id: "4",
		metric: "Bounce Rate",
		value: 32.1,
		change: -5.4,
		period: "Last 30 days",
		trend: "up",
	},
];

export const getAnalyticsData = (): AnalyticsData[] => mockAnalytics;
