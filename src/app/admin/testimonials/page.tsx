'use client';

import { useEffect, useState } from 'react';
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

export default function TestimonialsListPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setLoading(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete testimonial from "${name}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Testimonial deleted successfully!');
        fetchTestimonials();
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial');
    }
  }

  const filteredTestimonials = testimonials.filter(testimonial =>
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Testimonials</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Testimonials</h1>
        <p>Manage client testimonials and success stories</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-card-header-actions">
            <input
              type="text"
              className="admin-input"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href="/admin/testimonials/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add New Testimonial
            </Link>
          </div>
        </div>

        <div className="admin-card-body">
          {filteredTestimonials.length === 0 ? (
            <p>No testimonials found.</p>
          ) : (
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Text</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTestimonials.map((testimonial) => (
                    <tr key={testimonial.id}>
                      <td><strong>{testimonial.name}</strong></td>
                      <td>{testimonial.role}</td>
                      <td style={{ maxWidth: '400px' }}>
                        {testimonial.text.substring(0, 100)}...
                      </td>
                      <td>
                        {testimonial.featured ? (
                          <span className="admin-badge admin-badge-success">Featured</span>
                        ) : (
                          <span className="admin-badge admin-badge-secondary">Regular</span>
                        )}
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <Link
                            href={`/admin/testimonials/${testimonial.id}`}
                            className="admin-btn admin-btn-sm admin-btn-primary"
                            title="Edit"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <button
                            onClick={() => handleDelete(testimonial.id, testimonial.name)}
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
    </div>
  );
}
