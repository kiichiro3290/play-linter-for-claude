import { NextResponse } from "next/server";
import { getAnalyticsData } from "../../../src/entities/analytics/model";

export async function GET() {
	try {
		const analytics = getAnalyticsData();
		return NextResponse.json(analytics);
	} catch (error) {
		console.error("Failed to fetch analytics data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch analytics data" },
			{ status: 500 },
		);
	}
}
