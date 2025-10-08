'use client';

import { useState, useEffect, useRef } from 'react';

export default function CountryDetailsSample2Section() {
  const [activeCountry, setActiveCountry] = useState('australia');
  const [activeContentTab, setActiveContentTab] = useState('universities');
  const [stickyState, setStickyState] = useState<'normal' | 'fixed' | 'absolute'>('normal');
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const countriesData = {
    australia: {
      details: {
        title: 'Study in Australia',
        description: 'Australia is one of the most popular study destinations for international students. Known for its world-class universities, multicultural society, and excellent quality of life, Australia offers a unique educational experience.',
        highlights: [
          'Home to 7 of the world\'s top 100 universities',
          'Post-study work visa opportunities (2-4 years)',
          'Part-time work rights during study (20 hours/week)',
          'Safe and welcoming environment for international students'
        ],
        quickFacts: {
          'Official Language': 'English',
          'Currency': 'Australian Dollar (AUD)',
          'Average Tuition': '$20,000 - $45,000 per year',
          'Living Costs': '$18,000 - $25,000 per year',
          'Popular Cities': 'Sydney, Melbourne, Brisbane, Perth'
        }
      },
      universities: [
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
      ]
    },
    newzealand: {
      details: {
        title: 'Study in New Zealand',
        description: 'New Zealand offers high-quality education in a stunning natural environment. Known for its innovative teaching methods, research opportunities, and friendly culture, it\'s an ideal destination for international students.',
        highlights: [
          'All 8 universities ranked in QS World University Rankings',
          'Post-study work visa up to 3 years',
          'Safe and peaceful country with low crime rates',
          'Affordable tuition compared to other English-speaking countries'
        ],
        quickFacts: {
          'Official Language': 'English, Māori',
          'Currency': 'New Zealand Dollar (NZD)',
          'Average Tuition': '$18,000 - $35,000 per year',
          'Living Costs': '$15,000 - $20,000 per year',
          'Popular Cities': 'Auckland, Wellington, Christchurch, Dunedin'
        }
      },
      universities: [
        { name: 'University of Auckland', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Otago', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Victoria University of Wellington', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Canterbury', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Massey University', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Lincoln University', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Auckland University of Technology', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Waikato', image: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    canada: {
      details: {
        title: 'Study in Canada',
        description: 'Canada is renowned for its excellent education system, diverse culture, and welcoming immigration policies. With world-class universities and abundant research opportunities, Canada attracts thousands of international students annually.',
        highlights: [
          'Home to many top-ranked universities globally',
          'Post-graduation work permit up to 3 years',
          'Pathway to permanent residency',
          'Multicultural society with high quality of life'
        ],
        quickFacts: {
          'Official Language': 'English, French',
          'Currency': 'Canadian Dollar (CAD)',
          'Average Tuition': '$15,000 - $35,000 per year',
          'Living Costs': '$10,000 - $15,000 per year',
          'Popular Cities': 'Toronto, Vancouver, Montreal, Ottawa'
        }
      },
      universities: [
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
      ]
    },
    uk: {
      details: {
        title: 'Study in United Kingdom',
        description: 'The UK is home to some of the world\'s oldest and most prestigious universities. With a rich academic tradition, cutting-edge research facilities, and a diverse international community, the UK offers an unparalleled educational experience.',
        highlights: [
          'World-renowned universities including Oxford and Cambridge',
          'Shorter course duration (1-year Masters programs)',
          'Post-study work visa for 2 years (3 years for PhD)',
          'Rich cultural heritage and historical significance'
        ],
        quickFacts: {
          'Official Language': 'English',
          'Currency': 'British Pound (GBP)',
          'Average Tuition': '£10,000 - £38,000 per year',
          'Living Costs': '£12,000 - £15,000 per year',
          'Popular Cities': 'London, Oxford, Cambridge, Manchester'
        }
      },
      universities: [
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
      ]
    },
    norway: {
      details: {
        title: 'Study in Norway',
        description: 'Norway offers free or very low-cost education even for international students. Known for its high quality of life, stunning natural beauty, and progressive society, Norway is an attractive destination for students seeking quality education.',
        highlights: [
          'Free or minimal tuition fees at public universities',
          'High standard of living and safety',
          'English-taught programs widely available',
          'Beautiful landscapes and outdoor activities'
        ],
        quickFacts: {
          'Official Language': 'Norwegian',
          'Currency': 'Norwegian Krone (NOK)',
          'Average Tuition': 'Free (public universities)',
          'Living Costs': '€900 - €1,300 per month',
          'Popular Cities': 'Oslo, Bergen, Trondheim, Tromsø'
        }
      },
      universities: [
        { name: 'University of Oslo', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Norwegian University of Science and Technology', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'University of Bergen', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'UiT The Arctic University of Norway', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'BI Norwegian Business School', image: '/assets/img/uni-logo/deakin.png' },
        { name: 'Norwegian School of Economics', image: '/assets/img/uni-logo/deakin.png' }
      ]
    },
    usa: {
      details: {
        title: 'Study in United States',
        description: 'The USA hosts the largest number of international students globally. With world-leading universities, diverse academic programs, and abundant research opportunities, the US remains the top choice for students worldwide.',
        highlights: [
          'Home to majority of world\'s top 100 universities',
          'Cutting-edge research and innovation opportunities',
          'Optional Practical Training (OPT) work authorization',
          'Diverse range of programs and specializations'
        ],
        quickFacts: {
          'Official Language': 'English',
          'Currency': 'US Dollar (USD)',
          'Average Tuition': '$25,000 - $55,000 per year',
          'Living Costs': '$15,000 - $25,000 per year',
          'Popular Cities': 'New York, Boston, Los Angeles, Chicago'
        }
      },
      universities: [
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
    }
  };

  const countryTabs = [
    { id: 'australia', label: 'Australia' },
    { id: 'newzealand', label: 'New Zealand' },
    { id: 'canada', label: 'Canada' },
    { id: 'uk', label: 'United Kingdom' },
    { id: 'norway', label: 'Norway' },
    { id: 'usa', label: 'United States' }
  ];

  // Function to handle country tab change with scroll
  const handleCountryChange = (countryId: string) => {
    setActiveCountry(countryId);

    // Scroll to position where the content aligns with the sticky sidebar
    if (sectionRef.current && contentRef.current) {
      const stickyTopPosition = 135;
      const contentTop = contentRef.current.offsetTop + sectionRef.current.offsetTop;
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
        const headerHeight = 100;
        const stickyTop = 135;
        const footerGap = 15;

        if (stickyState === 'normal' && sectionTop <= headerHeight) {
          setSidebarWidth(sidebarRef.current.offsetWidth);
        }

        const stopPoint = stickyTop + sidebarHeight + footerGap;

        if (sectionTop > headerHeight) {
          setStickyState('normal');
        } else if (sectionBottom > stopPoint) {
          setStickyState('fixed');
        } else {
          setStickyState('absolute');
        }
      }
    };

    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      if (sidebarRef.current && stickyState === 'normal') {
        setSidebarWidth(sidebarRef.current.offsetWidth);
      }
    });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [stickyState]);

  const currentCountry = countriesData[activeCountry as keyof typeof countriesData];

  return (
    <section ref={sectionRef} className="countries section-space tab overflow-hidden">
      <div className="container">
        <div className="row">
          {/* Country Tabs Sidebar */}
          <div className="col-lg-4">
            <div
              ref={sidebarRef}
              className={`service-sidebar-sticky ${stickyState === 'fixed' ? 'is-fixed' : ''} ${stickyState === 'absolute' ? 'is-absolute' : ''}`}
              style={stickyState !== 'normal' ? { width: `${sidebarWidth}px` } : {}}
            >
              <ul className="nav nav-tabs countries__tab tab__wrap" role="tablist" style={{ paddingLeft: '40px' }}>
                {countryTabs.map((tab, index) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <button
                      className={`tab__btn pb-20 ${activeCountry === tab.id ? 'active' : ''} ${index === countryTabs.length - 1 ? '' : 'pb-20'}`}
                      onClick={() => handleCountryChange(tab.id)}
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

          {/* Content Area */}
          <div className="col-lg-8" ref={contentRef}>
            {/* Content Tabs - Universities / Country Details */}
            <div className="content-tabs-wrapper mb-40">
              <ul className="content-tabs">
                <li>
                  <button
                    className={`content-tab-btn ${activeContentTab === 'universities' ? 'active' : ''}`}
                    onClick={() => setActiveContentTab('universities')}
                  >
                    Partner Universities
                  </button>
                </li>
                <li>
                  <button
                    className={`content-tab-btn ${activeContentTab === 'details' ? 'active' : ''}`}
                    onClick={() => setActiveContentTab('details')}
                  >
                    Country Details
                  </button>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content" key={activeContentTab}>
              {/* Partner Universities Tab */}
              {activeContentTab === 'universities' && (
                <div className="universities-content" key="universities">
                  <h4 className="mb-30">Partner Universities in {currentCountry.details.title.replace('Study in ', '')}</h4>
                  <div className="countries__tab-content">
                    {currentCountry.universities.map((university, index) => (
                      university.link ? (
                        <a
                          key={index}
                          href={university.link}
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
                          <img src={university.image} alt={university.name} />
                          <h5>{university.name}</h5>
                        </a>
                      ) : (
                        <div
                          key={index}
                          className={`countries__tab-content__countries-name ${index === currentCountry.universities.length - 1 ? '' : 'mb-30'} d-flex`}
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
                          <img src={university.image} alt={university.name} />
                          <h5>{university.name}</h5>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Country Details Tab */}
              {activeContentTab === 'details' && (
                <div className="country-details-content" key="details">
                  <h2 className="mb-20">{currentCountry.details.title}</h2>
                  <p className="mb-30">{currentCountry.details.description}</p>

                  {/* Highlights */}
                  <div className="mb-40">
                    <h4 className="mb-20">Why Study Here?</h4>
                    <ul className="country-highlights">
                      {currentCountry.details.highlights.map((highlight, index) => (
                        <li key={index} className="mb-15">
                          <i className="fa-solid fa-check" style={{ color: '#83CD20', marginRight: '10px' }}></i>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Facts */}
                  <div className="mb-40">
                    <h4 className="mb-20">Quick Facts</h4>
                    <div className="country-quick-facts">
                      {Object.entries(currentCountry.details.quickFacts).map(([key, value]) => (
                        <div key={key} className="quick-fact-item mb-15">
                          <strong>{key}:</strong> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
