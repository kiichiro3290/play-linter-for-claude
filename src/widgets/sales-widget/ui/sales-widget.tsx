"use client";

import { useState, useEffect } from "react";
import { Card, Chart } from "../../../shared/ui";
import { SalesData } from "../../../shared/types";

export const SalesWidget = () => {
	const [salesData, setSalesData] = useState<SalesData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSales = async () => {
			try {
				const response = await fetch("/api/sales");
				const data = await response.json();
				setSalesData(data);
			} catch (error) {
				console.error("Failed to fetch sales:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchSales();
	}, []);

	const totalRevenue = salesData.reduce(
		(total, sale) => total + sale.revenue,
		0,
	);

	const categoryData = salesData.reduce(
		(acc, sale) => {
			acc[sale.category] = (acc[sale.category] || 0) + sale.revenue;
			return acc;
		},
		{} as Record<string, number>,
	);

	const chartData = Object.entries(categoryData).map(
		([name, value], index) => ({
			name,
			value,
			color: `hsl(${index * 90}, 70%, 50%)`,
		}),
	);

	if (loading) {
		return (
			<Card title="Sales Overview">
				<div className="flex items-center justify-center h-48">
					<div className="text-gray-500">Loading sales...</div>
				</div>
			</Card>
		);
	}

	return (
		<Card title="Sales Overview">
			<div className="mb-6">
				<div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
					${(totalRevenue / 100).toLocaleString()}
				</div>
				<div className="text-sm text-gray-600 dark:text-gray-400">
					Total Revenue (Last 7 days)
				</div>
			</div>

			<div className="mb-6">
				<h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
					Revenue by Category
				</h4>
				<Chart data={chartData} type="pie" height={200} />
			</div>

			<div className="space-y-3">
				<h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
					Recent Sales
				</h4>
				{salesData.slice(0, 3).map((sale) => (
					<div
						key={sale.id}
						className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
					>
						<div>
							<div className="font-medium text-gray-900 dark:text-white">
								{sale.product}
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								{sale.units} units
							</div>
						</div>
						<div className="text-right">
							<div className="font-medium text-gray-900 dark:text-white">
								${(sale.revenue / 100).toLocaleString()}
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								{sale.category}
							</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};
