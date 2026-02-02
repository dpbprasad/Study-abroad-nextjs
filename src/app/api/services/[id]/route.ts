import { NextResponse } from 'next/server';

// Service data type
interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  description1: string;
  description2: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string;
  order: number;
}

// Import services data from parent route
// Note: In a real app, this would come from a database
// For now, we'll use a shared data source
import servicesData from '../data';

// GET - Fetch single service by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const services = servicesData.getAll();
    const service = services.find(s => s.id === id || s.slug === id);

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

// PATCH - Update service
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const services = servicesData.getAll();
    const index = services.findIndex(s => s.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    const updatedService: ServiceContent = {
      ...services[index],
      ...data,
      id: services[index].id // Preserve ID
    };

    servicesData.update(index, updatedService);
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const services = servicesData.getAll();
    const index = services.findIndex(s => s.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    servicesData.delete(index);
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
