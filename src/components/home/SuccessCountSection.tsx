'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface SuccessCountSectionProps {
  grayBg?: boolean;
}

export default function SuccessCountSection({ grayBg = true }: SuccessCountSectionProps) {
  const counter1Ref = useRef<HTMLSpanElement>(null);
  const counter2Ref = useRef<HTMLSpanElement>(null);
  const counter3Ref = useRef<HTMLSpanElement>(null);
  const counter4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateCounter = (ref: React.RefObject<HTMLSpanElement>, target: number, suffix: string = '') => {
      if (ref.current) {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          if (ref.current) {
            ref.current.textContent = Math.floor(count) + suffix;
          }
        }, 16);

        return () => clearInterval(timer);
      }
    };

    animateCounter(counter1Ref, 10, 'k+');
    animateCounter(counter2Ref, 20, '+');
    animateCounter(counter3Ref, 5, 'k+');
    animateCounter(counter4Ref, 100, '+');
  }, []);

  return (
    <section className={`section-space-bottom counter position-relative overflow-hidden${grayBg ? ' gray-bg' : ''}`}>
      <div className="faq__area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="faq__media" data-tilt>
                <img src="/assets/img/success-count/success-left.png" alt="img not found" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="faq__content white-bg d-flex faq-radius position-relative overflow-hidden mb-30 border">
                <div className="faq__content-text faq-padding">
                  <div className="faq__content-text-icon wow fadeInLeft animated" data-wow-delay=".2s">
                    <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_5704_7618)">
                        <path d="M37.1602 9.00391C38.8477 9.00391 40.2539 7.63281 40.2539 5.91016C40.2539 4.1875 38.8477 2.85156 37.1602 2.85156C35.4727 2.85156 34.0664 4.22266 34.0664 5.94531C34.0664 7.63281 35.4375 9.00391 37.1602 9.00391ZM37.1602 4.08203C38.1797 4.08203 39.0234 4.92578 39.0234 5.94531C39.0234 6.96484 38.1797 7.80859 37.1602 7.80859C36.1406 7.80859 35.2969 6.96484 35.2969 5.94531C35.2969 4.92578 36.1055 4.08203 37.1602 4.08203Z" fill="white"/>
                        <path d="M40.8517 16.1406C40.2892 14.9453 39.6212 13.7852 38.8478 12.7305C40.5353 11.6055 43.0314 9.39062 43.0314 5.94531C43.0314 2.67578 40.3946 0.0742188 37.1603 0.0742188C33.9259 0.0742188 31.254 2.67578 31.254 5.94531V6.33203C30.797 6.12109 30.3399 5.91016 29.8829 5.69922C16.6642 0.390625 2.03916 9.98828 1.96885 24.5781C1.9337 35.8281 11.004 44.9688 22.254 45.0039C33.504 45.0391 42.6446 35.9688 42.6798 24.7188C42.6798 24.6484 42.6798 24.6133 42.6798 24.543C42.6798 21.6602 42.047 18.7773 40.8517 16.1406Z" fill="white"/>
                        <path d="M10.582 20.6055C8.89453 20.6055 7.48828 21.9766 7.48828 23.6992C7.48828 25.3867 8.85938 26.793 10.582 26.793C12.3047 26.793 13.6758 25.4219 13.6758 23.6992C13.6406 22.0117 12.2695 20.6055 10.582 20.6055ZM10.582 25.5625C9.5625 25.5625 8.71875 24.7188 8.71875 23.6992C8.71875 22.6797 9.5625 21.8359 10.582 21.8359C11.6016 21.8359 12.4453 22.6797 12.4453 23.6992C12.4453 24.7188 11.6016 25.5625 10.582 25.5625Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_5704_7618">
                          <rect width="45" height="45" fill="white" transform="translate(0 0.0390625)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h5 className="wow fadeInLeft animated" data-wow-delay=".3s">
                    Start Your Global Education Journey Today
                  </h5>
                  <p className="wow fadeInLeft animated" data-wow-delay=".4s">
                    Lorem Ipsum is simply dummy text the printing and typese <br /> Lorem Ipsum has been the industry's standard dummy
                  </p>
                  <Link href="/contact" className="rr-btn2 mt-25 wow fadeInLeft animated" data-wow-delay=".5s">
                    Contact us <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="faq__content-right-img wow fadeInLeft animated" data-wow-delay=".6s">
                  <img src="/assets/img/success-count/success-right.png" alt="img not found" />
                </div>
              </div>
              <div className="row counter__bg mt-30 mb-minus-20">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span className="odometer" data-count="10" ref={counter1Ref}>0</span>
                    </h3>
                    <p>Complete project</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span className="odometer" data-count="20" ref={counter2Ref}>0</span>
                    </h3>
                    <p>Team member</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="counter__item mb-2">
                    <h3 className="counter__item-title">
                      <span className="odometer" data-count="5" ref={counter3Ref}>0</span>
                    </h3>
                    <p>Winning award</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span className="odometer" data-count="100" ref={counter4Ref}>0</span>
                    </h3>
                    <p>Complete project</p>
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
