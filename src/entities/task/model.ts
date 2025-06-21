import { Task } from "../../shared/types";

export const mockTasks: Task[] = [
	{
		id: "1",
		title: "Review Q1 Analytics Report",
		description: "Analyze performance metrics and prepare summary",
		status: "in_progress",
		priority: "high",
		assignee: "John Doe",
		dueDate: new Date("2024-01-20"),
		createdAt: new Date("2024-01-10"),
	},
	{
		id: "2",
		title: "Update User Dashboard UI",
		description: "Implement new design components",
		status: "pending",
		priority: "medium",
		assignee: "Jane Smith",
		dueDate: new Date("2024-01-25"),
		createdAt: new Date("2024-01-12"),
	},
	{
		id: "3",
		title: "Database Migration",
		description: "Migrate user data to new schema",
		status: "completed",
		priority: "high",
		assignee: "Mike Johnson",
		dueDate: new Date("2024-01-15"),
		createdAt: new Date("2024-01-08"),
	},
	{
		id: "4",
		title: "Customer Support Training",
		description: "Conduct training session for new features",
		status: "pending",
		priority: "low",
		assignee: "John Doe",
		dueDate: new Date("2024-01-30"),
		createdAt: new Date("2024-01-14"),
	},
];

export const getTasks = (): Task[] => mockTasks;

export const getTasksByStatus = (status: Task["status"]): Task[] =>
	mockTasks.filter((task) => task.status === status);

export const getTaskStats = () => {
	const stats = mockTasks.reduce(
		(acc, task) => {
			acc[task.status] = (acc[task.status] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	return stats;
};
