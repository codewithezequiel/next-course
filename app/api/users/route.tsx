import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// caching is prevented by setting this parameter
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ezequiel" },
    { id: 2, name: "Schezny" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // Once we read the body of the request, we need to validate it.
  // if invalid, return 400 else return
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
