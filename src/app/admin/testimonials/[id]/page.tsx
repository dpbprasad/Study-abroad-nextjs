'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
  bgClass: string;
  featured?: boolean;
}

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchTestimonial(params.id as string);
    }
  }, [params.id]);

  async function fetchTestimonial(id: string) {
    try {
      const response = await fetch(`/api/testimonials/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        alert('Testimonial not found');
        router.push('/admin/testimonials');
      }
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      alert('Error loading testimonial');
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!formData) return;
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev!,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setSaving(true);

    try {
      const response = await fetch(`/api/testimonials/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Testimonial updated successfully!');
        router.push('/admin/testimonials');
      } else {
        alert('Failed to update testimonial');
      }
    } catch (error) {
      console.error('Error updating testimonial:', error);
      alert('Error updating testimonial');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !formData) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Edit Testimonial</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Edit Testimonial</h1>
        <p>Update testimonial details</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <Link href="/admin/testimonials" className="admin-btn admin-btn-secondary">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Testimonials
          </Link>
        </div>

        <div className="admin-card-body">
          <form onSubmit={handleSubmit}>
            <div className="admin-form-section">
              <h3>Client Information</h3>

              <div className="admin-form-group">
                <label htmlFor="name">Name *</label>
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
                <label htmlFor="image">Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="admin-input"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-section">
              <h3>Testimonial Content</h3>

              <div className="admin-form-group">
                <label htmlFor="text">Testimonial Text *</label>
                <textarea
                  id="text"
                  name="text"
                  className="admin-textarea"
                  value={formData.text}
                  onChange={handleChange}
                  rows={6}
                  required
                ></textarea>
              </div>
            </div>

            <div className="admin-form-section">
              <h3>Display Settings</h3>

              <div className="admin-form-group">
                <label htmlFor="bgClass">Background Style</label>
                <select
                  id="bgClass"
                  name="bgClass"
                  className="admin-input"
                  value={formData.bgClass}
                  onChange={handleChange}
                >
                  <option value="white-bg">White</option>
                  <option value="gray-bg">Gray</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-checkbox-label">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured || false}
                    onChange={handleChange}
                  />
                  <span>Mark as Featured</span>
                </label>
              </div>
            </div>

            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={saving}
              >
                {saving ? 'Updating...' : 'Update Testimonial'}
              </button>
              <Link href="/admin/testimonials" className="admin-btn admin-btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
