'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewServicePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description1: '',
    description2: '',
    benefits: '',
    order: 1,
    features: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' }
    ]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (index: number, field: 'title' | 'description', value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index][field] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, { title: '', description: '' }]
    }));
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service created successfully!');
        router.push('/admin/services');
      } else {
        alert('Failed to create service');
      }
    } catch (error) {
      console.error('Error creating service:', error);
      alert('Error creating service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Add New Service</h1>
        <p>Create a new service offering</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <Link href="/admin/services" className="admin-btn admin-btn-secondary">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Services
          </Link>
        </div>

        <div className="admin-card-body">
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="admin-form-section">
              <h3>Basic Information</h3>

              <div className="admin-form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="admin-input"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="slug">Slug *</label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  className="admin-input"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="e.g., student-consultation"
                  required
                />
                <small>URL-friendly identifier (lowercase, hyphens)</small>
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

            {/* Content */}
            <div className="admin-form-section">
              <h3>Content</h3>

              <div className="admin-form-group">
                <label htmlFor="description1">Description (Part 1) *</label>
                <textarea
                  id="description1"
                  name="description1"
                  className="admin-textarea"
                  value={formData.description1}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="admin-form-group">
                <label htmlFor="description2">Description (Part 2) *</label>
                <textarea
                  id="description2"
                  name="description2"
                  className="admin-textarea"
                  value={formData.description2}
                  onChange={handleChange}
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="admin-form-group">
                <label htmlFor="benefits">Benefits *</label>
                <textarea
                  id="benefits"
                  name="benefits"
                  className="admin-textarea"
                  value={formData.benefits}
                  onChange={handleChange}
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>

            {/* Features */}
            <div className="admin-form-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3>Features</h3>
                <button
                  type="button"
                  onClick={addFeature}
                  className="admin-btn admin-btn-sm admin-btn-secondary"
                >
                  <i className="fa-solid fa-plus"></i>
                  Add Feature
                </button>
              </div>

              {formData.features.map((feature, index) => (
                <div key={index} className="admin-feature-group" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h4 style={{ margin: 0 }}>Feature {index + 1}</h4>
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="admin-btn admin-btn-sm admin-btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </div>

                  <div className="admin-form-group">
                    <label>Feature Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={feature.title}
                      onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Feature Description</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={feature.description}
                      onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Service'}
              </button>
              <Link href="/admin/services" className="admin-btn admin-btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
