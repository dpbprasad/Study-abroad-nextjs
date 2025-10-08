'use client';

import { useState } from 'react';

export default function CountryDetailsModernSection() {
  const [activeCountry, setActiveCountry] = useState('australia');
  const [activeContentTab, setActiveContentTab] = useState('universities');

  const countriesData = {
    australia: {
      flag: '🇦🇺',
      details: {
        title: 'Study in Australia',
        description: 'Australia is one of the most popular study destinations for international students. Known for its world-class universities, multicultural society, and excellent quality of life, Australia offers a unique educational experience.',
        highlights: [
          { icon: 'fa-trophy', text: 'Home to 7 of the world\'s top 100 universities' },
          { icon: 'fa-briefcase', text: 'Post-study work visa opportunities (2-4 years)' },
          { icon: 'fa-clock', text: 'Part-time work rights during study (20 hours/week)' },
          { icon: 'fa-shield-heart', text: 'Safe and welcoming environment for international students' }
        ],
        quickFacts: {
          'Official Language': { value: 'English', icon: 'fa-language' },
          'Currency': { value: 'Australian Dollar (AUD)', icon: 'fa-dollar-sign' },
          'Average Tuition': { value: '$20,000 - $45,000 per year', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '$18,000 - $25,000 per year', icon: 'fa-home' },
          'Popular Cities': { value: 'Sydney, Melbourne, Brisbane, Perth', icon: 'fa-city' }
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
      flag: '🇳🇿',
      details: {
        title: 'Study in New Zealand',
        description: 'New Zealand offers high-quality education in a stunning natural environment. Known for its innovative teaching methods, research opportunities, and friendly culture, it\'s an ideal destination for international students.',
        highlights: [
          { icon: 'fa-star', text: 'All 8 universities ranked in QS World University Rankings' },
          { icon: 'fa-plane', text: 'Post-study work visa up to 3 years' },
          { icon: 'fa-shield-heart', text: 'Safe and peaceful country with low crime rates' },
          { icon: 'fa-hand-holding-dollar', text: 'Affordable tuition compared to other English-speaking countries' }
        ],
        quickFacts: {
          'Official Language': { value: 'English, Māori', icon: 'fa-language' },
          'Currency': { value: 'New Zealand Dollar (NZD)', icon: 'fa-dollar-sign' },
          'Average Tuition': { value: '$18,000 - $35,000 per year', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '$15,000 - $20,000 per year', icon: 'fa-home' },
          'Popular Cities': { value: 'Auckland, Wellington, Christchurch, Dunedin', icon: 'fa-city' }
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
      flag: '🇨🇦',
      details: {
        title: 'Study in Canada',
        description: 'Canada is renowned for its excellent education system, diverse culture, and welcoming immigration policies. With world-class universities and abundant research opportunities, Canada attracts thousands of international students annually.',
        highlights: [
          { icon: 'fa-trophy', text: 'Home to many top-ranked universities globally' },
          { icon: 'fa-id-card', text: 'Post-graduation work permit up to 3 years' },
          { icon: 'fa-passport', text: 'Pathway to permanent residency' },
          { icon: 'fa-users', text: 'Multicultural society with high quality of life' }
        ],
        quickFacts: {
          'Official Language': { value: 'English, French', icon: 'fa-language' },
          'Currency': { value: 'Canadian Dollar (CAD)', icon: 'fa-dollar-sign' },
          'Average Tuition': { value: '$15,000 - $35,000 per year', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '$10,000 - $15,000 per year', icon: 'fa-home' },
          'Popular Cities': { value: 'Toronto, Vancouver, Montreal, Ottawa', icon: 'fa-city' }
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
      flag: '🇬🇧',
      details: {
        title: 'Study in United Kingdom',
        description: 'The UK is home to some of the world\'s oldest and most prestigious universities. With a rich academic tradition, cutting-edge research facilities, and a diverse international community, the UK offers an unparalleled educational experience.',
        highlights: [
          { icon: 'fa-crown', text: 'World-renowned universities including Oxford and Cambridge' },
          { icon: 'fa-hourglass-half', text: 'Shorter course duration (1-year Masters programs)' },
          { icon: 'fa-briefcase', text: 'Post-study work visa for 2 years (3 years for PhD)' },
          { icon: 'fa-landmark', text: 'Rich cultural heritage and historical significance' }
        ],
        quickFacts: {
          'Official Language': { value: 'English', icon: 'fa-language' },
          'Currency': { value: 'British Pound (GBP)', icon: 'fa-sterling-sign' },
          'Average Tuition': { value: '£10,000 - £38,000 per year', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '£12,000 - £15,000 per year', icon: 'fa-home' },
          'Popular Cities': { value: 'London, Oxford, Cambridge, Manchester', icon: 'fa-city' }
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
      flag: '🇳🇴',
      details: {
        title: 'Study in Norway',
        description: 'Norway offers free or very low-cost education even for international students. Known for its high quality of life, stunning natural beauty, and progressive society, Norway is an attractive destination for students seeking quality education.',
        highlights: [
          { icon: 'fa-gift', text: 'Free or minimal tuition fees at public universities' },
          { icon: 'fa-heart', text: 'High standard of living and safety' },
          { icon: 'fa-globe', text: 'English-taught programs widely available' },
          { icon: 'fa-mountain', text: 'Beautiful landscapes and outdoor activities' }
        ],
        quickFacts: {
          'Official Language': { value: 'Norwegian', icon: 'fa-language' },
          'Currency': { value: 'Norwegian Krone (NOK)', icon: 'fa-dollar-sign' },
          'Average Tuition': { value: 'Free (public universities)', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '€900 - €1,300 per month', icon: 'fa-home' },
          'Popular Cities': { value: 'Oslo, Bergen, Trondheim, Tromsø', icon: 'fa-city' }
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
      flag: '🇺🇸',
      details: {
        title: 'Study in United States',
        description: 'The USA hosts the largest number of international students globally. With world-leading universities, diverse academic programs, and abundant research opportunities, the US remains the top choice for students worldwide.',
        highlights: [
          { icon: 'fa-medal', text: 'Home to majority of world\'s top 100 universities' },
          { icon: 'fa-microscope', text: 'Cutting-edge research and innovation opportunities' },
          { icon: 'fa-id-card', text: 'Optional Practical Training (OPT) work authorization' },
          { icon: 'fa-book', text: 'Diverse range of programs and specializations' }
        ],
        quickFacts: {
          'Official Language': { value: 'English', icon: 'fa-language' },
          'Currency': { value: 'US Dollar (USD)', icon: 'fa-dollar-sign' },
          'Average Tuition': { value: '$25,000 - $55,000 per year', icon: 'fa-graduation-cap' },
          'Living Costs': { value: '$15,000 - $25,000 per year', icon: 'fa-home' },
          'Popular Cities': { value: 'New York, Boston, Los Angeles, Chicago', icon: 'fa-city' }
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
    { id: 'australia', label: 'Australia', flag: '🇦🇺' },
    { id: 'newzealand', label: 'New Zealand', flag: '🇳🇿' },
    { id: 'canada', label: 'Canada', flag: '🇨🇦' },
    { id: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
    { id: 'norway', label: 'Norway', flag: '🇳🇴' },
    { id: 'usa', label: 'United States', flag: '🇺🇸' }
  ];

  const currentCountry = countriesData[activeCountry as keyof typeof countriesData];

  return (
    <section className="countries-modern section-space">
      <div className="container">
        <div className="row">
          {/* Country Tabs Sidebar */}
          <div className="col-lg-3">
            <div style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              position: 'sticky',
              top: '120px'
            }}>
              <h5 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                Select Country
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {countryTabs.map((tab) => (
                  <li key={tab.id} style={{ marginBottom: '8px' }}>
                    <button
                      onClick={() => setActiveCountry(tab.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: activeCountry === tab.id ? 'linear-gradient(135deg, #83CD20 0%, #6ab018 100%)' : 'transparent',
                        color: activeCountry === tab.id ? 'white' : '#333',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: activeCountry === tab.id ? '600' : '500',
                        transition: 'all 0.3s ease',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        if (activeCountry !== tab.id) {
                          e.currentTarget.style.background = '#f8f9fa';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeCountry !== tab.id) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span style={{ fontSize: '24px' }}>{tab.flag}</span>
                      <span style={{ flex: 1 }}>{tab.label}</span>
                      {activeCountry === tab.id && (
                        <i className="fa-solid fa-check" style={{ fontSize: '16px' }}></i>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-lg-9">
            {/* Content Tabs - Universities / Country Details */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '30px',
              background: 'white',
              padding: '8px',
              borderRadius: '50px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              width: 'fit-content'
            }}>
              <button
                onClick={() => setActiveContentTab('universities')}
                style={{
                  padding: '12px 32px',
                  background: activeContentTab === 'universities' ? '#83CD20' : 'transparent',
                  color: activeContentTab === 'universities' ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fa-solid fa-building-columns" style={{ marginRight: '8px' }}></i>
                Universities
              </button>
              <button
                onClick={() => setActiveContentTab('details')}
                style={{
                  padding: '12px 32px',
                  background: activeContentTab === 'details' ? '#83CD20' : 'transparent',
                  color: activeContentTab === 'details' ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="fa-solid fa-info-circle" style={{ marginRight: '8px' }}></i>
                Country Details
              </button>
            </div>

            {/* Tab Content */}
            {activeContentTab === 'universities' && (
              <div>
                <h4 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '25px', color: '#333' }}>
                  Partner Universities in {currentCountry.details.title.replace('Study in ', '')}
                </h4>
                <div className="row g-3">
                  {currentCountry.universities.map((university, index) => (
                    <div key={index} className="col-md-6">
                      {university.link ? (
                        <a
                          href={university.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '20px',
                            background: 'white',
                            border: '2px solid #f0f0f0',
                            borderRadius: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#83CD20';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(131, 205, 32, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#f0f0f0';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div style={{
                            width: '60px',
                            height: '60px',
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <img
                              src={university.image}
                              alt={university.name}
                              style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'contain' }}
                            />
                          </div>
                          <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0, flex: 1 }}>
                            {university.name}
                          </h5>
                          <i className="fa-solid fa-arrow-right" style={{ color: '#83CD20', fontSize: '18px' }}></i>
                        </a>
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '20px',
                            background: 'white',
                            border: '2px solid #f0f0f0',
                            borderRadius: '15px',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#83CD20';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(131, 205, 32, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#f0f0f0';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div style={{
                            width: '60px',
                            height: '60px',
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <img
                              src={university.image}
                              alt={university.name}
                              style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'contain' }}
                            />
                          </div>
                          <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: 0, flex: 1 }}>
                            {university.name}
                          </h5>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Country Details Tab - MODERN UI */}
            {activeContentTab === 'details' && (
              <div>
                {/* Hero Section */}
                <div style={{
                  background: 'linear-gradient(135deg, #83CD20 0%, #6ab018 100%)',
                  padding: '40px',
                  borderRadius: '20px',
                  marginBottom: '30px',
                  color: 'white'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: '15px', textAlign: 'center' }}>
                    {currentCountry.flag}
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '15px', color: 'white', textAlign: 'center' }}>
                    {currentCountry.details.title}
                  </h2>
                  <p style={{ fontSize: '16px', lineHeight: '1.7', margin: 0, opacity: 0.95, textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    {currentCountry.details.description}
                  </p>
                </div>

                {/* Highlights Section */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                    <i className="fa-solid fa-sparkles" style={{ color: '#83CD20', marginRight: '10px' }}></i>
                    Why Study Here?
                  </h3>
                  <div className="row g-4">
                    {currentCountry.details.highlights.map((highlight, index) => (
                      <div key={index} className="col-md-6">
                        <div style={{
                          padding: '25px',
                          background: 'white',
                          borderRadius: '16px',
                          border: '1px solid #f0f0f0',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                          height: '100%',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(131, 205, 32, 0.15)';
                          e.currentTarget.style.borderColor = '#83CD20';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                          e.currentTarget.style.borderColor = '#f0f0f0';
                        }}
                        >
                          <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <div style={{
                              width: '48px',
                              height: '48px',
                              background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <i className={`fa-solid ${highlight.icon}`} style={{ fontSize: '20px', color: '#2e7d32' }}></i>
                            </div>
                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', margin: 0 }}>
                              {highlight.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Facts Section */}
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                    <i className="fa-solid fa-chart-simple" style={{ color: '#83CD20', marginRight: '10px' }}></i>
                    Quick Facts
                  </h3>
                  <div className="row g-3">
                    {Object.entries(currentCountry.details.quickFacts).map(([key, factData]) => (
                      <div key={key} className="col-md-6">
                        <div style={{
                          padding: '20px 25px',
                          background: 'white',
                          borderRadius: '14px',
                          border: '1px solid #f0f0f0',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f8f9fa';
                          e.currentTarget.style.borderColor = '#83CD20';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.borderColor = '#f0f0f0';
                        }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{
                              width: '42px',
                              height: '42px',
                              background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <i className={`fa-solid ${factData.icon}`} style={{ fontSize: '18px', color: '#f57c00' }}></i>
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '13px', color: '#888', marginBottom: '4px', fontWeight: '500' }}>{key}</div>
                              <div style={{ fontSize: '15px', fontWeight: '600', color: '#333' }}>{factData.value}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
