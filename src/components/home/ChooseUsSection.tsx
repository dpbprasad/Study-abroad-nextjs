'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface ChooseUsSectionProps {
  grayBg?: boolean;
}

export default function ChooseUsSection({ grayBg = true }: ChooseUsSectionProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Simple counter animation
    if (counterRef.current) {
      let count = 0;
      const target = 25;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(count).toString();
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <section className={`section-space position-relative overflow-hidden${grayBg ? ' gray-bg' : ''}`}>
      <div className="choose-us__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="choose-us__media">
                <div className="choose-us__media-thumb">
                  <div className="choose-us__media-thumb-img">
                    <div className="choose-us__media-thumb-img-green-border wow fadeInLeft animated" data-wow-delay=".3s"></div>
                    <div className="choose-us__media-thumb-img-img wow fadeInLeft animated" data-wow-delay=".4s">
                      <img src="/assets/img/choose-us/choose-us-left-img.png" alt="img not found" />
                    </div>
                  </div>
                  <div className="choose-us__media-thumb-circle spin">
                    <img src="/assets/img/choose-us/choose-us-circle-img.png" alt="img not found" />
                  </div>
                </div>
                <div className="choose-us__media-img">
                  <div className="choose-us__text">
                    <h3 className="counter__item-title">
                      <span ref={counterRef}>0</span>
                    </h3>
                    <p>Years Of <br /> Experience</p>
                  </div>
                  <div className="choose-us__media-img-pictute wow fadeInLeft animated" data-wow-delay=".6s">
                    <img src="/assets/img/choose-us/choose-us-right-img.png" alt="img not found" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="choose-us__content">
                <div className="section__title-wrapper mb-20">
                  <h6 className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3754_90)">
                        <path d="M19.299 2.66986C19.2609 2.59008 19.1926 2.52868 19.1093 2.49911L12.195 0.0581985C12.0215 -0.00317634 11.831 0.0879901 11.7697 0.26149L10.199 4.70581H9.51204V3.57248C9.51202 3.41941 9.47686 3.26838 9.40926 3.13104C9.34166 2.9937 9.24343 2.87372 9.12214 2.78033C9.00085 2.68695 8.85974 2.62266 8.70968 2.59242C8.55962 2.56217 8.40462 2.56679 8.25663 2.6059L0.24744 4.7169V4.7229C0.176847 4.74064 0.114146 4.78133 0.0691834 4.83857C0.0242205 4.89581 -0.000457842 4.96636 -0.000976562 5.03915L-0.000976562 19.0391C-0.000976562 19.5914 0.446773 20.0391 0.999021 20.0391H10.3323C10.8846 20.0391 11.3323 19.5914 11.3323 19.0391V16.0145L14.0057 16.9582C14.1793 17.0194 14.3697 16.9285 14.431 16.7548L19.3133 2.92457C19.3278 2.88326 19.334 2.83949 19.3315 2.79578C19.329 2.75208 19.318 2.70928 19.2989 2.66986H19.299Z" fill="#034833"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_3754_90">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.0390625)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    WHY CHOOSE US
                  </h6>
                  <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">
                    Where Ambitions Turn Into Global Opportunities
                  </h2>
                </div>
                <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay=".4s">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla
                </p>
                <div className="choose-us__content-wrapper mt-35">
                  <div className="choose-us__content-wrapper-box wow fadeInLeft animated" data-wow-delay=".5s" style={{ flex: '1', minWidth: '0' }}>
                      <div className="choose-us__content-wrapper-box-title">
                        <div className="choose-us__content-wrapper-box-title-icon">
                          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3754_106)">
                              <path d="M28.125 5.625C28.125 2.52187 25.6031 0 22.5 0C19.3969 0 16.875 2.52187 16.875 5.625C16.875 8.72812 19.3969 11.25 22.5 11.25C25.6031 11.25 28.125 8.72812 28.125 5.625ZM18.75 5.625C18.75 3.55781 20.4328 1.875 22.5 1.875C24.5672 1.875 26.25 3.55781 26.25 5.625C26.25 7.69219 24.5672 9.375 22.5 9.375C20.4328 9.375 18.75 7.69219 18.75 5.625Z" fill="white"/>
                            </g>
                          </svg>
                        </div>
                        <h3>Study Pathway</h3>
                      </div>
                      <div className="choose-us__content-wrapper-box-list">
                        <ul>
                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}><i className="fa-solid fa-check" style={{ flexShrink: 0 }}></i><span style={{ whiteSpace: 'nowrap' }}>Guidance for Global Education</span></li>
                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}><i className="fa-solid fa-check" style={{ flexShrink: 0 }}></i><span style={{ whiteSpace: 'nowrap' }}>University & Course Selection</span></li>
                        </ul>
                      </div>
                  </div>
                  <div className="choose-us__content-wrapper-box wow fadeInLeft animated" data-wow-delay=".6s" style={{ flex: '1', minWidth: '0' }}>
                      <div className="choose-us__content-wrapper-box-title">
                        <div className="choose-us__content-wrapper-box-title-icon">
                          <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3754_112)">
                              <path d="M43.875 35.625H40.5V15.9375C40.5005 15.8203 40.4685 15.705 40.4075 15.6045C40.3466 15.5041 40.2591 15.4227 40.1545 15.3694L22.6545 5.43281C22.541 5.37227 22.412 5.33984 22.281 5.33984C22.15 5.33984 22.021 5.37227 21.9075 5.43281L4.4075 15.3701C4.30289 15.4234 4.21543 15.5048 4.15446 15.6052C4.09349 15.7057 4.06143 15.821 4.06172 15.9382V35.6257H0.686719C0.601582 35.6257 0.516941 35.6434 0.438408 35.6778C0.359874 35.7122 0.289048 35.7626 0.230222 35.8258C0.171397 35.8891 0.125889 35.9638 0.0966018 36.0453C0.0673146 36.1268 0.0551564 36.2133 0.0609375 36.2998V39.3748C0.0609375 39.5488 0.130093 39.7157 0.253379 39.839C0.376666 39.9623 0.543606 40.0315 0.717571 40.0315H44.2816C44.3667 40.0315 44.4514 40.0138 44.5299 39.9794C44.6084 39.945 44.6793 39.8946 44.7381 39.8313C44.7969 39.7681 44.8424 39.6934 44.8717 39.6119C44.901 39.5304 44.9132 39.4438 44.9074 39.3573V36.2823C44.9116 36.1959 44.8994 36.1094 44.8703 36.0281C44.8411 35.9467 44.7957 35.8722 44.7369 35.8091C44.6781 35.746 44.6072 35.6957 44.5286 35.6614C44.45 35.627 44.365 35.6093 44.2793 35.6093L43.875 35.625ZM5.9375 16.8352L22.2773 7.59141L38.6172 16.8352V35.625H5.9375V16.8352ZM43.0312 38.1562H1.96875V37.5H43.0312V38.1562Z" fill="white"/>
                            </g>
                          </svg>
                        </div>
                        <h3>Visa Support</h3>
                      </div>
                      <div className="choose-us__content-wrapper-box-list">
                        <ul>
                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}><i className="fa-solid fa-check" style={{ flexShrink: 0 }}></i><span style={{ whiteSpace: 'nowrap' }}>Student Visa Documentation</span></li>
                          <li style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}><i className="fa-solid fa-check" style={{ flexShrink: 0 }}></i><span style={{ whiteSpace: 'nowrap' }}>Pre & Post Departure Support</span></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div className="choose-us__button mt-40">
                  <div className="choose-us__button-btn wow fadeInLeft animated" data-wow-delay=".7s">
                    <Link href="/story" className="rr-btn-rounded">Read More</Link>
                  </div>
                  <div className="choose-us__button-text wow fadeInLeft animated" data-wow-delay=".8s">
                    <div className="choose-us__button-text-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="choose-us__button-text-number">
                      <h6>Need help?</h6>
                      <a href="tel:(011)111-1111">(011) 111-1111</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
