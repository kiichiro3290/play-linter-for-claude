import { NextResponse } from "next/server";
import { getTasks } from "../../../src/entities/task/model";

export async function GET() {
	try {
		const tasks = getTasks();
		return NextResponse.json(tasks);
	} catch (error) {
		console.error("Failed to fetch tasks data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch tasks data" },
			{ status: 500 },
		);
	}
}
