'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface University {
  id: string;
  name: string;
  logo: string;
  website: string | null;
  ranking: number | null;
  location: string | null;
  countryId: string;
  order: number;
  country: Country;
  createdAt: string;
}

export default function UniversitiesListPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountryId, setFilterCountryId] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchUniversities();
    fetchCountries();
  }, []);

  async function fetchUniversities() {
    try {
      const response = await fetch('/api/universities');
      const data = await response.json();
      setUniversities(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching universities:', error);
      setLoading(false);
    }
  }

  async function fetchCountries() {
    try {
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/universities/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('University deleted successfully!');
        fetchUniversities(); // Refresh list
      } else {
        alert('Failed to delete university');
      }
    } catch (error) {
      console.error('Error deleting university:', error);
      alert('Error deleting university');
    }
  }

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (uni.location?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchesCountry = !filterCountryId || uni.countryId === filterCountryId;
    return matchesSearch && matchesCountry;
  });

  if (loading) {
    return (
      <div>
        <div className="admin-page-header">
          <h1>Universities</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="admin-header-actions">
        <div className="admin-page-header">
          <h1>Universities</h1>
          <p>Manage universities and their details</p>
        </div>
        <Link href="/admin/universities/new" className="admin-btn admin-btn-primary">
          <i className="fa-solid fa-plus"></i>
          Add University
        </Link>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>{universities.length} Universities Total</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select
              className="admin-form-input"
              value={filterCountryId}
              onChange={(e) => setFilterCountryId(e.target.value)}
              style={{ width: '200px' }}
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="admin-form-input"
              placeholder="Search universities..."
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
                <th>Logo</th>
                <th>Name</th>
                <th>Country</th>
                <th>Location</th>
                <th>Ranking</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '40px' }}>
                    No universities found
                  </td>
                </tr>
              ) : (
                filteredUniversities.map((uni) => (
                  <tr key={uni.id}>
                    <td>
                      {uni.logo && (
                        <img
                          src={uni.logo}
                          alt={uni.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                          }}
                        />
                      )}
                    </td>
                    <td>
                      <strong>{uni.name}</strong>
                      {uni.website && (
                        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                          <a href={uni.website} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-external-link-alt"></i> Website
                          </a>
                        </div>
                      )}
                    </td>
                    <td>
                      <span style={{ fontSize: '20px', marginRight: '8px' }}>{uni.country.flag}</span>
                      {uni.country.name}
                    </td>
                    <td>{uni.location || '-'}</td>
                    <td>
                      {uni.ranking ? (
                        <span className="admin-badge admin-badge-success">
                          #{uni.ranking}
                        </span>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>
                      <span className="admin-badge admin-badge-primary">
                        {uni.order}
                      </span>
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <Link
                          href={`/admin/universities/${uni.id}`}
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                        >
                          <i className="fa-solid fa-edit"></i>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(uni.id, uni.name)}
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
