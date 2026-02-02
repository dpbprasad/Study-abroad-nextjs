'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface UniversityLogosProps {
  grayBg?: boolean;
}

export default function UniversityLogos({ grayBg = true }: UniversityLogosProps) {
  const universities = [
    { name: 'Australian National University', logo: '/assets/img/uni-logo/australian national university.svg' },
    { name: 'Deakin University', logo: '/assets/img/uni-logo/deakin university.png' },
    { name: 'Manitoba University', logo: '/assets/img/uni-logo/manitoba university.svg' },
    { name: 'New South Wales University', logo: '/assets/img/uni-logo/new south wales university.png' },
    { name: 'Toronto Metropolitan University', logo: '/assets/img/uni-logo/toronto metropolitan university.svg' },
    { name: 'Victoria University', logo: '/assets/img/uni-logo/victoria university.svg' },
    { name: 'Waikato University', logo: '/assets/img/uni-logo/waikato university.svg' },
  ];

  return (
    <section className={`main-brand__area ${grayBg ? 'gray-bg' : ''} section-space-bottom-2`}>
      <div className="brand__area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper brand__active wow fadeIn" data-wow-delay=".3s">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={50}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 35,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {universities.map((uni, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand__item text-center wow fadeIn animated" data-wow-delay={`.${index + 1}s`}>
                        <div className="brand__thumb">
                          <Image
                            className="img-fluid"
                            src={uni.logo}
                            alt={uni.name}
                            width={150}
                            height={52}
                            style={{
                              height: '52px',
                              width: 'auto',
                              maxWidth: '100%',
                              objectFit: 'contain',
                              margin: '0 auto',
                              display: 'block'
                            }}
                          />
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
