import { NextRequest, NextResponse } from "next/server";
import { updateRSVP } from "@/app/utils/sheets";

export async function POST(req: NextRequest) {
    try {
        const { token, isAttending, note } = await req.json();

        if (!token || typeof isAttending !== "boolean") {
            return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
        }

        await updateRSVP(token, isAttending, note || "");
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}