import { NextRequest, NextResponse } from "next/server";
import { mockUsers, getCurrentUser } from "../../../src/entities/user/model";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const current = searchParams.get("current");

		if (current === "true") {
			const user = getCurrentUser();
			return NextResponse.json(user);
		}

		return NextResponse.json(mockUsers);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch user data" },
			{ status: 500 },
		);
	}
}
