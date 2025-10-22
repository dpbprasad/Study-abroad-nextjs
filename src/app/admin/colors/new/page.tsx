'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewColorThemePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lightGreen: '#83CD20',
    darkGreen: '#034833',
    isActive: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/colors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Color theme created successfully!');
        router.push('/admin/colors');
      } else {
        const error = await res.json();
        alert(`Error: ${error.error || 'Failed to create theme'}`);
      }
    } catch (error) {
      console.error('Error creating theme:', error);
      alert('Failed to create theme');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Create New Color Theme</h1>
        <p>Customize the two main colors of your website</p>
      </div>

      <div className="admin-page-actions">
        <Link href="/admin/colors" className="admin-btn admin-btn-secondary">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Themes
        </Link>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          <form onSubmit={handleSubmit}>
            {/* Theme Name */}
            <div className="admin-form-group">
              <label className="admin-form-label">
                Theme Name <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                className="admin-form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Dark Mode, Summer Theme"
              />
            </div>

            {/* Color Pickers Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '30px',
              }}
            >
              {/* Light Green */}
              <div className="admin-form-group">
                <label className="admin-form-label">Light Green (Primary Brand Color)</label>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                  Used for buttons, highlights, and primary UI elements
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="color"
                    name="lightGreen"
                    value={formData.lightGreen}
                    onChange={handleChange}
                    style={{
                      width: '80px',
                      height: '50px',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  />
                  <input
                    type="text"
                    name="lightGreen"
                    className="admin-form-input"
                    value={formData.lightGreen}
                    onChange={handleChange}
                    placeholder="#83CD20"
                    pattern="^#[0-9A-Fa-f]{6}$"
                    style={{ flex: 1 }}
                  />
                </div>
              </div>

              {/* Dark Green */}
              <div className="admin-form-group">
                <label className="admin-form-label">Dark Green (Headings & Dark Backgrounds)</label>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                  Used for headings, dark sections, and footer
                </p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="color"
                    name="darkGreen"
                    value={formData.darkGreen}
                    onChange={handleChange}
                    style={{
                      width: '80px',
                      height: '50px',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  />
                  <input
                    type="text"
                    name="darkGreen"
                    className="admin-form-input"
                    value={formData.darkGreen}
                    onChange={handleChange}
                    placeholder="#034833"
                    pattern="^#[0-9A-Fa-f]{6}$"
                    style={{ flex: 1 }}
                  />
                </div>
              </div>
            </div>

            {/* Set as Active */}
            <div className="admin-form-group">
              <label className="admin-form-label" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  style={{ width: 'auto' }}
                />
                Set as active theme
              </label>
              <p style={{ fontSize: '13px', color: '#666', marginLeft: '30px' }}>
                This will immediately apply the theme to your website
              </p>
            </div>

            {/* Preview Section */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: '600' }}>Preview</h3>
              <div
                style={{
                  padding: '30px',
                  backgroundColor: '#fff',
                  border: '2px solid #f0f0f0',
                  borderRadius: '12px',
                }}
              >
                <h2 style={{ color: formData.darkGreen, marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
                  Sample Heading with Dark Green
                </h2>
                <p style={{ color: '#727272', marginBottom: '20px', lineHeight: '1.6' }}>
                  This is how your body text will look. The dark green color is used for headings
                  and important text elements throughout your website.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    style={{
                      backgroundColor: formData.lightGreen,
                      color: 'white',
                      border: 'none',
                      padding: '12px 30px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Primary Button (Light Green)
                  </button>
                  <button
                    type="button"
                    style={{
                      backgroundColor: formData.darkGreen,
                      color: 'white',
                      border: 'none',
                      padding: '12px 30px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Dark Section Button
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
                {loading ? 'Creating...' : 'Create Theme'}
              </button>
              <Link href="/admin/colors" className="admin-btn admin-btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
