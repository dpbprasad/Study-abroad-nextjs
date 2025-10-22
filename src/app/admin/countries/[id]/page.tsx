'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  name: string;
  slug: string;
  flag: string;
  flagGif: string;
  backgroundImage: string;
  title: string;
  description: string;
  highlights: string[];
  quickFacts: {
    language: string;
    currency: string;
    timezone: string;
    studyDuration: string;
  };
}

export default function EditCountryPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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

  useEffect(() => {
    fetchCountry();
  }, [params.id]);

  async function fetchCountry() {
    try {
      const response = await fetch(`/api/countries/${params.id}`);
      const data = await response.json();

      // Ensure highlights is always an array with 4 elements
      const highlights = Array.isArray(data.highlights)
        ? [...data.highlights, '', '', '', ''].slice(0, 4)
        : ['', '', '', ''];

      // Ensure quickFacts has all required fields
      const quickFacts = {
        language: data.quickFacts?.language || '',
        currency: data.quickFacts?.currency || '',
        timezone: data.quickFacts?.timezone || '',
        studyDuration: data.quickFacts?.studyDuration || ''
      };

      setFormData({
        name: data.name || '',
        slug: data.slug || '',
        flag: data.flag || '',
        flagGif: data.flagGif || '',
        backgroundImage: data.backgroundImage || '',
        title: data.title || '',
        description: data.description || '',
        highlights,
        quickFacts
      });

      setLoading(false);
    } catch (error) {
      console.error('Error fetching country:', error);
      alert('Error loading country data');
      setLoading(false);
    }
  }

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/countries/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          highlights: formData.highlights.filter(h => h.trim() !== ''),
        }),
      });

      if (response.ok) {
        alert('Country updated successfully!');
        router.push('/admin/countries');
      } else {
        const error = await response.json();
        alert(`Failed to update country: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating country:', error);
      alert('Error updating country');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Edit Country</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-header-actions">
        <div className="admin-page-header">
          <h1>Edit Country</h1>
          <p>Update country information</p>
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
                <label className="admin-form-label">Flag GIF URL</label>
                <input
                  type="text"
                  name="flagGif"
                  className="admin-form-input"
                  value={formData.flagGif}
                  onChange={handleChange}
                  placeholder="/assets/img/country/australia-gif.gif"
                />
                <small className="admin-form-help">Animated flag GIF path</small>
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Background Image URL *</label>
                <input
                  type="text"
                  name="backgroundImage"
                  className="admin-form-input"
                  value={formData.backgroundImage}
                  onChange={handleChange}
                  required
                  placeholder="/assets/img/country/country-bg/australia-bg.jpg"
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
                    value={formData.highlights[index] || ''}
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
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Update Country'}
          </button>
          <Link href="/admin/countries" className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
