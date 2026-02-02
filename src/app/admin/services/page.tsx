'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  slug: string;
  title: string;
  description1: string;
  order: number;
}

export default function ServicesListPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
      setLoading(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Service deleted successfully!');
        fetchServices(); // Refresh list
      } else {
        alert('Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Error deleting service');
    }
  }

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Services</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Services</h1>
        <p>Manage your service offerings</p>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-card-header-actions">
            <input
              type="text"
              className="admin-input"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href="/admin/services/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add New Service
            </Link>
          </div>
        </div>

        <div className="admin-card-body">
          {filteredServices.length === 0 ? (
            <p>No services found.</p>
          ) : (
            <div className="admin-table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service) => (
                    <tr key={service.id}>
                      <td>{service.order}</td>
                      <td><strong>{service.title}</strong></td>
                      <td><code>{service.slug}</code></td>
                      <td style={{ maxWidth: '300px' }}>
                        {service.description1.substring(0, 100)}...
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <Link
                            href={`/admin/services/${service.id}`}
                            className="admin-btn admin-btn-sm admin-btn-primary"
                            title="Edit"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <button
                            onClick={() => handleDelete(service.id, service.title)}
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
