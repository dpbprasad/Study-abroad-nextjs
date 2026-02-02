'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewTestimonialPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    text: '',
    image: '/assets/img/testimonial/testimonial-dp.png',
    bgClass: 'white-bg',
    featured: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Testimonial created successfully!');
        router.push('/admin/testimonials');
      } else {
        alert('Failed to create testimonial');
      }
    } catch (error) {
      console.error('Error creating testimonial:', error);
      alert('Error creating testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Add New Testimonial</h1>
        <p>Add a client testimonial or success story</p>
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
                  placeholder="e.g., Student at University of Toronto"
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
                <small>Default: /assets/img/testimonial/testimonial-dp.png</small>
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
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  <span>Mark as Featured</span>
                </label>
                <small>Featured testimonials are highlighted on the homepage</small>
              </div>
            </div>

            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Testimonial'}
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
