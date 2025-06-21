"use client";

import { AnalyticsWidget } from "../../../widgets/analytics-widget";
import { SalesWidget } from "../../../widgets/sales-widget";
import { TaskWidget } from "../../../widgets/task-widget";
import { UserProfileWidget } from "../../../widgets/user-profile-widget";

export const DashboardPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
								Dashboard
							</h1>
						</div>
						<div className="flex items-center space-x-4">
							<div className="text-sm text-gray-500 dark:text-gray-400">
								{new Date().toLocaleDateString("en-US", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</div>
							<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
								<span className="text-white text-sm font-medium">JD</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					<div className="lg:col-span-3 space-y-6">
						<AnalyticsWidget />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<SalesWidget />
							<TaskWidget />
						</div>
					</div>

					<div className="lg:col-span-1">
						<UserProfileWidget />
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Quick Actions
						</h3>
						<div className="space-y-3">
							<button className="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
								📊 Generate Report
							</button>
							<button className="w-full text-left px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
								➕ Create Task
							</button>
							<button className="w-full text-left px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
								👥 Invite User
							</button>
						</div>
					</div>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							System Status
						</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									API Status
								</span>
								<span className="text-sm text-green-600 dark:text-green-400 flex items-center">
									<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
									Online
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									Database
								</span>
								<span className="text-sm text-green-600 dark:text-green-400 flex items-center">
									<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
									Healthy
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									Storage
								</span>
								<span className="text-sm text-yellow-600 dark:text-yellow-400 flex items-center">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
									75% Used
								</span>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
							Recent Activity
						</h3>
						<div className="space-y-3 text-sm">
							<div className="flex items-start space-x-2">
								<div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
								<div>
									<p className="text-gray-900 dark:text-white">
										Task completed
									</p>
									<p className="text-gray-500 dark:text-gray-400">
										2 minutes ago
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-2">
								<div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
								<div>
									<p className="text-gray-900 dark:text-white">
										New user registered
									</p>
									<p className="text-gray-500 dark:text-gray-400">
										15 minutes ago
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-2">
								<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
								<div>
									<p className="text-gray-900 dark:text-white">
										Report generated
									</p>
									<p className="text-gray-500 dark:text-gray-400">1 hour ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
