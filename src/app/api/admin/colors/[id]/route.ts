import { NextResponse } from 'next/server';
// DISABLED: Database not available - All admin operations disabled

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}
