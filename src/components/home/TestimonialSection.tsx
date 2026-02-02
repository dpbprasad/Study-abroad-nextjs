'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import VanillaTilt from 'vanilla-tilt';

export default function TestimonialSection() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize tilt effect
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }

    // Initialize Swiper
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && document.querySelector('.testimonial__content')) {
        new Swiper('.testimonial__content', {
          modules: [Navigation],
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          speed: 600,
          autoHeight: false,
          navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup tilt
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section className="testimonial__area section-space-top gray-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="testimonial__media" ref={tiltRef}>
              <Image
                src="/assets/img/testimonial/testimonial2-left-img.png"
                alt="Happy student testimonial"
                width={600}
                height={700}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial__content swiper wow fadeInLeft animated" data-wow-delay=".3s">
                <div className="swiper-wrapper">
                {/* Testimonial 1 */}
                <div className="swiper-slide">
                  <div className="testimonial__content-text">
                    <div className="testimonial__content-text-icon">
                      <svg width="73" height="56" viewBox="0 0 73 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.8723 41.0882C36.493 40.7847 36.4172 40.4054 36.5689 39.7605L43.8519 14.5354C43.9657 14.0423 44.383 13.7009 44.914 13.7009H62.0595C62.7423 13.7009 63.0078 14.0044 63.0078 14.6492V17.2286C62.9699 17.7218 62.8181 18.177 62.5526 18.5563L43.5105 43.6676C43.2071 44.1228 42.5622 44.2745 42.0691 43.971L36.8723 41.0882ZM10.1679 41.0882C9.78857 40.7847 9.71272 40.4054 9.86444 39.7605L17.1475 14.5354C17.2613 14.0044 17.7544 13.663 18.2855 13.7009H35.3551C36.0378 13.7009 36.3034 14.0044 36.3034 14.6492V17.2286C36.2654 17.7218 36.1137 18.177 35.8482 18.5563L16.8819 43.6676C16.5785 44.1228 15.9336 44.2745 15.4405 43.9331L10.1679 41.0882Z" fill="white"/>
                      </svg>
                    </div>
                    <p>The team guided me through every step of my study abroad journey, from university selection to visa application. Their expertise and dedication made my dream of studying in Canada a reality. I couldn't have done it without their support!</p>
                    <div className="testimonial__content-text-title">
                      <div className="testimonial__content-text-title-img">
                        <Image src="/assets/img/testimonial/testimonial-dp.png" alt="User profile" width={60} height={60} />
                      </div>
                      <div className="testimonial__content-text-title-name">
                        <h6>Sarah Johnson</h6>
                        <span>University of Toronto</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="swiper-slide">
                  <div className="testimonial__content-text">
                    <div className="testimonial__content-text-icon">
                      <svg width="73" height="56" viewBox="0 0 73 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.8723 41.0882C36.493 40.7847 36.4172 40.4054 36.5689 39.7605L43.8519 14.5354C43.9657 14.0423 44.383 13.7009 44.914 13.7009H62.0595C62.7423 13.7009 63.0078 14.0044 63.0078 14.6492V17.2286C62.9699 17.7218 62.8181 18.177 62.5526 18.5563L43.5105 43.6676C43.2071 44.1228 42.5622 44.2745 42.0691 43.971L36.8723 41.0882ZM10.1679 41.0882C9.78857 40.7847 9.71272 40.4054 9.86444 39.7605L17.1475 14.5354C17.2613 14.0044 17.7544 13.663 18.2855 13.7009H35.3551C36.0378 13.7009 36.3034 14.0044 36.3034 14.6492V17.2286C36.2654 17.7218 36.1137 18.177 35.8482 18.5563L16.8819 43.6676C16.5785 44.1228 15.9336 44.2745 15.4405 43.9331L10.1679 41.0882Z" fill="white"/>
                      </svg>
                    </div>
                    <p>Professional, responsive, and incredibly helpful! They helped me secure admission to my dream university in Australia and made the entire visa process stress-free. Their personalized approach really sets them apart from other consultants.</p>
                    <div className="testimonial__content-text-title">
                      <div className="testimonial__content-text-title-img">
                        <Image src="/assets/img/testimonial/testimonial-dp.png" alt="User profile" width={60} height={60} />
                      </div>
                      <div className="testimonial__content-text-title-name">
                        <h6>Michael Chen</h6>
                        <span>University of Melbourne</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="swiper-slide">
                  <div className="testimonial__content-text">
                    <div className="testimonial__content-text-icon">
                      <svg width="73" height="56" viewBox="0 0 73 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.8723 41.0882C36.493 40.7847 36.4172 40.4054 36.5689 39.7605L43.8519 14.5354C43.9657 14.0423 44.383 13.7009 44.914 13.7009H62.0595C62.7423 13.7009 63.0078 14.0044 63.0078 14.6492V17.2286C62.9699 17.7218 62.8181 18.177 62.5526 18.5563L43.5105 43.6676C43.2071 44.1228 42.5622 44.2745 42.0691 43.971L36.8723 41.0882ZM10.1679 41.0882C9.78857 40.7847 9.71272 40.4054 9.86444 39.7605L17.1475 14.5354C17.2613 14.0044 17.7544 13.663 18.2855 13.7009H35.3551C36.0378 13.7009 36.3034 14.0044 36.3034 14.6492V17.2286C36.2654 17.7218 36.1137 18.177 35.8482 18.5563L16.8819 43.6676C16.5785 44.1228 15.9336 44.2745 15.4405 43.9331L10.1679 41.0882Z" fill="white"/>
                      </svg>
                    </div>
                    <p>I was overwhelmed with the application process, but this consultancy made everything so simple. From IELTS preparation tips to scholarship applications, they covered it all. Now I'm studying in the UK, living my dream!</p>
                    <div className="testimonial__content-text-title">
                      <div className="testimonial__content-text-title-img">
                        <Image src="/assets/img/testimonial/testimonial-dp.png" alt="User profile" width={60} height={60} />
                      </div>
                      <div className="testimonial__content-text-title-name">
                        <h6>Priya Sharma</h6>
                        <span>University of Manchester</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__content-button d-flex">
                <div className="testimonial__content-button-border"></div>
                <button className="testimonial-prev testimonial__content-button-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="testimonial-next testimonial__content-button-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
