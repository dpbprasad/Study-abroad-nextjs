'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  published?: boolean;
  comments: number;
}

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Blog post deleted successfully!');
        fetchBlogs();
      } else {
        alert('Failed to delete blog post');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Error deleting blog post');
    }
  }

  const categories = ['all', ...Array.from(new Set(blogs.map(b => b.category)))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || blog.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Blog Posts</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Blog Posts</h1>
        <p>Manage your blog posts and articles</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-card-header-actions">
            <input
              type="text"
              className="admin-input"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginRight: '10px' }}
            />
            <select
              className="admin-input"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{ marginRight: '10px', maxWidth: '200px' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <Link href="/admin/blog/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              New Blog Post
            </Link>
          </div>
        </div>

        <div className="admin-card-body">
          {filteredBlogs.length === 0 ? (
            <p>No blog posts found.</p>
          ) : (
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Comments</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id}>
                      <td>
                        <strong>{blog.title}</strong>
                        <br />
                        <small style={{ color: '#666' }}>{blog.slug}</small>
                      </td>
                      <td>{blog.author}</td>
                      <td>
                        <span className="admin-badge admin-badge-secondary">
                          {blog.category}
                        </span>
                      </td>
                      <td>{blog.date}</td>
                      <td>{blog.comments}</td>
                      <td>
                        {blog.published !== false ? (
                          <span className="admin-badge admin-badge-success">Published</span>
                        ) : (
                          <span className="admin-badge admin-badge-warning">Draft</span>
                        )}
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <Link
                            href={`/admin/blog/${blog.id}`}
                            className="admin-btn admin-btn-sm admin-btn-primary"
                            title="Edit"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <button
                            onClick={() => handleDelete(blog.id, blog.title)}
                            className="admin-btn admin-btn-sm admin-btn-danger"
                            title="Delete"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <div className="admin-card" style={{ padding: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Total Posts</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{blogs.length}</p>
        </div>
        <div className="admin-card" style={{ padding: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Published</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#83CD20' }}>
            {blogs.filter(b => b.published !== false).length}
          </p>
        </div>
        <div className="admin-card" style={{ padding: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>Total Comments</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
            {blogs.reduce((sum, b) => sum + b.comments, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
