'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/common/Breadcrumb';
import CountryDetailsTwoContent from '@/components/country-details-two/CountryDetailsTwoContent';
import CountryDetailsSidebar from '@/components/country-details-two/CountryDetailsSidebar';

interface Country {
  id: string;
  slug: string;
  name: string;
  code: string;
  flag: string;
  flagImage: string;
  backgroundImage: string;
  title: string;
  description: string;
  highlights: string[];
  quickFacts: {
    language: string;
    currency: string;
    timezone: string;
    studyDuration: string;
  };
  universities: any[];
}

export default function CountryDetailsTwoPage() {
  const searchParams = useSearchParams();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [showNotFound, setShowNotFound] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch('/api/countries');
        const data = await res.json();
        setCountries(data);

        // Check if there's a country parameter in the URL
        const countryParam = searchParams.get('country');
        if (countryParam && data.length > 0) {
          const country = data.find((c: Country) => c.slug === countryParam);
          if (country) {
            setSelectedCountry(country);
          } else {
            // If country not found, show first country
            setSelectedCountry(data[0]);
          }
        } else if (data.length > 0) {
          // No parameter, set first country as default
          setSelectedCountry(data[0]);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, [searchParams]);

  const handleCountrySelect = (countrySlug: string) => {
    const country = countries.find(c => c.slug === countrySlug);
    if (country) {
      setSelectedCountry(country);
      setShowNotFound(false);
      setSearchedTerm('');
    }
  };

  const handleCountryNotFound = (searchTerm: string) => {
    setShowNotFound(true);
    setSearchedTerm(searchTerm);
  };

  if (loading) {
    return (
      <main>
        <div className="container section-space">
          <div className="text-center">Loading...</div>
        </div>
      </main>
    );
  }

  if (!selectedCountry) {
    return (
      <main>
        <div className="container section-space">
          <h1>No countries available</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Breadcrumb
        title="Countries Details"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Countries Details', active: true }
        ]}
      />

      <section className="countrie-details__area visa-details countrie pt-100 section-space-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {showNotFound ? (
                <div className="countrie-details__content">
                  <div style={{
                    backgroundColor: '#FFF4E6',
                    border: '2px solid #FFB84D',
                    borderRadius: '12px',
                    padding: '40px',
                    textAlign: 'center'
                  }}>
                    <div style={{ marginBottom: '20px' }}>
                      <i className="fa-solid fa-exclamation-triangle" style={{ color: '#FFB84D', fontSize: '48px' }}></i>
                    </div>

                    <h2 style={{ color: '#034833', marginBottom: '20px' }}>Country Not Found</h2>

                    <p style={{ color: '#034833', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
                      We're sorry! The country "<strong>{searchedTerm}</strong>" is not currently listed in our system.
                    </p>

                    <p style={{ color: '#034833', fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
                      This could be because:
                    </p>
                    <ul style={{
                      color: '#034833',
                      fontSize: '16px',
                      lineHeight: '1.8',
                      marginBottom: '20px',
                      paddingLeft: '20px',
                      textAlign: 'left',
                      display: 'inline-block'
                    }}>
                      <li>The country is not in our current list</li>
                      <li>There might be a typing mistake</li>
                    </ul>

                    <div style={{
                      backgroundColor: '#E8F5E9',
                      padding: '20px',
                      borderRadius: '8px',
                      marginBottom: '25px'
                    }}>
                      <h4 style={{ color: '#034833', marginBottom: '10px' }}>
                        <i className="fa-solid fa-check-circle" style={{ color: '#83CD20', marginRight: '8px' }}></i>
                        But Don't Worry!
                      </h4>
                      <p style={{ color: '#034833', fontSize: '15px', lineHeight: '1.7', marginBottom: '0' }}>
                        This doesn't mean we can't help you with your target country. We work with many destinations around the world!
                      </p>
                    </div>

                    <p style={{ color: '#034833', fontSize: '16px', lineHeight: '1.8', marginBottom: '25px' }}>
                      Please <strong>contact us</strong> to get more details about your target country. We're hoping to provide the information you're looking for!
                    </p>

                    {/* Contact form section - you can add form here later */}
                    <div style={{
                      backgroundColor: 'white',
                      padding: '30px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      textAlign: 'left'
                    }}>
                      <h4 style={{ color: '#034833', marginBottom: '15px' }}>Quick Contact</h4>
                      <p style={{ color: '#727272', fontSize: '14px', marginBottom: '20px' }}>
                        You can add a contact form here, or use the button below to visit our contact page.
                      </p>
                      {/* TODO: Add contact form fields here */}
                    </div>

                    <a
                      href="/contact"
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#034833',
                        color: 'white',
                        padding: '15px 40px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background 0.3s',
                        marginRight: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#83CD20';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#034833';
                      }}
                    >
                      <i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i>
                      Contact Us Now
                    </a>

                    <button
                      onClick={() => {
                        setShowNotFound(false);
                        setSearchedTerm('');
                      }}
                      style={{
                        backgroundColor: '#f0f0f0',
                        color: '#034833',
                        padding: '15px 40px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e0e0e0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f0f0f0';
                      }}
                    >
                      <i className="fa-solid fa-arrow-left" style={{ marginRight: '8px' }}></i>
                      Back to Countries
                    </button>
                  </div>
                </div>
              ) : (
                <CountryDetailsTwoContent country={selectedCountry} />
              )}
            </div>
            <div className="col-lg-4">
              <CountryDetailsSidebar
                countries={countries}
                selectedCountry={selectedCountry}
                onCountrySelect={handleCountrySelect}
                onCountryNotFound={handleCountryNotFound}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
