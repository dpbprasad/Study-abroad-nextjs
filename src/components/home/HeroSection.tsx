'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="overflow-hidden p-relative gray-bg">
      <div className="banner-home">
        <div className="banner-wrap padding-space dark-green">
          <div className="container">
            <div className="banner-home__all-shape">
              <div className="left-tower upDown-top">
                <img src="/assets/img/hero/banner-left-towor.png" alt="img not found" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-home__content p-relative">
                  <h1 className="title mb-xs-10 wow fadeInLeft animated" data-wow-delay=".4s">
                    Visa Made Easy Dreams Made Possible
                  </h1>
                  <div className="banner-home__btn__wrapper d-flex flex-wrap mt-40 mt-md-35 mt-sm-30 mt-xs-25">
                    <Link href="/about" className="rr-btn btn-transparent wow fadeInLeft animated" data-wow-delay=".6s">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="d-flex align-items-center">
                      <a href="https://www.youtube.com/watch?v=DIFCMtzg7xg" className="popup-video zooming banner-video-button">
                        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_836_9)">
                            <path d="M19.5 10.134C20.1667 10.5189 20.1667 11.4811 19.5 11.866L7.5 18.7942C6.83333 19.1791 6 18.698 6 17.9282L6 4.0718C6 3.302 6.83333 2.82087 7.5 3.20577L19.5 10.134Z" fill="#fff"/>
                          </g>
                          <defs>
                            <filter id="filter0_d_836_9" x="0" y="0.0703125" width="26" height="27.8594" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="3"/>
                              <feGaussianBlur stdDeviation="3"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_836_9"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_836_9" result="shape"/>
                            </filter>
                          </defs>
                        </svg>
                      </a>
                      <a className="popup-video video-text wow fadeInLeft animated" data-wow-delay=".8s" href="https://www.youtube.com/watch?v=DIFCMtzg7xg">
                        Stories of Satisfaction
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-home__shape position-relative wow fadeInLeft animated" data-wow-delay=".9s">
                  <div className="ball-shape upDown">
                    <img className="img-fluid" src="/assets/img/hero/banner-bg-ball-shape.png" alt="img not found" />
                  </div>
                  <div className="man-img leftRight">
                    <img src="/assets/img/hero/banner-student-img.png" alt="img not found" />
                  </div>
                  <div className="right-tower upDown-bottom">
                    <img src="/assets/img/hero/banner-right-plane.png" alt="img not found" />
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
