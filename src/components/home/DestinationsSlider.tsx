'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DestinationsSlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const destinations = [
    {
      name: 'Study in Canada',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      flag: '/assets/img/country/canada-gif.gif',
      bgImage: '/assets/img/country/country-bg/canada-bg-s.jpg',
      delay: '.2s'
    },
    {
      name: 'Study in Bangladesh',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      flag: '/assets/img/country/bangaladesh-gif.gif',
      bgImage: '/assets/img/country/country-bg/usa-bg-s.jpg',
      delay: '.3s'
    },
    {
      name: 'Study in UK',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      flag: '/assets/img/country/uk-gif.gif',
      bgImage: '/assets/img/country/country-bg/uk-bg-s.jpg',
      delay: '.4s'
    },
    {
      name: 'Study in USA',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      flag: '/assets/img/country/usa-gif.gif',
      bgImage: '/assets/img/country/country-bg/usa-bg-s.jpg',
      delay: '.5s'
    },
    {
      name: 'Study in Sri Lanka',
      description: 'Lorem Ipsum is simply dummy text the printing and provide best visa ever',
      flag: '/assets/img/country/srilanka-gif.gif',
      bgImage: '/assets/img/country/country-bg/canada-bg-s.jpg',
      delay: '.6s'
    },
  ];

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="overflow-hidden gray-bg">
      <div className="top-bottom project-area banner-wrap dark-green">
        <div className="container">
          <div className="section-slider-title mb-60">
            <div className="section-slider-title-wrapper">
              <h6 className="section-slider-title-wrapper-subtitle wow fadeInLeft animated" data-wow-delay=".2s">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3756_20)">
                    <path d="M19.3 2.66986C19.2618 2.59008 19.1936 2.52868 19.1103 2.49911L12.1959 0.0581985C12.0224 -0.00317634 11.832 0.0879901 11.7706 0.26149L10.2 4.70581H9.51302V3.57248C9.513 3.41941 9.47783 3.26838 9.41023 3.13104C9.34263 2.9937 9.2444 2.87372 9.12311 2.78033C9.00182 2.68695 8.86071 2.62266 8.71066 2.59242C8.5606 2.56217 8.4056 2.56679 8.25761 2.6059L0.248416 4.7169V4.7229C0.177823 4.74064 0.115123 4.78133 0.0701599 4.83857C0.0251971 4.89581 0.000518721 4.96636 0 5.03915L0 19.0391C0 19.5914 0.447749 20.0391 0.999998 20.0391H10.3333C10.8856 20.0391 11.3333 19.5914 11.3333 19.0391V16.0145L14.0066 16.9582C14.1803 17.0194 14.3707 16.9285 14.4319 16.7548L19.3143 2.92457C19.3287 2.88326 19.3349 2.83949 19.3325 2.79578C19.33 2.75208 19.319 2.70928 19.2999 2.66986H19.3Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3756_20">
                      <rect width="20" height="20" fill="white" transform="translate(0 0.0390625)"/>
                    </clipPath>
                  </defs>
                </svg>
                Study Destinations
              </h6>
              <h2 className="section-slider-title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">
                Explore Top Study Destinations <br /> Worldwide
              </h2>
            </div>
            <div className="section-slider-title-button d-flex align-items-center">
              <Link href="/countries" className="rr-btn me-3 wow fadeInLeft animated" data-wow-delay=".3s">
                View All Destinations
              </Link>
              <div className="d-none d-md-block">
                <button className="section-slider-title-button-right mr-15 project__slider-button-prev wow fadeInLeft animated" data-wow-delay=".4s">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="section-slider-title-button-right project__slider-button-next wow fadeInLeft animated" data-wow-delay=".5s">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="project-row-custom">
            <div className="project-slide slide-height">
              <div className="project-three__single">
                <ul className="slider_hover__item">
                  {destinations.map((dest, index) => (
                    <li
                      key={index}
                      className={activeIndex === index ? 'active' : ''}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      style={{ transition: 'flex 0.3s ease-in-out' }}
                    >
                      <div className="project-three__single-inner wow fadeInLeft animated" data-wow-delay={dest.delay}>
                        <div className="project-small-img">
                          <img src={dest.flag} alt="country flag" />
                        </div>
                        <div className="project-three__single-img" style={{ backgroundImage: `url(${dest.bgImage})` }}></div>
                        <div className="bg-overlay"></div>
                        <div className="project-three__single-content">
                          <h4>{dest.name}</h4>
                          <p>{dest.description}</p>
                          <div className="button">
                            <Link href="/countries/details">
                              Apply Now <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
