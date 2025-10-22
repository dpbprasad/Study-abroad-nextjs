import Link from 'next/link';
import './admin.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <p>Study Abroad Management</p>
        </div>

        <nav className="admin-nav">
          <Link href="/admin" className="admin-nav-item">
            <i className="fa-solid fa-chart-line"></i>
            <span>Dashboard</span>
          </Link>

          <div className="admin-nav-section">
            <h3>Content Management</h3>
          </div>

          <Link href="/admin/countries" className="admin-nav-item">
            <i className="fa-solid fa-globe"></i>
            <span>Countries</span>
          </Link>

          <Link href="/admin/universities" className="admin-nav-item">
            <i className="fa-solid fa-building-columns"></i>
            <span>Universities</span>
          </Link>

          <Link href="/admin/services" className="admin-nav-item">
            <i className="fa-solid fa-handshake"></i>
            <span>Services</span>
          </Link>

          <Link href="/admin/blog" className="admin-nav-item">
            <i className="fa-solid fa-newspaper"></i>
            <span>Blog Posts</span>
          </Link>

          <Link href="/admin/testimonials" className="admin-nav-item">
            <i className="fa-solid fa-quote-left"></i>
            <span>Testimonials</span>
          </Link>

          <Link href="/admin/team" className="admin-nav-item">
            <i className="fa-solid fa-users"></i>
            <span>Team Members</span>
          </Link>

          <div className="admin-nav-section">
            <h3>System</h3>
          </div>

          <Link href="/admin/colors" className="admin-nav-item">
            <i className="fa-solid fa-palette"></i>
            <span>Color Themes</span>
          </Link>

          <Link href="/admin/settings" className="admin-nav-item">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </Link>

          <Link href="/" className="admin-nav-item" target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>View Site</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-topbar">
          <div className="admin-topbar-left">
            <button className="admin-menu-toggle">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-user">
              <span>Admin User</span>
              <i className="fa-solid fa-user-circle"></i>
            </div>
          </div>
        </div>

        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
