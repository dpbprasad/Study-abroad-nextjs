import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // TEMPORARILY DISABLED

// Get active color settings
export async function GET() {
  // TEMPORARILY DISABLED: Database color fetching
  // Returning default colors to prevent Vercel deployment errors

  const colorSettings = {
    id: 'default',
    name: 'Default Colors',
    lightGreen: '#86BC42',  // Default light green
    darkGreen: '#044421',   // Default dark green
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return NextResponse.json(colorSettings);

  /* ORIGINAL CODE - DISABLED FOR NOW
  try {
    // Try to find active theme
    let colorSettings = await prisma.colorSettings.findFirst({
      where: { isActive: true },
    });

    // If no active theme, return default colors
    if (!colorSettings) {
      colorSettings = {
        id: 'default',
        name: 'Default Colors',
        lightGreen: '#83CD20',
        darkGreen: '#034833',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    return NextResponse.json(colorSettings);
  } catch (error: any) {
    console.error('Error fetching color settings:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch color settings' },
      { status: 500 }
    );
  }
  */
}
