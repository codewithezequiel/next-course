import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params }: Props) {
  // Fetch data from db
  // if not found, return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Zeke" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  // validate the request body,
  // if invalid, return 400,

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // fetch the user with the given id
  // if doesnt exist, return 404,
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // update user,
  // return updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const body = await request.json();
  // validate the request body,
  // if invalid, return 400,
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // fetch the user with the given id
  // if doesnt exist, return 404,
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
