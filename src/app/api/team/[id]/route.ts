import { NextResponse } from 'next/server';

// Team member data type
interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  icon?: string;
  email?: string;
  phone?: string;
  order: number;
}

// Simple in-memory store
const teamStore = {
  data: [] as TeamMember[],
  init() {
    if (this.data.length === 0) {
      this.data = [
        {
          id: '1',
          name: 'Sarah Johnson',
          role: 'Senior Immigration Consultant',
          description: 'Hi, I am here to help you discover the perfect program that matches your dreams and goals',
          image: '/assets/img/team/team-name1.png',
          icon: '/assets/img/team/team-card-icon1.png',
          email: 'sarah.johnson@example.com',
          order: 1
        }
      ];
    }
    return this.data;
  }
};

// GET - Fetch single team member by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const team = teamStore.init();
    const member = team.find(m => m.id === id);

    if (!member) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(member);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch team member' },
      { status: 500 }
    );
  }
}

// PATCH - Update team member
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const team = teamStore.init();
    const index = team.findIndex(m => m.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    const updatedMember: TeamMember = {
      ...team[index],
      ...data,
      id: team[index].id // Preserve ID
    };

    team[index] = updatedMember;
    return NextResponse.json(updatedMember);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// DELETE - Delete team member
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const team = teamStore.init();
    const index = team.findIndex(m => m.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    team.splice(index, 1);
    return NextResponse.json({ message: 'Team member deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete team member' },
      { status: 500 }
    );
  }
}
