'use client';

import { useState, useEffect } from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  comments: number;
  category: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="container section-space">
          <div className="text-center">Loading...</div>
        </div>
      </main>
    );
  }

  // Get popular posts (last 3 blogs)
  const popularPosts = blogs.slice(-3).reverse();

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to blog section smoothly
    const blogSection = document.querySelector('.blog__area');
    if (blogSection) {
      const offset = 100; // Offset for header
      const elementPosition = blogSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <Breadcrumb
        title="Blog Grid"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', active: true }
        ]}
      />

      <section className="blog__area section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__wrapper">
                {currentBlogs.map((blog, index) => (
                  <div key={blog.id} className={index > 0 ? 'mt-80' : ''}>
                    <BlogCard blog={blog} delay={`.${index + 2}s`} />
                  </div>
                ))}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="blog__content-pagination mt-80">
                    <div className="blog__content-pagination-social d-flex justify-content-center">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <a
                          key={pageNumber}
                          href="#"
                          className={currentPage === pageNumber ? 'active' : ''}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pageNumber);
                          }}
                        >
                          <i className={`fa-solid fa-${pageNumber}`}></i>
                        </a>
                      ))}
                      {currentPage < totalPages && (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                          }}
                        >
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <BlogSidebar popularPosts={popularPosts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
