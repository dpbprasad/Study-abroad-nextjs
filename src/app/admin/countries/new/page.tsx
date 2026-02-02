'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function NewCountryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState<{flag: boolean, background: boolean}>({
    flag: false,
    background: false
  });
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    flag: '',
    flagGif: '',
    backgroundImage: '',
    title: '',
    description: '',
    highlights: ['', '', '', ''],
    quickFacts: {
      language: '',
      currency: '',
      timezone: '',
      studyDuration: ''
    }
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleHighlightChange(index: number, value: string) {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData(prev => ({ ...prev, highlights: newHighlights }));
  }

  function handleQuickFactChange(key: string, value: string) {
    setFormData(prev => ({
      ...prev,
      quickFacts: { ...prev.quickFacts, [key]: value }
    }));
  }

  function generateSlug() {
    const slug = formData.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    setFormData(prev => ({ ...prev, slug }));
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>, type: 'flag' | 'background') {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(prev => ({ ...prev, [type]: true }));

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        if (type === 'flag') {
          setFormData(prev => ({ ...prev, flagGif: data.url }));
        } else {
          setFormData(prev => ({ ...prev, backgroundImage: data.url }));
        }
        alert('File uploaded successfully!');
      } else {
        alert(`Upload failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploading(prev => ({ ...prev, [type]: false }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/countries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          highlights: formData.highlights.filter(h => h.trim() !== ''),
        }),
      });

      if (response.ok) {
        alert('Country added successfully!');
        router.push('/admin/countries');
      } else {
        const error = await response.json();
        alert(`Failed to add country: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding country:', error);
      alert('Error adding country');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="admin-header-actions">
        <div className="admin-page-header">
          <h1>Add New Country</h1>
          <p>Create a new study destination</p>
        </div>
        <Link href="/admin/countries" className="admin-btn admin-btn-secondary">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Countries
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Basic Information</h2>
          </div>
          <div className="admin-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Country Name *</label>
                <input
                  type="text"
                  name="name"
                  className="admin-form-input"
                  value={formData.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={generateSlug}
                  required
                  placeholder="e.g., Australia"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  className="admin-form-input"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  placeholder="e.g., australia"
                />
                <small className="admin-form-help">URL-friendly version (auto-generated from name)</small>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Flag Emoji *</label>
                <input
                  type="text"
                  name="flag"
                  className="admin-form-input"
                  value={formData.flag}
                  onChange={handleChange}
                  required
                  placeholder="🇦🇺"
                  style={{ fontSize: '24px' }}
                />
                <small className="admin-form-help">Use emoji flag (copy from emojipedia.org)</small>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Flag GIF</label>
                <input
                  type="file"
                  className="admin-form-input"
                  accept="image/gif,image/png"
                  onChange={(e) => handleFileUpload(e, 'flag')}
                  disabled={uploading.flag}
                  style={{ padding: '8px' }}
                />
                <small className="admin-form-help">
                  <strong>Supported:</strong> GIF, PNG | <strong>Max size:</strong> 5MB | <strong>Recommended:</strong> 200x200px animated GIF
                </small>
                {formData.flagGif && (
                  <div style={{ marginTop: '10px' }}>
                    <small style={{ color: '#28a745', display: 'block' }}>✓ Uploaded: {formData.flagGif}</small>
                    <Image src={formData.flagGif} alt="Flag preview" width={100} height={100} style={{ maxWidth: '100px', marginTop: '5px' }} />
                  </div>
                )}
                {uploading.flag && <small style={{ color: '#007bff' }}>Uploading...</small>}
                <input
                  type="text"
                  name="flagGif"
                  className="admin-form-input"
                  value={formData.flagGif}
                  onChange={handleChange}
                  placeholder="Or enter URL manually"
                  style={{ marginTop: '10px' }}
                />
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Background Image *</label>
                <input
                  type="file"
                  className="admin-form-input"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={(e) => handleFileUpload(e, 'background')}
                  disabled={uploading.background}
                  style={{ padding: '8px' }}
                />
                <small className="admin-form-help">
                  <strong>Supported:</strong> JPEG, PNG, WebP | <strong>Max size:</strong> 5MB | <strong>Recommended:</strong> 1920x1080px or higher
                </small>
                {formData.backgroundImage && (
                  <div style={{ marginTop: '10px' }}>
                    <small style={{ color: '#28a745', display: 'block' }}>✓ Uploaded: {formData.backgroundImage}</small>
                    <Image src={formData.backgroundImage} alt="Background preview" width={300} height={200} style={{ maxWidth: '300px', marginTop: '5px' }} />
                  </div>
                )}
                {uploading.background && <small style={{ color: '#007bff' }}>Uploading...</small>}
                <input
                  type="text"
                  name="backgroundImage"
                  className="admin-form-input"
                  value={formData.backgroundImage}
                  onChange={handleChange}
                  required
                  placeholder="Or enter URL manually"
                  style={{ marginTop: '10px' }}
                />
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Title *</label>
                <input
                  type="text"
                  name="title"
                  className="admin-form-input"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Study in Australia"
                />
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Description *</label>
                <textarea
                  name="description"
                  className="admin-form-textarea"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Study in one of the world's most liveable countries with world-class education"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="admin-card" style={{ marginTop: '20px' }}>
          <div className="admin-card-header">
            <h2>Highlights</h2>
          </div>
          <div className="admin-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="admin-form-group">
                  <label className="admin-form-label">Highlight {index + 1}</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.highlights[index]}
                    onChange={(e) => handleHighlightChange(index, e.target.value)}
                    placeholder={`e.g., ${['High quality of life', 'World-class universities', 'Post-study work opportunities', 'Safe and welcoming'][index]}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card" style={{ marginTop: '20px' }}>
          <div className="admin-card-header">
            <h2>Quick Facts</h2>
          </div>
          <div className="admin-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="admin-form-group">
                <label className="admin-form-label">Language</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.quickFacts.language}
                  onChange={(e) => handleQuickFactChange('language', e.target.value)}
                  placeholder="English"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Currency</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.quickFacts.currency}
                  onChange={(e) => handleQuickFactChange('currency', e.target.value)}
                  placeholder="AUD"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Timezone</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.quickFacts.timezone}
                  onChange={(e) => handleQuickFactChange('timezone', e.target.value)}
                  placeholder="UTC+10"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Study Duration</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.quickFacts.studyDuration}
                  onChange={(e) => handleQuickFactChange('studyDuration', e.target.value)}
                  placeholder="2-4 years"
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
            {loading ? 'Saving...' : 'Save Country'}
          </button>
          <Link href="/admin/countries" className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
