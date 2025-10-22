'use client';

import { useState, useEffect, useRef } from 'react';

interface University {
  id: string;
  name: string;
  logo: string;
  website: string | null;
  ranking: number | null;
}

interface Country {
  id: string;
  slug: string;
  name: string;
  universities: University[];
}

export default function CountriesSection() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);
  const [stickyState, setStickyState] = useState<'normal' | 'fixed' | 'absolute'>('normal');
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Fetch countries from API
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('/api/countries');
        const data = await response.json();
        setCountries(data);
        if (data.length > 0) {
          setActiveTab(data[0].slug);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // Function to handle tab change with scroll
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    // Scroll to position where the content aligns with the sticky sidebar
    if (sectionRef.current && contentRef.current) {
      const stickyTopPosition = 135; // Where sidebar sticks from viewport top

      // Get the absolute position of the content
      const contentTop = contentRef.current.offsetTop + sectionRef.current.offsetTop;

      // Scroll so the content appears at the sticky position
      const scrollToPosition = contentTop - stickyTopPosition;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current && sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
        const sidebarHeight = sidebarRef.current.offsetHeight;
        const headerHeight = 100; // Approximate header height when sticky
        const stickyTop = 135; // Distance from top when sticky
        const footerGap = 15; // Gap between sidebar and footer

        // Capture the original width before making it sticky
        if (stickyState === 'normal' && sectionTop <= headerHeight) {
          setSidebarWidth(sidebarRef.current.offsetWidth);
        }

        // Calculate the stopping point
        const stopPoint = stickyTop + sidebarHeight + footerGap;

        // Determine sticky state
        if (sectionTop > headerHeight) {
          setStickyState('normal');
        } else if (sectionBottom > stopPoint) {
          setStickyState('fixed');
        } else {
          setStickyState('absolute');
        }
      }
    };

    // Set initial width
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (sidebarRef.current && stickyState === 'normal') {
        setSidebarWidth(sidebarRef.current.offsetWidth);
      }
    });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [stickyState]);

  if (loading) {
    return (
      <section className="countries section-space tab overflow-hidden">
        <div className="container">
          <div className="text-center py-5">
            <p>Loading countries...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="countries section-space tab overflow-hidden">
      <div className="container">
        <div className="row">
          {/* Tabs Sidebar */}
          <div className="col-lg-4">
            <div
              ref={sidebarRef}
              className={`service-sidebar-sticky ${stickyState === 'fixed' ? 'is-fixed' : ''} ${stickyState === 'absolute' ? 'is-absolute' : ''}`}
              style={stickyState !== 'normal' ? { width: `${sidebarWidth}px` } : {}}
            >
              <ul className="nav nav-tabs countries__tab tab__wrap" role="tablist" style={{ paddingLeft: '40px' }}>
                {countries.map((country, index) => (
                  <li key={country.id} className="nav-item" role="presentation">
                    <button
                      className={`tab__btn pb-20 ${activeTab === country.slug ? 'active' : ''} ${index === countries.length - 1 ? '' : 'pb-20'}`}
                      onClick={() => handleTabChange(country.slug)}
                      type="button"
                      role="tab"
                    >
                      {country.name}
                      <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-lg-8" ref={contentRef}>
            <div className="tab-content">
              {countries.map((country) => (
                <div
                  key={country.id}
                  className={`tab-pane fade ${activeTab === country.slug ? 'show active' : ''}`}
                  role="tabpanel"
                >
                  <div className="countries__tab-content">
                    {country.universities.map((university, index) => (
                      university.website ? (
                        <a
                          key={university.id}
                          href={university.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="countries__tab-content__countries-name mb-30 d-flex"
                          style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#83CD20';
                            const h5 = e.currentTarget.querySelector('h5');
                            if (h5) h5.style.color = '#fff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            const h5 = e.currentTarget.querySelector('h5');
                            if (h5) h5.style.color = '';
                          }}
                        >
                          <img src={university.logo} alt={university.name} />
                          <h5>{university.name}</h5>
                        </a>
                      ) : (
                        <div
                          key={university.id}
                          className={`countries__tab-content__countries-name ${index === country.universities.length - 1 ? '' : 'mb-30'} d-flex`}
                          style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#83CD20';
                            const h5 = e.currentTarget.querySelector('h5');
                            if (h5) h5.style.color = '#fff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            const h5 = e.currentTarget.querySelector('h5');
                            if (h5) h5.style.color = '';
                          }}
                        >
                          <img src={university.logo} alt={university.name} />
                          <h5>{university.name}</h5>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
