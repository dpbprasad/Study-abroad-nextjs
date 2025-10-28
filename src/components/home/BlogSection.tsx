'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export default function BlogSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && document.querySelector('.mySwiper')) {
        new Swiper('.mySwiper', {
          modules: [Navigation],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
          navigation: {
            nextEl: '.blog__slider-button-next',
            prevEl: '.blog__slider-button-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const blogs = [
    {
      image: '/assets/img/blogs/1/blog1-card.jpg',
      date: 'October 19, 2025',
      author: 'admin',
      title: 'World of Wander Discovering Diverse Landscapes',
      excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
      delay: '.2s'
    },
    {
      image: '/assets/img/blogs/1/blog1-card.jpg',
      date: 'October 19, 2022',
      author: 'admin',
      title: 'Search of Serenity Tranquil Retreats and Escapes',
      excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
      delay: '.3s'
    },
    {
      image: '/assets/img/blogs/1/blog1-card.jpg',
      date: 'October 19, 2022',
      author: 'admin',
      title: 'Road to Adventure Embarking on New Horizons',
      excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
      delay: '.4s'
    },
  ];

  return (
    <section className="latest-blog__area section-space-bottom overflow-hidden gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-slider-title-3 mb-60">
              <div className="section-slider-title-3-wrapper">
                <h6 className="section-slider-title-3-wrapper-subtitle wow fadeInLeft animated" data-wow-delay=".2s">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3 2.67767C19.2618 2.5979 19.1936 2.53649 19.1103 2.50692L12.1959 0.066011C12.0224 0.00463616 11.832 0.0958026 11.7706 0.269302L10.2 4.71363H9.51302V3.5803C9.513 3.42722 9.47783 3.27619 9.41023 3.13886C9.34263 3.00152 9.2444 2.88153 9.12311 2.78815C9.00182 2.69476 8.86071 2.63047 8.71066 2.60023C8.5606 2.56999 8.4056 2.5746 8.25761 2.61371L0.248416 4.72471V4.73071C0.177823 4.74845 0.115123 4.78914 0.0701599 4.84638C0.0251971 4.90362 0.000518721 4.97417 0 5.04696L0 19.0469C0 19.5992 0.447749 20.0469 0.999998 20.0469H10.3333C10.8856 20.0469 11.3333 19.5992 11.3333 19.0469V16.0224L14.0066 16.9661C14.1803 17.0272 14.3707 16.9363 14.4319 16.7626L19.3143 2.93238C19.3287 2.89107 19.3349 2.84731 19.3325 2.8036C19.33 2.75989 19.319 2.7171 19.2999 2.67767H19.3ZM8.42769 3.25655C8.47703 3.24355 8.52869 3.24202 8.57871 3.2521C8.62873 3.26218 8.67577 3.28358 8.71623 3.31467C8.7567 3.34583 8.78947 3.38587 8.81202 3.4317C8.83456 3.47753 8.84628 3.52793 8.84627 3.579V4.71363H2.90366L8.42769 3.25655ZM10.6666 19.0469C10.6666 19.1353 10.6315 19.2201 10.569 19.2826C10.5065 19.3451 10.4217 19.3803 10.3333 19.3803H0.999998C0.911593 19.3803 0.826808 19.3451 0.764296 19.2826C0.701784 19.2201 0.666665 19.1353 0.666665 19.0469V5.38029H10.3333C10.4217 5.38029 10.5065 5.41541 10.569 5.47792C10.6315 5.54043 10.6666 5.62522 10.6666 5.71362V19.0469ZM13.4067 6.64933L13.8333 6.44704L14.0366 6.87233L12.417 11.4559C12.3877 11.5393 12.3926 11.6309 12.4306 11.7107L12.7776 12.4366L12.6704 12.7409L12.0093 12.0564C11.9734 12.019 11.9294 11.9905 11.8806 11.9731C11.8318 11.9557 11.7797 11.95 11.7283 11.9563L11.3333 12.0063V11.5596L11.6176 11.4236C11.6974 11.3855 11.7588 11.3173 11.7884 11.234L12.4551 9.3487L13.4067 6.64933ZM14.0353 8.87424L14.7121 9.96166L14.5963 10.2893L13.7866 9.58032L14.0353 8.87424ZM11.3333 10.5199V9.60391L11.6613 9.59024L11.3333 10.5199ZM11.9001 8.91333L11.3333 8.93662V8.49291L12.1494 8.20824L11.9001 8.91333ZM13.9141 16.2263L11.3333 15.3153V12.6782L11.6456 12.6392L12.5667 13.592C12.598 13.6239 12.6353 13.6491 12.6765 13.6663C12.7177 13.6834 12.762 13.6922 12.8066 13.6919C12.8304 13.6921 12.8541 13.6895 12.8773 13.6843C12.9328 13.6722 12.9843 13.6462 13.0268 13.6086C13.0694 13.571 13.1017 13.5232 13.1206 13.4696L13.4539 12.5266C13.4834 12.4432 13.4785 12.3516 13.4402 12.272L13.0916 11.5469L13.5477 10.2553L14.527 11.1137C14.5878 11.167 14.6659 11.1964 14.7468 11.1964C14.7752 11.1964 14.8036 11.1926 14.8311 11.1853C14.8837 11.1715 14.9322 11.145 14.9723 11.1082C15.0124 11.0714 15.0429 11.0253 15.0611 10.974L15.3944 10.031C15.411 9.98387 15.4168 9.9336 15.4114 9.88393C15.406 9.83425 15.3894 9.78644 15.363 9.74403L14.3196 8.06795L14.7103 6.9617C14.7249 6.92037 14.7312 6.87657 14.7289 6.8328C14.7265 6.78903 14.7156 6.74615 14.6966 6.70662L14.2901 5.85637C14.2712 5.81686 14.2447 5.78145 14.2121 5.75217C14.1796 5.72288 14.1416 5.7003 14.1003 5.68572C14.059 5.67113 14.0152 5.66482 13.9715 5.66715C13.9277 5.66948 13.8849 5.6804 13.8454 5.69929L12.9946 6.10604C12.9552 6.1249 12.9199 6.15135 12.8906 6.18388C12.8614 6.21641 12.8389 6.25438 12.8244 6.29562L12.4333 7.40324L11.3333 7.78695V5.71362C11.3329 5.54304 11.2888 5.37541 11.2051 5.22677C11.1214 5.07813 11.0009 4.95345 10.8553 4.86467L11.4001 3.31992L11.5223 2.97338L12.2891 0.806718L18.5753 3.02563L13.9141 16.2263Z" fill="#034833"/>
                    <path d="M16.5439 5.13719L16.7657 4.50844L17.3374 4.71011L17.1155 5.33886L16.5439 5.13719ZM11.972 3.52307L12.194 2.89453L12.7654 3.09632L12.5434 3.7249L11.972 3.52307ZM15.4008 4.73369L15.6228 4.10495L16.1943 4.30678L15.9723 4.93536L15.4008 4.73369ZM13.115 3.92674L13.337 3.29816L13.9083 3.49999L13.6863 4.12857L13.115 3.92674ZM14.2579 4.3299L14.48 3.70132L15.0514 3.90315L14.8294 4.53169L14.2579 4.3299ZM5.51301 6.71481C3.67202 6.71481 2.17969 8.20714 2.17969 10.0481C2.17969 11.8891 3.67202 13.3815 5.51301 13.3815C7.35401 13.3815 8.84634 11.8891 8.84634 10.0481C8.84438 8.20814 7.35318 6.7169 5.51301 6.71481ZM7.92005 8.90848L7.4653 8.80856C7.2653 8.76444 7.06522 8.72948 6.86322 8.69919C6.83297 8.4974 6.79646 8.29661 6.75372 8.0971L6.65359 7.64252C7.20852 7.90667 7.65568 8.35366 7.92005 8.90848ZM2.84631 10.0481C2.84698 9.91189 2.85806 9.77585 2.87969 9.64122L3.70393 9.45781C3.83039 9.42981 3.95768 9.40656 4.08527 9.38456C4.05304 9.82642 4.05304 10.27 4.08527 10.7119C3.95764 10.6899 3.83039 10.6665 3.70393 10.6385L2.87969 10.4552C2.85809 10.3206 2.84695 10.1845 2.84635 10.0481H2.84631ZM4.76172 9.29718C5.26137 9.25259 5.76399 9.25259 6.26364 9.29718C6.30839 9.79682 6.30839 10.2995 6.26364 10.7991C5.76399 10.8439 5.26133 10.8439 4.76168 10.7991C4.71693 10.2995 4.71697 9.79682 4.76172 9.29718ZM6.93926 9.38456C7.06701 9.40656 7.1943 9.42981 7.32059 9.45781L8.14497 9.64122C8.19119 9.91059 8.19119 10.1859 8.14497 10.4552L7.32059 10.6385C7.19434 10.6665 7.06701 10.6899 6.93926 10.7122C6.97165 10.2703 6.97165 9.82652 6.93926 9.38456ZM5.91972 7.41485L6.10301 8.23956C6.13101 8.36585 6.1546 8.49314 6.17676 8.62089C5.73474 8.5885 5.29095 8.5885 4.84893 8.62089C4.87106 8.49314 4.89435 8.36585 4.92268 8.23956L5.10593 7.41485C5.37527 7.36912 5.65039 7.36912 5.91972 7.41485ZM4.37306 7.6401L4.27293 8.09485C4.22898 8.29485 4.19397 8.49494 4.16373 8.69694C3.96195 8.72707 3.76116 8.76348 3.56164 8.8061L3.10689 8.90623C3.37146 8.3519 3.81845 7.9053 4.37302 7.64123L4.37306 7.6401ZM3.10623 11.1868L3.56098 11.2869C3.76098 11.3308 3.96085 11.3658 4.16306 11.3961C4.19319 11.5979 4.2296 11.7987 4.27222 11.9982L4.37235 12.4528C3.8175 12.1889 3.37024 11.7422 3.10556 11.1878L3.10623 11.1868ZM5.10622 12.6795L4.92293 11.8548C4.8946 11.7288 4.87135 11.6012 4.84918 11.4738C5.06993 11.4899 5.2916 11.5008 5.51326 11.5008C5.73493 11.5008 5.95597 11.4899 6.17701 11.4738C6.15489 11.6012 6.13126 11.7288 6.10326 11.8548L5.92001 12.6795C5.65068 12.7252 5.37556 12.7252 5.10622 12.6795ZM6.65289 12.4542L6.75301 11.9995C6.7973 11.7995 6.83197 11.5996 6.86259 11.3974C7.06434 11.3672 7.2651 11.3308 7.46459 11.2882L7.91918 11.1881C7.65505 11.7434 7.20779 12.1908 6.65259 12.4552L6.65289 12.4542ZM2.84635 16.0481H8.17967V16.7148H2.84635V16.0481ZM3.51302 17.3815H7.51301V18.0481H3.51302V17.3815ZM5.17968 14.7148H5.84635V15.3815H5.17968V14.7148ZM3.84635 14.7148H4.51302V15.3815H3.84635V14.7148ZM6.51301 14.7148H7.17968V15.3815H6.51301V14.7148Z" fill="#034833"/>
                  </svg>
                  RECENT BLOGS
                </h6>
                <h2 className="section-slider-title-3-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">
                  The Ultimate Guide to Choosing Your <br />
                  Study Destination
                </h2>
              </div>
              <div className="section-slider-title-3-button d-flex align-items-center">
                <Link href="/blog-grid" className="rr-btn me-3 wow fadeInLeft animated" data-wow-delay=".3s">View All Blogs</Link>
                <button className="section-slider-title-3-button-right blog__slider-button-prev wow fadeInLeft animated" data-wow-delay=".4s">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="section-slider-title-3-button-right blog__slider-button-next wow fadeInLeft animated" data-wow-delay=".5s">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-minus-30">
          <div className="col-12">
            <div className="latest-blog__item">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {blogs.map((blog, index) => (
                    <div key={index} className={`swiper-slide latest-blog__item-slide mb-30 wow fadeInLeft animated`} data-wow-delay={blog.delay}>
                      {index === 0 ? (
                        <div className="latest-blog__item-slide-inner">
                          <div className="latest-blog__item-media">
                            <Link href="/blog-details">
                              <img src={blog.image} alt="images not found" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="latest-blog__item-text">
                            <div className="latest-blog__item-text-meta d-flex">
                              <span className="meta-comment">
                                <Link href="/blog-details">
                                  <i className="fa-solid fa-calendar-days"></i> {blog.date}
                                </Link>
                              </span>
                              <span>
                                <Link href="/blog-details">
                                  <i className="fa-regular fa-user"></i>By {blog.author}
                                </Link>
                              </span>
                            </div>
                            <div className="latest-blog__item-text-bottom">
                              <Link href="/blog-details">
                                <h4>{blog.title}</h4>
                              </Link>
                              <p>{blog.excerpt}</p>
                              <Link href="/blog-details" className="readmore d-flex align-items-center">
                                Read More <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="latest-blog__item-media">
                            <Link href="/blog-details">
                              <img src={blog.image} alt="images not found" className="img-fluid" />
                            </Link>
                          </div>
                          <div className="latest-blog__item-text">
                            <div className="latest-blog__item-text-meta d-flex">
                              <span className="meta-comment">
                                <Link href="/blog-details">
                                  <i className="fa-solid fa-calendar-days"></i> {blog.date}
                                </Link>
                              </span>
                              <span>
                                <Link href="/blog-details">
                                  <i className="fa-regular fa-user"></i>By {blog.author}
                                </Link>
                              </span>
                            </div>
                            <div className="latest-blog__item-text-bottom">
                              <Link href="/blog-details">
                                <h4>{blog.title}</h4>
                              </Link>
                              <p>{blog.excerpt}</p>
                              <Link href="/blog-details" className="readmore d-flex align-items-center">
                                Read More <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
