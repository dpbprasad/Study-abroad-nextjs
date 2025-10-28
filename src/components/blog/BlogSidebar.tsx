'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Blog {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
}

interface BlogSidebarProps {
  popularPosts: Blog[];
}

export default function BlogSidebar({ popularPosts }: BlogSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Visa & Immigration',
    'University Selection',
    'Scholarships & Finance',
    'Test Preparation',
    'Student Life',
    'Career & Employment',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search:', searchTerm);
  };

  return (
    <div className="sidebar">
      {/* Search Widget */}
      <div className="sidebar__widget wow fadeInLeft animated" data-wow-delay=".4s">
        <h5 className="sidebar__widget-title mb-30">Search Here</h5>
        <div className="sidebar__widget-search">
          <div className="search__bar position-relative">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                id="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="sidebar__widget wow fadeInLeft animated" data-wow-delay=".5s">
        <h5 className="sidebar__widget-title">Popular Post</h5>
        <div className="sidebar-post__wrapper mt-20">
          {popularPosts.map((post) => (
            <div key={post.id} className="sidebar-post">
              <Link href={`/blog/${post.slug}`} className="sidebar-post_thumb">
                <img src={post.image} alt={post.title} />
              </Link>
              <div className="sidebar-post_content">
                <ul className="post-meta">
                  <li>
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z" fill="#83CD20"/>
                    </svg>
                    {post.date}
                  </li>
                </ul>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="title rr-fw-medium">{post.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar__widget wow fadeInLeft animated" data-wow-delay=".6s">
        <h5 className="sidebar__widget-title sidebar__widget-title__have-bar">Category</h5>
        <div className="sidebar__widget-category">
          {categories.map((category, index) => (
            <a
              key={category}
              className={index === 0 ? 'mt-20' : 'mt-15'}
              href="#"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none"></svg>
                {category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
