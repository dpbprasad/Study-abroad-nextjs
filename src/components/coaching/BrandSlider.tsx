'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function BrandSlider() {
  const brands = [
    {
      name: 'Segment',
      image: '/assets/imgs/brands/home2-companey-brands-img-1.png',
      url: 'https://segment.com/',
      delay: '.1s'
    },
    {
      name: 'Splunk',
      image: '/assets/imgs/brands/home2-companey-brands-img-2.png',
      url: 'https://www.splunk.com/',
      delay: '.2s'
    },
    {
      name: 'HubSpot',
      image: '/assets/imgs/brands/home2-companey-brands-img-3.png',
      url: 'https://www.hubspot.com/',
      delay: '.3s'
    },
    {
      name: 'Asana',
      image: '/assets/imgs/brands/home2-companey-brands-img-4.png',
      url: 'https://app.asana.com/',
      delay: '.4s'
    },
    {
      name: 'Airtasker',
      image: '/assets/imgs/brands/home2-companey-brands-img-5.png',
      url: 'https://www.airtasker.com/',
      delay: '.5s'
    }
  ];

  return (
    <section className="main-brand__area section-space-bottom">
      <div className="brand__area">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                className="brand__active wow fadeIn"
                data-wow-delay=".3s"
              >
                {brands.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <div className="brand__item text-center wow fadeIn animated" data-wow-delay={brand.delay}>
                      <div className="brand__thumb">
                        <a href={brand.url}>
                          <img className="img-fluid" src={brand.image} alt="image not found" />
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
    </section>
  );
}
