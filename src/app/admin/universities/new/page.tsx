'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Country {
  id: string;
  name: string;
  flag: string;
}

export default function NewUniversityPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: '',
    ranking: '',
    location: '',
    countryId: '',
    order: '0'
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('type', 'uni-logo');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData(prev => ({ ...prev, logo: data.url }));
        alert('Logo uploaded successfully!');
      } else {
        alert(`Upload failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading logo');
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/universities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ranking: formData.ranking ? parseInt(formData.ranking) : null,
          order: parseInt(formData.order),
        }),
      });

      if (response.ok) {
        alert('University added successfully!');
        router.push('/admin/universities');
      } else {
        const error = await response.json();
        alert(`Failed to add university: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding university:', error);
      alert('Error adding university');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="admin-header-actions">
        <div className="admin-page-header">
          <h1>Add New University</h1>
          <p>Add a university to the database</p>
        </div>
        <Link href="/admin/universities" className="admin-btn admin-btn-secondary">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Universities
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>University Information</h2>
          </div>
          <div className="admin-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">University Name *</label>
                <input
                  type="text"
                  name="name"
                  className="admin-form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., University of Sydney"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Country *</label>
                <select
                  name="countryId"
                  className="admin-form-input"
                  value={formData.countryId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="admin-form-input"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Sydney, NSW"
                />
                <small className="admin-form-help">City, State/Province</small>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Website</label>
                <input
                  type="url"
                  name="website"
                  className="admin-form-input"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.sydney.edu.au"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">World Ranking</label>
                <input
                  type="number"
                  name="ranking"
                  className="admin-form-input"
                  value={formData.ranking}
                  onChange={handleChange}
                  placeholder="e.g., 42"
                  min="1"
                />
                <small className="admin-form-help">QS World University Ranking</small>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Display Order</label>
                <input
                  type="number"
                  name="order"
                  className="admin-form-input"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                />
                <small className="admin-form-help">Order in the list (lower = first)</small>
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">University Logo *</label>
                <input
                  type="file"
                  className="admin-form-input"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  style={{ padding: '8px' }}
                />
                <small className="admin-form-help">
                  <strong>Supported:</strong> JPEG, PNG, WebP | <strong>Max size:</strong> 5MB | <strong>Recommended:</strong> 300x300px
                </small>
                {formData.logo && (
                  <div style={{ marginTop: '10px' }}>
                    <small style={{ color: '#28a745', display: 'block' }}>✓ Uploaded: {formData.logo}</small>
                    <img
                      src={formData.logo}
                      alt="Logo preview"
                      style={{
                        maxWidth: '150px',
                        marginTop: '10px',
                        border: '1px solid #ddd',
                        padding: '10px',
                        borderRadius: '8px',
                        backgroundColor: '#fff'
                      }}
                    />
                  </div>
                )}
                {uploading && <small style={{ color: '#007bff' }}>Uploading...</small>}
                <input
                  type="text"
                  name="logo"
                  className="admin-form-input"
                  value={formData.logo}
                  onChange={handleChange}
                  required
                  placeholder="Or enter logo URL manually"
                  style={{ marginTop: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save University'}
          </button>
          <Link href="/admin/universities" className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
