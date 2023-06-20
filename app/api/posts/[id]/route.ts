import { NextResponse } from 'next/server';

// Update a Post
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  // update logic...
  return NextResponse.json(params.id, { status: 200 });
}

// Delete a Post
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // delete logic...
  return NextResponse.json(params.id, { status: 200 });
}
