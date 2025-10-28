import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // DISABLED - No database

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // DISABLED: Database not available
  return NextResponse.json(
    { error: 'University details API temporarily disabled' },
    { status: 503 }
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // DISABLED: Database not available
  return NextResponse.json(
    { error: 'Update operation temporarily disabled' },
    { status: 503 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // DISABLED: Database not available
  return NextResponse.json(
    { error: 'Delete operation temporarily disabled' },
    { status: 503 }
  );
}
