import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get all color themes
export async function GET() {
  try {
    const colorSettings = await prisma.colorSettings.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(colorSettings);
  } catch (error: any) {
    console.error('Error fetching color settings:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch color settings' },
      { status: 500 }
    );
  }
}

// Create new color theme
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const colorSettings = await prisma.colorSettings.create({
      data: {
        name: body.name,
        lightGreen: body.lightGreen,
        darkGreen: body.darkGreen,
        isActive: body.isActive || false,
      },
    });

    // If this theme is set as active, deactivate all others
    if (body.isActive) {
      await prisma.colorSettings.updateMany({
        where: {
          id: { not: colorSettings.id },
        },
        data: {
          isActive: false,
        },
      });
    }

    return NextResponse.json(colorSettings, { status: 201 });
  } catch (error: any) {
    console.error('Error creating color settings:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create color settings' },
      { status: 500 }
    );
  }
}
