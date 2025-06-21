import { User } from "../../shared/types";

export const mockUsers: User[] = [
	{
		id: "1",
		name: "John Doe",
		email: "john@company.com",
		role: "admin",
		lastActive: new Date("2024-01-15T10:30:00"),
		avatar: "👨‍💼",
	},
	{
		id: "2",
		name: "Jane Smith",
		email: "jane@company.com",
		role: "manager",
		lastActive: new Date("2024-01-15T09:15:00"),
		avatar: "👩‍💼",
	},
	{
		id: "3",
		name: "Mike Johnson",
		email: "mike@company.com",
		role: "user",
		lastActive: new Date("2024-01-14T16:45:00"),
		avatar: "👨‍🔧",
	},
];

export const getCurrentUser = (): User => mockUsers[0];
