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

// Team members data store
let teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Immigration Consultant',
    description: 'Hi, I am here to help you discover the perfect program that matches your dreams and goals',
    image: '/assets/img/team/team-name1.png',
    icon: '/assets/img/team/team-card-icon1.png',
    email: 'sarah.johnson@example.com',
    order: 1
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Student Visa Specialist',
    description: 'Hi, I am dedicated to finding the right academic path that will exceed all your expectations',
    image: '/assets/img/team/team-name2.png',
    icon: '/assets/img/team/team-card-icon2.png',
    email: 'michael.chen@example.com',
    order: 2
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'IELTS/TOEFL Coach',
    description: 'Hi, I am helping you navigate visa processes smoothly so you can focus on your adventure',
    image: '/assets/img/team/team-name3.png',
    icon: '/assets/img/team/team-card-icon3.png',
    email: 'emily.rodriguez@example.com',
    order: 3
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Education Counselor',
    description: 'Hi, I am committed to supporting you every step of the way to make your international experience amazing',
    image: '/assets/img/team/team-name4.png',
    icon: '/assets/img/team/team-card-icon4.png',
    email: 'david.thompson@example.com',
    order: 4
  }
];

// GET - Fetch all team members
export async function GET() {
  try {
    return NextResponse.json(teamData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}

// POST - Create new team member
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newMember: TeamMember = {
      id: String(teamData.length + 1),
      name: data.name,
      role: data.role,
      description: data.description,
      image: data.image || '/assets/img/team/team-name1.png',
      icon: data.icon,
      email: data.email,
      phone: data.phone,
      order: data.order || teamData.length + 1
    };

    teamData.push(newMember);
    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}
