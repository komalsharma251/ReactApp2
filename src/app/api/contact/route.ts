import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  console.log("New contact message:", body);

  return NextResponse.json({
    message: "Message sent successfully.",
  });
}