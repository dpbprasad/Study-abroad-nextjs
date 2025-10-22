import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Activate a color theme
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // First, deactivate all themes
    await prisma.colorSettings.updateMany({
      data: {
        isActive: false,
      },
    });

    // Then activate the selected theme
    const colorSettings = await prisma.colorSettings.update({
      where: { id },
      data: {
        isActive: true,
      },
    });

    return NextResponse.json(colorSettings);
  } catch (error: any) {
    console.error('Error activating color theme:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to activate color theme' },
      { status: 500 }
    );
  }
}
