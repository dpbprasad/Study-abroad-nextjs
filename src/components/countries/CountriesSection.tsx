'use client';

import { useState, useEffect, useRef } from 'react';

export default function CountriesSection() {
  const [activeTab, setActiveTab] = useState('australia');
  const [stickyState, setStickyState] = useState<'normal' | 'fixed' | 'absolute'>('normal');
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const countriesData = {
    australia: [
      { name: 'Deakin University', image: '/assets/img/uni-logo/deakin.png', link: 'https://www.deakin.edu.au/' },
      { name: 'University of Melbourne', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Sydney', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Australian National University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Monash University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Queensland', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'RMIT University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Adelaide', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Technology Sydney', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Macquarie University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Griffith University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'La Trobe University', image: '/assets/img/uni-logo/deakin.png' }
    ],
    newzealand: [
      { name: 'University of Auckland', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Otago', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Victoria University of Wellington', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Canterbury', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Massey University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Lincoln University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Auckland University of Technology', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Waikato', image: '/assets/img/uni-logo/deakin.png' }
    ],
    canada: [
      { name: 'University of Toronto', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of British Columbia', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'McGill University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'McMaster University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Alberta', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Montreal', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Waterloo', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Western University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Calgary', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Queen\'s University', image: '/assets/img/uni-logo/deakin.png' }
    ],
    uk: [
      { name: 'University of Oxford', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Cambridge', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Imperial College London', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University College London', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'London School of Economics', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Edinburgh', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'King\'s College London', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Manchester', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Warwick', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Bristol', image: '/assets/img/uni-logo/deakin.png' }
    ],
    norway: [
      { name: 'University of Oslo', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Norwegian University of Science and Technology', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Bergen', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'UiT The Arctic University of Norway', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'BI Norwegian Business School', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Norwegian School of Economics', image: '/assets/img/uni-logo/deakin.png' }
    ],
    usa: [
      { name: 'Harvard University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Stanford University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Massachusetts Institute of Technology', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Yale University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Princeton University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Columbia University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of California Berkeley', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Chicago', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'Cornell University', image: '/assets/img/uni-logo/deakin.png' },
      { name: 'University of Pennsylvania', image: '/assets/img/uni-logo/deakin.png' }
    ]
  };

  const tabs = [
    { id: 'australia', label: 'Australia' },
    { id: 'newzealand', label: 'New Zealand' },
    { id: 'canada', label: 'Canada' },
    { id: 'uk', label: 'United Kingdom' },
    { id: 'norway', label: 'Norway' },
    { id: 'usa', label: 'United States' }
  ];

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
                {tabs.map((tab, index) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <button
                      className={`tab__btn pb-20 ${activeTab === tab.id ? 'active' : ''} ${index === tabs.length - 1 ? '' : 'pb-20'}`}
                      onClick={() => handleTabChange(tab.id)}
                      type="button"
                      role="tab"
                    >
                      {tab.label}
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
              {Object.entries(countriesData).map(([key, countries]) => (
                <div
                  key={key}
                  className={`tab-pane fade ${activeTab === key ? 'show active' : ''}`}
                  role="tabpanel"
                >
                  <div className="countries__tab-content">
                    {countries.map((country, index) => (
                      country.link ? (
                        <a
                          key={index}
                          href={country.link}
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
                          <img src={country.image} alt={country.name} />
                          <h5>{country.name}</h5>
                        </a>
                      ) : (
                        <div
                          key={index}
                          className={`countries__tab-content__countries-name ${index === countries.length - 1 ? '' : 'mb-30'} d-flex`}
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
                          <img src={country.image} alt={country.name} />
                          <h5>{country.name}</h5>
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
