'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ColorSettings {
  id: string;
  name: string;
  lightGreen: string;
  darkGreen: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ColorSettingsPage() {
  const [themes, setThemes] = useState<ColorSettings[]>([]);
  const [currentColors, setCurrentColors] = useState<ColorSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchThemes();
    fetchCurrentColors();
  }, []);

  const fetchThemes = async () => {
    try {
      const res = await fetch('/api/admin/colors');
      const data = await res.json();
      setThemes(data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCurrentColors = async () => {
    try {
      const res = await fetch('/api/colors');
      const data = await res.json();
      setCurrentColors(data);
    } catch (error) {
      console.error('Error fetching current colors:', error);
    }
  };

  const activateTheme = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/colors/${id}/activate`, {
        method: 'PATCH',
      });

      if (res.ok) {
        fetchThemes();
        fetchCurrentColors();
        alert('Theme activated successfully!');
        window.location.reload();
      }
    } catch (error) {
      console.error('Error activating theme:', error);
      alert('Failed to activate theme');
    }
  };

  const deleteTheme = async (id: string) => {
    if (!confirm('Are you sure you want to delete this theme?')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/colors/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchThemes();
        alert('Theme deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting theme:', error);
      alert('Failed to delete theme');
    }
  };

  const saveCurrentColors = async () => {
    if (!currentColors) return;

    const themeName = prompt('Enter a name for this theme:', 'Current Theme');
    if (!themeName) return;

    try {
      const res = await fetch('/api/admin/colors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: themeName,
          lightGreen: currentColors.lightGreen,
          darkGreen: currentColors.darkGreen,
          isActive: false,
        }),
      });

      if (res.ok) {
        alert('Current colors saved as a new theme!');
        fetchThemes();
      } else {
        alert('Failed to save theme');
      }
    } catch (error) {
      console.error('Error saving current colors:', error);
      alert('Failed to save theme');
    }
  };

  const resetToDefaults = async () => {
    if (!confirm('Are you sure you want to reset to default colors? This will create and activate a new "Default Colors" theme.')) {
      return;
    }

    try {
      const res = await fetch('/api/admin/colors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Default Colors',
          lightGreen: '#83CD20',
          darkGreen: '#034833',
          isActive: true,
        }),
      });

      if (res.ok) {
        alert('Default colors have been restored!');
        fetchThemes();
        fetchCurrentColors();
        window.location.reload();
      } else {
        alert('Failed to reset to defaults');
      }
    } catch (error) {
      console.error('Error resetting to defaults:', error);
      alert('Failed to reset to defaults');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="admin-page-header">
        <h1>Color Themes</h1>
        <p>Manage website color schemes</p>
      </div>

      {/* Current Colors Card */}
      {currentColors && (
        <div className="admin-card" style={{ marginBottom: '20px' }}>
          <div className="admin-card-header">
            <h2>Current Active Colors</h2>
          </div>
          <div className="admin-card-body">
            <div
              style={{
                border: '2px solid #83CD20',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3 style={{ marginBottom: '15px', color: '#034833' }}>{currentColors.name}</h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  marginBottom: '20px',
                  maxWidth: '600px',
                }}
              >
                {[
                  {
                    color: currentColors.lightGreen,
                    label: 'Light Green (Primary Brand Color)',
                    value: currentColors.lightGreen,
                    description: 'Used for buttons, highlights, and primary UI elements'
                  },
                  {
                    color: currentColors.darkGreen,
                    label: 'Dark Green (Headings & Dark Backgrounds)',
                    value: currentColors.darkGreen,
                    description: 'Used for headings, dark sections, and footer'
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        width: '100%',
                        height: '80px',
                        backgroundColor: item.color,
                        borderRadius: '8px',
                        border: '2px solid #ddd',
                        marginBottom: '8px',
                      }}
                    ></div>
                    <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>{item.description}</div>
                    <div style={{ fontSize: '12px', color: '#999', fontFamily: 'monospace' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={saveCurrentColors}
                  className="admin-btn admin-btn-primary"
                  style={{ fontSize: '14px', padding: '10px 20px' }}
                >
                  <i className="fa-solid fa-save"></i>
                  Save Current Colors as New Theme
                </button>
                <button
                  onClick={resetToDefaults}
                  className="admin-btn admin-btn-warning"
                  style={{ fontSize: '14px', padding: '10px 20px' }}
                >
                  <i className="fa-solid fa-rotate-left"></i>
                  Reset to Default Colors
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="admin-page-actions">
        <Link href="/admin/colors/new" className="admin-btn admin-btn-primary">
          <i className="fa-solid fa-plus"></i>
          Create New Theme
        </Link>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Saved Themes</h2>
        </div>
        <div className="admin-card-body">
          {themes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>No themes found. Create one to get started!</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '20px' }}>
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  style={{
                    border: theme.isActive ? '2px solid #83CD20' : '1px solid #E3DBD8',
                    borderRadius: '8px',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  {theme.isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#83CD20',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      ACTIVE
                    </span>
                  )}

                  <h3 style={{ marginBottom: '15px' }}>{theme.name}</h3>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '15px',
                      marginBottom: '15px',
                      maxWidth: '500px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '100%',
                          height: '60px',
                          backgroundColor: theme.lightGreen,
                          borderRadius: '6px',
                          border: '2px solid #ddd',
                          marginBottom: '6px',
                        }}
                      ></div>
                      <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>Light Green</div>
                      <small style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace' }}>{theme.lightGreen}</small>
                    </div>
                    <div>
                      <div
                        style={{
                          width: '100%',
                          height: '60px',
                          backgroundColor: theme.darkGreen,
                          borderRadius: '6px',
                          border: '2px solid #ddd',
                          marginBottom: '6px',
                        }}
                      ></div>
                      <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>Dark Green</div>
                      <small style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace' }}>{theme.darkGreen}</small>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {!theme.isActive && (
                      <button
                        onClick={() => activateTheme(theme.id)}
                        className="admin-btn admin-btn-success"
                        style={{ fontSize: '14px', padding: '8px 16px' }}
                      >
                        <i className="fa-solid fa-check"></i>
                        Activate
                      </button>
                    )}
                    <Link
                      href={`/admin/colors/${theme.id}`}
                      className="admin-btn admin-btn-secondary"
                      style={{ fontSize: '14px', padding: '8px 16px' }}
                    >
                      <i className="fa-solid fa-edit"></i>
                      Edit
                    </Link>
                    {!theme.isActive && (
                      <button
                        onClick={() => deleteTheme(theme.id)}
                        className="admin-btn admin-btn-danger"
                        style={{ fontSize: '14px', padding: '8px 16px' }}
                      >
                        <i className="fa-solid fa-trash"></i>
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
