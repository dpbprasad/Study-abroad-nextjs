'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface UniversityLogosProps {
  grayBg?: boolean;
}

export default function UniversityLogos({ grayBg = true }: UniversityLogosProps) {
  const universities = [
    { name: 'University 1', logo: '/assets/img/uni-logo/h-logo/black-brands1.png', url: 'https://segment.com/' },
    { name: 'University 2', logo: '/assets/img/uni-logo/h-logo/black-brands2.png', url: 'https://www.splunk.com/' },
    { name: 'University 3', logo: '/assets/img/uni-logo/h-logo/black-brands3.png', url: 'https://www.hubspot.com/' },
    { name: 'University 4', logo: '/assets/img/uni-logo/h-logo/black-brands4.png', url: 'https://app.asana.com/' },
    { name: 'University 5', logo: '/assets/img/uni-logo/h-logo/black-brands5.png', url: 'https://www.airtasker.com/' },
  ];

  return (
    <section className={`main-brand__area section-space-bottom${grayBg ? ' gray-bg' : ''}`}>
      <div className="brand__area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper brand__active wow fadeIn" data-wow-delay=".3s">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {universities.map((uni, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand__item text-center wow fadeIn animated" data-wow-delay={`.${index + 1}s`}>
                        <div className="brand__thumb">
                          <a href={uni.url} target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src={uni.logo} alt={uni.name} />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
