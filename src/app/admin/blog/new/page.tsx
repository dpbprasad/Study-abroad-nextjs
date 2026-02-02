'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '/assets/img/blog/blog-1img.png',
    author: '',
    category: 'Visa & Immigration',
    published: true
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Auto-generate slug from title
    if (name === 'title' && !formData.slug) {
      const autoSlug = value.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug: autoSlug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Blog post created successfully!');
        router.push('/admin/blog');
      } else {
        alert('Failed to create blog post');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Create New Blog Post</h1>
        <p>Write and publish a new blog article</p>
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
                  placeholder="Enter blog post title..."
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
                  placeholder="auto-generated-from-title"
                />
                <small>URL-friendly identifier (auto-generated from title)</small>
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
                  placeholder="e.g., Study Abroad Expert"
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
                  placeholder="/assets/img/blog/blog-1img.png"
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
                  placeholder="Short description that appears in blog listings (2-3 sentences)"
                ></textarea>
                <small>This will appear in blog listings and search results</small>
              </div>

              <div className="admin-form-group">
                <label htmlFor="content">Blog Content *</label>
                <textarea
                  id="content"
                  name="content"
                  className="admin-textarea"
                  value={formData.content}
                  onChange={handleChange}
                  rows={15}
                  required
                  placeholder="Write your blog post content here..."
                  style={{ fontFamily: 'monospace', fontSize: '14px' }}
                ></textarea>
                <small>Full blog post content (HTML and Markdown supported)</small>
              </div>
            </div>

            {/* Publishing Options */}
            <div className="admin-form-section">
              <h3>Publishing Options</h3>

              <div className="admin-form-group">
                <label className="admin-checkbox-label">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                  />
                  <span>Publish immediately</span>
                </label>
                <small>Uncheck to save as draft</small>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="admin-form-actions">
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                <i className="fa-solid fa-paper-plane"></i>
                {loading ? 'Creating...' : formData.published ? 'Publish Post' : 'Save Draft'}
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
