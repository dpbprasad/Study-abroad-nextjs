import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get single color theme
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const colorSettings = await prisma.colorSettings.findUnique({
      where: { id },
    });

    if (!colorSettings) {
      return NextResponse.json(
        { error: 'Color theme not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(colorSettings);
  } catch (error: any) {
    console.error('Error fetching color theme:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch color theme' },
      { status: 500 }
    );
  }
}

// Update color theme
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const colorSettings = await prisma.colorSettings.update({
      where: { id },
      data: {
        name: body.name,
        lightGreen: body.lightGreen,
        darkGreen: body.darkGreen,
      },
    });

    return NextResponse.json(colorSettings);
  } catch (error: any) {
    console.error('Error updating color theme:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update color theme' },
      { status: 500 }
    );
  }
}

// Delete color theme
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.colorSettings.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Color theme deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting color theme:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete color theme' },
      { status: 500 }
    );
  }
}
