'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface University {
  id: string;
  name: string;
}

interface Country {
  id: string;
  slug: string;
  name: string;
  flag: string;
  flagGif: string | null;
  title: string;
  description: string;
  universities: University[];
  createdAt: string;
}

export default function CountriesListPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"? This will also delete all universities in this country.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/countries/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Country deleted successfully!');
        fetchCountries(); // Refresh list
      } else {
        alert('Failed to delete country');
      }
    } catch (error) {
      console.error('Error deleting country:', error);
      alert('Error deleting country');
    }
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Countries</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-header-actions">
        <div className="admin-page-header">
          <h1>Countries</h1>
          <p>Manage study destinations and their universities</p>
        </div>
        <Link href="/admin/countries/new" className="admin-btn admin-btn-primary">
          <i className="fa-solid fa-plus"></i>
          Add Country
        </Link>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>{countries.length} Countries Total</h2>
          <div>
            <input
              type="text"
              className="admin-form-input"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
        </div>
        <div className="admin-card-body" style={{ padding: 0 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Title</th>
                <th>Universities</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCountries.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px' }}>
                    No countries found
                  </td>
                </tr>
              ) : (
                filteredCountries.map((country) => (
                  <tr key={country.id}>
                    <td>
                      <span style={{ fontSize: '32px' }}>{country.flag}</span>
                    </td>
                    <td>
                      <strong>{country.name}</strong>
                    </td>
                    <td>
                      <code>{country.slug}</code>
                    </td>
                    <td>{country.title}</td>
                    <td>
                      <span className="admin-badge admin-badge-success">
                        {country.universities.length} Unis
                      </span>
                    </td>
                    <td>
                      {new Date(country.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <Link
                          href={`/admin/countries/${country.id}`}
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                        >
                          <i className="fa-solid fa-edit"></i>
                          Edit
                        </Link>
                        <Link
                          href={`/admin/countries/${country.id}/universities`}
                          className="admin-btn admin-btn-primary admin-btn-sm"
                        >
                          <i className="fa-solid fa-building-columns"></i>
                          Universities
                        </Link>
                        <button
                          onClick={() => handleDelete(country.id, country.name)}
                          className="admin-btn admin-btn-danger admin-btn-sm"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
