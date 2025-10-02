'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export default function TestimonialSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && document.querySelector('.testimonial__content')) {
        new Swiper('.testimonial__content', {
          modules: [Navigation],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
          navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="testimonial__area section-space-top gray-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="testimonial__media" data-tilt>
              <img src="/assets/img/testimonial/testimonial2-left-img.png" alt="img not found" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial__content swiper wow fadeInLeft animated" data-wow-delay=".3s">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial__content-text">
                    <div className="testimonial__content-text-icon">
                      <svg width="73" height="56" viewBox="0 0 73 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.8723 41.0882C36.493 40.7847 36.4172 40.4054 36.5689 39.7605L43.8519 14.5354C43.9657 14.0423 44.383 13.7009 44.914 13.7009H62.0595C62.7423 13.7009 63.0078 14.0044 63.0078 14.6492V17.2286C62.9699 17.7218 62.8181 18.177 62.5526 18.5563L43.5105 43.6676C43.2071 44.1228 42.5622 44.2745 42.0691 43.971L36.8723 41.0882ZM10.1679 41.0882C9.78857 40.7847 9.71272 40.4054 9.86444 39.7605L17.1475 14.5354C17.2613 14.0044 17.7544 13.663 18.2855 13.7009H35.3551C36.0378 13.7009 36.3034 14.0044 36.3034 14.6492V17.2286C36.2654 17.7218 36.1137 18.177 35.8482 18.5563L16.8819 43.6676C16.5785 44.1228 15.9336 44.2745 15.4405 43.9331L10.1679 41.0882Z" fill="white"/>
                      </svg>
                    </div>
                    <p>We have been operating for over an providin top-notch services to our clients and build strong track record in the industry.We have been operating for over a decad providi ina top-notch  We have been operating</p>
                    <div className="testimonial__content-text-title">
                      <div className="testimonial__content-text-title-img">
                        <img src="/assets/img/testimonial/testimonial-dp.png" alt="img not found" />
                      </div>
                      <div className="testimonial__content-text-title-name">
                        <h6>Albert Flores</h6>
                        <span>Alberta University</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__content-button d-flex">
                <div className="testimonial__content-button-border"></div>
                <button className="testimonial-prev testimonial__content-button-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="testimonial-next testimonial__content-button-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
