import { NextResponse } from 'next/server';
// DISABLED: Database not available - All admin operations disabled

export async function GET() {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}

export async function POST(request: Request) {
  return NextResponse.json(
    { error: 'Admin operations are temporarily disabled' },
    { status: 503 }
  );
}
