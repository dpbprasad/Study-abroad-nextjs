'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

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

export default function EditTeamMemberPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchMember(params.id as string);
    }
  }, [params.id]);

  async function fetchMember(id: string) {
    try {
      const response = await fetch(`/api/team/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        alert('Team member not found');
        router.push('/admin/team');
      }
    } catch (error) {
      console.error('Error fetching team member:', error);
      alert('Error loading team member');
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev!,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setSaving(true);

    try {
      const response = await fetch(`/api/team/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Team member updated successfully!');
        router.push('/admin/team');
      } else {
        alert('Failed to update team member');
      }
    } catch (error) {
      console.error('Error updating team member:', error);
      alert('Error updating team member');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !formData) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Edit Team Member</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Edit Team Member</h1>
        <p>Update team member details</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <Link href="/admin/team" className="admin-btn admin-btn-secondary">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Team
          </Link>
        </div>

        <div className="admin-card-body">
          <form onSubmit={handleSubmit}>
            <div className="admin-form-section">
              <h3>Basic Information</h3>

              <div className="admin-form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="admin-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="role">Role/Position *</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="admin-input"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  className="admin-textarea"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="admin-form-group">
                <label htmlFor="order">Display Order *</label>
                <input
                  type="number"
                  id="order"
                  name="order"
                  className="admin-input"
                  value={formData.order}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="admin-form-section">
              <h3>Contact Information</h3>

              <div className="admin-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="admin-input"
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="admin-input"
                  value={formData.phone || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-section">
              <h3>Media</h3>

              <div className="admin-form-group">
                <label htmlFor="image">Profile Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="admin-input"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="icon">Icon URL</label>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="admin-input"
                  value={formData.icon || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={saving}
              >
                {saving ? 'Updating...' : 'Update Team Member'}
              </button>
              <Link href="/admin/team" className="admin-btn admin-btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
