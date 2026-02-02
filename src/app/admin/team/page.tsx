'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  order: number;
}

export default function TeamListPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTeam();
  }, []);

  async function fetchTeam() {
    try {
      const response = await fetch('/api/team');
      const data = await response.json();
      setTeam(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team:', error);
      setLoading(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to remove "${name}" from the team?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/team/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Team member removed successfully!');
        fetchTeam();
      } else {
        alert('Failed to remove team member');
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
      alert('Error deleting team member');
    }
  }

  const filteredTeam = team.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Team Members</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Team Members</h1>
        <p>Manage your team members and advisors</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-card-header-actions">
            <input
              type="text"
              className="admin-input"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href="/admin/team/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add Team Member
            </Link>
          </div>
        </div>

        <div className="admin-card-body">
          {filteredTeam.length === 0 ? (
            <p>No team members found.</p>
          ) : (
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTeam.map((member) => (
                    <tr key={member.id}>
                      <td>{member.order}</td>
                      <td><strong>{member.name}</strong></td>
                      <td>{member.role}</td>
                      <td>{member.email || 'N/A'}</td>
                      <td style={{ maxWidth: '300px' }}>
                        {member.description.substring(0, 80)}...
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <Link
                            href={`/admin/team/${member.id}`}
                            className="admin-btn admin-btn-sm admin-btn-primary"
                            title="Edit"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <button
                            onClick={() => handleDelete(member.id, member.name)}
                            className="admin-btn admin-btn-sm admin-btn-danger"
                            title="Delete"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
