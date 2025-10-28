import { NextResponse } from 'next/server';
// DISABLED: Database not available - All admin operations disabled

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}
