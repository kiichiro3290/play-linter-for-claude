import { NextRequest, NextResponse } from "next/server";
import { getTasks } from "../../../src/entities/task/model";

export async function GET(request: NextRequest) {
	try {
		const tasks = getTasks();
		return NextResponse.json(tasks);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch tasks data" },
			{ status: 500 },
		);
	}
}
