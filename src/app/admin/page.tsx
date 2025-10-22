'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Stats {
  countries: number;
  universities: number;
  blogPosts: number;
  testimonials: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    countries: 0,
    universities: 0,
    blogPosts: 0,
    testimonials: 0,
  });

  useEffect(() => {
    // Fetch stats
    async function fetchStats() {
      try {
        const [countriesRes, universitiesRes] = await Promise.all([
          fetch('/api/countries'),
          fetch('/api/universities'),
        ]);

        const countries = await countriesRes.json();
        const universities = await universitiesRes.json();

        setStats({
          countries: countries.length || 0,
          universities: universities.length || 0,
          blogPosts: 0,
          testimonials: 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div>
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Welcome to your Study Abroad admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon primary">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.countries}</h3>
            <p>Countries</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon secondary">
            <i className="fa-solid fa-building-columns"></i>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.universities}</h3>
            <p>Universities</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon success">
            <i className="fa-solid fa-newspaper"></i>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.blogPosts}</h3>
            <p>Blog Posts</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon warning">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.testimonials}</h3>
            <p>Testimonials</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Quick Actions</h2>
        </div>
        <div className="admin-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <Link href="/admin/countries/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add Country
            </Link>
            <Link href="/admin/universities/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add University
            </Link>
            <Link href="/admin/blog/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Write Blog Post
            </Link>
            <Link href="/admin/testimonials/new" className="admin-btn admin-btn-primary">
              <i className="fa-solid fa-plus"></i>
              Add Testimonial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
