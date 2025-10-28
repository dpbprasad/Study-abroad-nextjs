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
    const animateCounter = (ref: React.RefObject<HTMLSpanElement | null>, target: number, suffix: string = '') => {
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
    <section className={`section-space counter position-relative overflow-hidden${grayBg ? ' gray-bg' : ''}`}>
      <style jsx>{`
        /* FAQ Content Box - Responsive */
        .faq-content-wrapper {
          height: auto;
          min-height: 300px;
        }

        /* Counter Row - Responsive Width */
        .counter-row-wrapper {
          width: 100%;
          max-width: 865px;
          margin: 0 auto;
        }

        /* Align right column with left image */
        .col-md-8 {
          display: flex;
          flex-direction: column;
        }

        /* Responsive Image */
        .faq__media img,
        .faq__content-right-img img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Large Desktop (1400px and above) - Default styles */
        @media (min-width: 1400px) {
          .faq-content-wrapper {
            height: auto;
            min-height: 350px;
          }
          .counter-row-wrapper {
            max-width: 865px;
          }
        }

        /* Medium Desktop (1200px - 1399px) */
        @media (max-width: 1399px) and (min-width: 1200px) {
          .faq-content-wrapper {
            height: auto;
            min-height: 350px;
          }
          .counter-row-wrapper {
            max-width: 100%;
            padding: 38px;
          }
          .faq-padding {
            padding: 20px 10px 20px 20px !important;
          }
        }

        /* Small Desktop / Large Tablet (992px - 1199px) */
        @media (max-width: 1199px) and (min-width: 992px) {
          .faq-content-wrapper {
            height: auto;
            min-height: 300px;
          }
          .counter-row-wrapper {
            max-width: 100%;
            padding: 10px;
            height: 103px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .faq__content-text.faq-padding {
            padding: clamp(20px, 3vw, 30px) !important;
          }
          .counter__item-title {
            font-size: 30px !important;
            line-height: 30px !important;
          }
          .counter-row-wrapper .counter__item-title {
            font-size: 30px !important;
            line-height: 30px !important;
          }
          .counter-row-wrapper .counter__item-title span {
            font-size: 30px !important;
            line-height: 30px !important;
          }
          .counter-row-wrapper .counter-col {
            flex: 0 0 25%;
            max-width: 25%;
          }
        }

        /* Tablet (768px - 991px) */
        @media (max-width: 991px) and (min-width: 768px) {
          .faq__media {
            margin-bottom: 30px;
          }
          .faq-content-wrapper {
            height: auto;
            min-height: 280px;
          }
          .counter-row-wrapper {
            max-width: 100%;
            padding: 20px;
            margin-top: 20px !important;
          }
          .counter-col {
            display: flex;
            justify-content: center;
          }
          .counter-col .counter__item {
            text-align: center;
          }
          .faq__content-right-img {
            display: none !important;
          }
        }

        /* Mobile (below 768px) */
        @media (max-width: 767px) {
          .faq__media {
            margin-bottom: 25px;
          }
          .faq-content-wrapper {
            height: auto !important;
            min-height: auto !important;
            flex-direction: column !important;
          }
          .faq__content-right-img {
            display: none !important;
          }
          .faq__content-text.faq-padding {
            padding: 25px !important;
          }
          .counter-row-wrapper {
            max-width: 100%;
            padding: 0;
            margin-top: 20px !important;
          }
          .counter__item {
            margin-bottom: 20px;
          }
          /* Stack counter items 2 per row on mobile */
          .counter-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        /* Extra Small Mobile (below 576px) */
        @media (max-width: 575px) {
          .faq__content-text.faq-padding {
            padding: 20px !important;
          }
          .faq__content-text h5 {
            font-size: clamp(18px, 4vw, 22px) !important;
          }
          .faq__content-text p {
            font-size: clamp(14px, 3vw, 16px) !important;
          }
          /* Full width on very small screens */
          .counter-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>

      <div className="faq__area">
        <div className="container">
          <div className="row">
            {/* Left Column - Image */}
            <div className="col-md-4">
              <div className="faq__media">
                <img
                  src="/assets/img/success-count/success-left.png"
                  alt="Success Journey Illustration"
                />
              </div>
            </div>

            {/* Right Column - Content & Counters */}
            <div className="col-md-8">
              {/* FAQ Content Box */}
              <div className="faq__content white-bg d-flex faq-radius position-relative overflow-hidden mb-30 faq-content-wrapper">
                <div className="faq__content-text faq-padding">
                  <div className="faq__content-text-icon wow fadeInLeft animated" data-wow-delay=".2s">
                    <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_5704_7618)">
                        <path d="M37.1602 9.00391C38.8477 9.00391 40.2539 7.63281 40.2539 5.91016C40.2539 4.1875 38.8477 2.85156 37.1602 2.85156C35.4727 2.85156 34.0664 4.22266 34.0664 5.94531C34.0664 7.63281 35.4375 9.00391 37.1602 9.00391ZM37.1602 4.08203C38.1797 4.08203 39.0234 4.92578 39.0234 5.94531C39.0234 6.96484 38.1797 7.80859 37.1602 7.80859C36.1406 7.80859 35.2969 6.96484 35.2969 5.94531C35.2969 4.92578 36.1055 4.08203 37.1602 4.08203Z" fill="white"/>
                        <path d="M40.8517 16.1406C40.2892 14.9453 39.6212 13.7852 38.8478 12.7305C40.5353 11.6055 43.0314 9.39062 43.0314 5.94531C43.0314 2.67578 40.3946 0.0742188 37.1603 0.0742188C33.9259 0.0742188 31.254 2.67578 31.254 5.94531V6.33203C30.797 6.12109 30.3399 5.91016 29.8829 5.69922C16.6642 0.390625 2.03916 9.98828 1.96885 24.5781C1.9337 35.8281 11.004 44.9688 22.254 45.0039C33.504 45.0391 42.6446 35.9688 42.6798 24.7188C42.6798 24.6484 42.6798 24.6133 42.6798 24.543C42.6798 21.6602 42.047 18.7773 40.8517 16.1406ZM37.1603 1.26953C39.7267 1.26953 41.8009 3.34375 41.836 5.94531C41.836 9.63672 38.1798 11.8164 37.1603 12.3086C36.1759 11.7813 32.4845 9.63672 32.4845 5.94531C32.4845 3.34375 34.5587 1.26953 37.1603 1.26953ZM36.879 13.5742C37.0548 13.6445 37.2306 13.6445 37.3712 13.5742C37.4064 13.5742 37.547 13.5039 37.7579 13.3633C38.3204 14.1367 38.8126 14.9453 39.2696 15.7891H35.6134L33.1524 13.3281C33.0118 13.1875 32.8009 13.1172 32.5899 13.1523L25.3478 14.7695C25.0665 14.8398 24.8556 15.0859 24.8556 15.3672V16.8438C24.8556 17.1602 25.0665 17.4062 25.3829 17.4414L30.3751 18.2148L31.6056 20.6055C31.6759 20.7461 31.8165 20.8867 31.9923 20.9219L35.1564 21.8008V23.5938L33.2579 25.5625C33.1524 25.668 33.0821 25.8438 33.0821 25.9844V28.9727L29.6017 35.0547H27.6681V33.1211C27.6681 32.9453 27.5978 32.7695 27.4571 32.6641L24.7853 30.2383V27.4258C24.7853 27.1797 24.6095 26.9336 24.3985 26.8633L18.9142 24.8594V20.2891L22.5001 16.4219C22.7462 16.1758 22.711 15.7891 22.4649 15.543L22.4298 15.5078L19.1603 12.9766L21.8321 9.17969H27.3165C27.4923 9.17969 27.6329 9.10938 27.7384 9.00391L29.7774 6.96484C30.3399 7.21094 30.9376 7.49219 31.5001 7.80859C32.6251 11.6055 36.7032 13.4688 36.879 13.5742ZM9.98448 9.98828L11.5314 13.1875L10.3009 13.8203C10.2306 13.8555 10.1954 13.8906 10.1251 13.9258L7.20713 16.9141C7.03135 17.0898 6.9962 17.3359 7.06651 17.5469L7.48838 18.7422C7.03135 19.0234 6.57432 19.4102 6.22276 19.7969L3.72666 20.2188C4.64073 16.2109 6.85557 12.625 9.98448 9.98828ZM10.5821 30.0625C9.59776 29.5352 5.90635 27.3906 5.90635 23.6992C5.94151 21.1328 8.05088 19.0586 10.6173 19.0938C13.1485 19.1289 15.2228 21.168 15.2228 23.6992C15.2228 27.3906 11.5665 29.5703 10.5821 30.0625ZM3.23448 23.5586C3.26963 22.8555 3.33995 22.1875 3.44541 21.4844L5.23838 21.168C4.88682 21.9062 4.67588 22.7148 4.67588 23.5234H3.23448V23.5586ZM10.3009 36.6016V39.4844C5.8712 35.8984 3.26963 30.5195 3.19932 24.7891H4.78135C5.44932 29.1133 10.1251 31.2227 10.336 31.3281C10.5118 31.3984 10.6876 31.3984 10.8282 31.3281C11.3204 31.082 11.7774 30.8359 12.2345 30.5195L12.8673 31.1523V32.8398L12.0939 34C11.9181 34.2461 11.9884 34.5977 12.1993 34.8086L12.3751 34.9844L10.547 36.0742C10.4064 36.1797 10.3009 36.3555 10.3009 36.6016ZM22.3243 43.7383C18.4571 43.7383 14.6954 42.5781 11.5314 40.3984V36.9531L13.8165 35.582C14.0978 35.4062 14.2032 35.0195 14.0274 34.7383C13.9923 34.668 13.9571 34.6328 13.8868 34.5977L13.4649 34.2461L14.0274 33.4023C14.0978 33.2969 14.1329 33.1914 14.1329 33.0508V30.9414C14.1329 30.7656 14.0626 30.625 13.9571 30.5195L13.2892 29.8516C14.836 28.6211 16.5235 26.582 16.5235 23.7695C16.5235 20.5352 13.922 17.8984 10.6524 17.8984C9.94932 17.8984 9.28135 18.0039 8.61338 18.25L8.36729 17.5469L10.9337 14.9102L12.6212 14.0664C12.9376 13.9258 13.0431 13.5391 12.9024 13.2578L10.9689 9.28516C16.0314 5.55859 22.6056 4.53906 28.547 6.57812L27.0704 7.98438H21.5157C21.3048 7.98438 21.129 8.08984 21.0235 8.23047L17.8243 12.7656C17.6485 13.0469 17.6837 13.3984 17.9649 13.6094L21.1642 16.0703L17.8595 19.6211C17.754 19.7266 17.6837 19.8672 17.6837 20.043V25.2813C17.6837 25.5273 17.8595 25.7734 18.0704 25.8438L23.5548 27.8477V30.5195C23.5548 30.6953 23.6251 30.8711 23.7657 30.9766L26.4376 33.4023V35.6875C26.4376 36.0391 26.7189 36.2852 27.0353 36.2852H29.9532C30.1642 36.2852 30.3751 36.1797 30.4806 35.9688L34.2423 29.4297C34.3126 29.3242 34.3126 29.2188 34.3126 29.1133V26.1953L36.211 24.2969C36.3165 24.1914 36.3868 24.0156 36.3868 23.875V21.3789C36.3868 21.0977 36.211 20.8516 35.9298 20.7812L32.5548 19.832L31.3243 17.4063C31.2189 17.2305 31.0782 17.125 30.8673 17.0898L26.086 16.3516V15.8594L32.5196 14.418L34.9454 16.8438C35.0509 16.9492 35.2267 17.0195 35.3673 17.0195H39.8673C40.922 19.4102 41.4493 21.9766 41.4493 24.6133C41.4493 35.1602 32.8712 43.7031 22.3243 43.7383Z" fill="white"/>
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
                    Lorem Ipsum is simply dummy text the printing and typese <br className="d-none d-lg-block" /> Lorem Ipsum has been the industry's standard dummy
                  </p>
                  <Link href="/contact" className="rr-btn2 mt-25 wow fadeInLeft animated" data-wow-delay=".5s">
                    Contact us <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="faq__content-right-img wow fadeInLeft animated" data-wow-delay=".6s">
                  <img
                    src="/assets/img/success-count/success-right.png"
                    alt="Global Education"
                  />
                </div>
              </div>

              {/* Counter Stats */}
              <div className="row counter__bg mt-30 mb-minus-20 counter-row-wrapper">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 counter-col">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span ref={counter1Ref}>0</span>
                    </h3>
                    <p>Complete project</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 counter-col">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span ref={counter2Ref}>0</span>
                    </h3>
                    <p>Team member</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 counter-col">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span ref={counter3Ref}>0</span>
                    </h3>
                    <p>Winning award</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 counter-col">
                  <div className="counter__item mb-20">
                    <h3 className="counter__item-title">
                      <span ref={counter4Ref}>0</span>
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
