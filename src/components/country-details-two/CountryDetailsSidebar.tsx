'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Country {
  id: string;
  slug: string;
  name: string;
  flag?: string;
}

interface CountryDetailsSidebarProps {
  countries: Country[];
  selectedCountry: Country;
  onCountrySelect: (slug: string) => void;
  onCountryNotFound: (searchTerm: string) => void;
}

export default function CountryDetailsSidebar({
  countries,
  selectedCountry,
  onCountrySelect,
  onCountryNotFound,
}: CountryDetailsSidebarProps) {
  const [searchCountry, setSearchCountry] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCountry.trim()) {
      const found = countries.find(c =>
        c.name.toLowerCase().includes(searchCountry.toLowerCase())
      );
      if (found) {
        onCountrySelect(found.slug);
        setSearchCountry('');
      } else {
        onCountryNotFound(searchCountry);
        setSearchCountry('');
      }
    }
  };

  return (
    <>
      <div className="countrie-details__title wow fadeInLeft animated" data-wow-delay=".2s">
        <h4>Plan Your Trip Now</h4>
      </div>

      <div className="countrie-details__box wow fadeInLeft animated" data-wow-delay=".3s">
        <div className="countrie-details__box-content wow fadeInLeft animated" data-wow-delay=".4s">
          <a href="tel:+94112512515">
            <i className="fa-solid fa-phone"></i>+94 112 512 515
          </a>
          <a className="mt-20" href="mailto:info@example.com">
            <i className="fa-solid fa-envelope"></i>info@example.com
          </a>
          <a className="mt-20" href="https://maps.app.goo.gl/R8Y6ZY6s1KrcGWc67" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-location-dot"></i>6391 Elgin St. Celina, 10299
          </a>
        </div>
        <div className="countrie-details__box-btn mt-40">
          <Link href="/contact">
            Contact Us <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="countrie-details__input wow fadeInLeft animated" data-wow-delay=".5s">
        <h5 className="mb-20">Find Country</h5>
        <form onSubmit={handleSearch}>
          <input
            name="country-search"
            id="country-search"
            type="text"
            placeholder="Select country name"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            autoComplete="off"
          />
          <div className="countrie-details__input-icon">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </form>
      </div>

      <div className="visa-details__links-visa visa-details__links-visa-2 wow fadeInLeft animated mt-30" data-wow-delay=".5s">
        {countries.map((country, index) => (
          <a
            key={country.slug}
            onClick={() => onCountrySelect(country.slug)}
            className={`${index > 0 ? 'mt-20' : ''} ${index === countries.length - 1 ? 'border' : ''} ${selectedCountry.slug === country.slug ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {country.name} <i className="fa-solid fa-angle-right"></i>
          </a>
        ))}
      </div>
    </>
  );
}
