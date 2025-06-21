import { NextRequest, NextResponse } from "next/server";
import { getSalesData } from "../../../src/entities/sales/model";

export async function GET(request: NextRequest) {
	try {
		const sales = getSalesData();
		return NextResponse.json(sales);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch sales data" },
			{ status: 500 },
		);
	}
}
