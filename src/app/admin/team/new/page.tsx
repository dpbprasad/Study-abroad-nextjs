'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewTeamMemberPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    image: '/assets/img/team/team-name1.png',
    icon: '/assets/img/team/team-card-icon1.png',
    email: '',
    phone: '',
    order: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Team member added successfully!');
        router.push('/admin/team');
      } else {
        alert('Failed to add team member');
      }
    } catch (error) {
      console.error('Error adding team member:', error);
      alert('Error adding team member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Add Team Member</h1>
        <p>Add a new team member or advisor</p>
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
                  placeholder="e.g., Senior Immigration Consultant"
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
                  placeholder="Brief introduction or bio..."
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
                  value={formData.email}
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
                  value={formData.phone}
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
                <small>Default: /assets/img/team/team-name1.png</small>
              </div>

              <div className="admin-form-group">
                <label htmlFor="icon">Icon URL</label>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="admin-input"
                  value={formData.icon}
                  onChange={handleChange}
                />
                <small>Optional decorative icon</small>
              </div>
            </div>

            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Team Member'}
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
