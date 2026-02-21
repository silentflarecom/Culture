import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        // @ts-ignore
        if (!session || session.user?.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const { apiKey, prompt } = await request.json();

        if (!apiKey || !prompt) {
            return NextResponse.json({ error: "Missing API Key or Prompt" }, { status: 400 });
        }

        // --- Simulating API call to Google Gemini Nano / Banana Model ---
        // In production, you would fetch from the real provider here:
        // const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-nano:generateContent?key=" + apiKey, { ... })

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulated Response matching the requested prompt styling
        const simulatedAIResponse = {
            model: "google/gemini-nano",
            latency_ms: 2014,
            status: "success",
            extractorResults: [
                { feature: "Color", hex: "#D4AF37", description: "提取到琉璃金特征" },
                { feature: "Pattern", description: "提取到正脊腾龙雕花纹路" }
            ],
            rawPrompt: prompt
        };

        return NextResponse.json(simulatedAIResponse);
    } catch (error) {
        return NextResponse.json({ error: "API integration failed" }, { status: 500 });
    }
}
