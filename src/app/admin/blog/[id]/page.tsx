'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  date: string;
  category: string;
  published?: boolean;
  comments: number;
}

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<BlogPost | null>(null);

  const categories = [
    'Visa & Immigration',
    'University Selection',
    'Scholarships & Finance',
    'Test Preparation',
    'Student Life',
    'Career & Employment',
    'Travel Tips',
    'Cultural Insights'
  ];

  useEffect(() => {
    if (params.id) {
      fetchBlogPost(params.id as string);
    }
  }, [params.id]);

  async function fetchBlogPost(id: string) {
    try {
      const response = await fetch(`/api/blogs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        alert('Blog post not found');
        router.push('/admin/blog');
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      alert('Error loading blog post');
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
      const response = await fetch(`/api/blogs/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Blog post updated successfully!');
        router.push('/admin/blog');
      } else {
        alert('Failed to update blog post');
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert('Error updating blog post');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !formData) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Edit Blog Post</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Edit Blog Post</h1>
        <p>Update blog post details and content</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <Link href="/admin/blog" className="admin-btn admin-btn-secondary">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Blog Posts
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
                <label htmlFor="slug">URL Slug *</label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  className="admin-input"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                />
                <small>URL-friendly identifier</small>
              </div>

              <div className="admin-form-group">
                <label htmlFor="author">Author *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="admin-input"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  className="admin-input"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label htmlFor="image">Featured Image URL</label>
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
                <label htmlFor="date">Published Date</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="admin-input"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="e.g., January 15, 2025"
                />
              </div>
            </div>

            {/* Content */}
            <div className="admin-form-section">
              <h3>Content</h3>

              <div className="admin-form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  className="admin-textarea"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  required
                ></textarea>
                <small>Short description for listings</small>
              </div>

              <div className="admin-form-group">
                <label htmlFor="content">Blog Content *</label>
                <textarea
                  id="content"
                  name="content"
                  className="admin-textarea"
                  value={formData.content || ''}
                  onChange={handleChange}
                  rows={15}
                  required
                  style={{ fontFamily: 'monospace', fontSize: '14px' }}
                ></textarea>
                <small>Full blog post content</small>
              </div>
            </div>

            {/* Meta Information */}
            <div className="admin-form-section">
              <h3>Meta Information</h3>

              <div className="admin-form-group">
                <label htmlFor="comments">Comments Count</label>
                <input
                  type="number"
                  id="comments"
                  name="comments"
                  className="admin-input"
                  value={formData.comments}
                  onChange={handleChange}
                  min="0"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-checkbox-label">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published !== false}
                    onChange={handleChange}
                  />
                  <span>Published</span>
                </label>
                <small>Uncheck to save as draft</small>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={saving}
              >
                <i className="fa-solid fa-save"></i>
                {saving ? 'Updating...' : 'Update Post'}
              </button>
              <Link href="/admin/blog" className="admin-btn admin-btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
