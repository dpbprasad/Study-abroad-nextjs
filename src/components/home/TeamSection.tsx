'use client';

import Link from 'next/link';

export default function TeamSection() {
  const team = [
    {
      name: 'Member Name',
      description: 'Hi, I am here to help you discover the perfect program that matches your dreams and goals',
      image: '/assets/img/team/team-name1.png',
      icon: '/assets/img/team/team-card-icon1.png',
      delay: '.2s'
    },
    {
      name: 'Member Name',
      description: 'Hi, I am dedicated to finding the right academic path that will exceed all your expectations',
      image: '/assets/img/team/team-name2.png',
      icon: '/assets/img/team/team-card-icon2.png',
      delay: '.3s'
    },
    {
      name: 'Member Name',
      description: 'Hi, I am helping you navigate visa processes smoothly so you can focus on your adventure',
      image: '/assets/img/team/team-name3.png',
      icon: '/assets/img/team/team-card-icon3.png',
      delay: '.4s'
    },
    {
      name: 'Member Name',
      description: 'Hi, I am committed to supporting you every step of the way to make your international experience amazing',
      image: '/assets/img/team/team-name4.png',
      icon: '/assets/img/team/team-card-icon4.png',
      delay: '.5s'
    },
  ];

  return (
    <section className="visa__area section-space gray-bg">
      <div className="container">
        <div className="row">
          <div className="section__title-wrapper text-center mb-50">
            <h6 className="section__title-wrapper-center-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3756_33)">
                  <path d="M19.8 2.66986C19.7618 2.59008 19.6936 2.52868 19.6103 2.49911L12.6959 0.0581985C12.5224 -0.00317634 12.332 0.0879901 12.2706 0.26149L10.7 4.70581H10.013V3.57248C10.013 3.41941 9.97783 3.26838 9.91023 3.13104C9.84263 2.9937 9.7444 2.87372 9.62311 2.78033C9.50182 2.68695 9.36071 2.62266 9.21066 2.59242C9.0606 2.56217 8.9056 2.56679 8.75761 2.6059L0.748416 4.7169V4.7229C0.677823 4.74064 0.615123 4.78133 0.57016 4.83857C0.525197 4.89581 0.500519 4.96636 0.5 5.03915V19.0391C0.5 19.5914 0.947749 20.0391 1.5 20.0391H10.8333C11.3856 20.0391 11.8333 19.5914 11.8333 19.0391V16.0145L14.5066 16.9582C14.6803 17.0194 14.8707 16.9285 14.9319 16.7548L19.8143 2.92457C19.8287 2.88326 19.8349 2.83949 19.8325 2.79578C19.83 2.75208 19.819 2.70928 19.7999 2.66986H19.8Z" fill="#034833"/>
                  <path d="M17.0439 5.12938L17.2657 4.50063L17.8374 4.7023L17.6155 5.33105L17.0439 5.12938ZM12.472 3.51526L12.694 2.88672L13.2654 3.08851L13.0434 3.71709L12.472 3.51526ZM15.9008 4.72588L16.1228 4.09713L16.6943 4.29897L16.4723 4.92755L15.9008 4.72588ZM13.615 3.91892L13.837 3.29034L14.4083 3.49218L14.1863 4.12076L13.615 3.91892ZM14.7579 4.32209L14.98 3.69351L15.5514 3.89534L15.3294 4.52388L14.7579 4.32209ZM6.01301 6.707C4.17202 6.707 2.67969 8.19933 2.67969 10.0403C2.67969 11.8813 4.17202 13.3737 6.01301 13.3737C7.85401 13.3737 9.34634 11.8813 9.34634 10.0403C9.34438 8.20033 7.85318 6.70909 6.01301 6.707Z" fill="#034833"/>
                </g>
                <defs>
                  <clipPath id="clip0_3756_33">
                    <rect width="20" height="20" fill="white" transform="translate(0.5 0.0390625)"/>
                  </clipPath>
                </defs>
              </svg>
              Meet the Team
            </h6>
            <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">
              Meet Our Expert Study Abroad <br /> Advisors
            </h2>
          </div>
        </div>

        {/* First Row */}
        <div className="row mb-4">
          <div className="col-lg-6 d-flex">
            <div className="visa__item visa__item-2 d-flex align-items-center wow fadeInLeft animated" data-wow-delay=".2s" style={{ minHeight: '150px', width: '100%' }}>
              <div className="visa__item-media">
                <img src={team[0].image} alt="img not found" />
              </div>
              <div className="visa__item-content">
                <h5>{team[0].name}</h5>
                <p>{team[0].description}</p>
                <div className="visa__item-content-button mt-30 d-flex justify-content-between">
                  <Link href="/team-details">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <img src={team[0].icon} alt="img not found" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="visa__item visa__item-2 d-flex align-items-center wow fadeInLeft animated" data-wow-delay=".3s" style={{ minHeight: '150px', width: '100%' }}>
              <div className="visa__item-media">
                <img src={team[1].image} alt="img not found" />
              </div>
              <div className="visa__item-content">
                <h5>{team[1].name}</h5>
                <p>{team[1].description}</p>
                <div className="visa__item-content-button mt-30 d-flex justify-content-between">
                  <Link href="/team-details">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <img src={team[1].icon} alt="img not found" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="visa__item visa__item-2 d-flex align-items-center wow fadeInLeft animated" data-wow-delay=".4s" style={{ minHeight: '150px', width: '100%' }}>
              <div className="visa__item-media">
                <img src={team[2].image} alt="img not found" />
              </div>
              <div className="visa__item-content">
                <h5>{team[2].name}</h5>
                <p>{team[2].description}</p>
                <div className="visa__item-content-button mt-30 d-flex justify-content-between">
                  <Link href="/team-details">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <img src={team[2].icon} alt="img not found" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="visa__item visa__item-2 d-flex align-items-center wow fadeInLeft animated" data-wow-delay=".5s" style={{ minHeight: '150px', width: '100%' }}>
              <div className="visa__item-media">
                <img src={team[3].image} alt="img not found" />
              </div>
              <div className="visa__item-content">
                <h5>{team[3].name}</h5>
                <p>{team[3].description}</p>
                <div className="visa__item-content-button mt-30 d-flex justify-content-between">
                  <Link href="/team-details">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <img src={team[3].icon} alt="img not found" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link href="/team" className="rr-btn wow fadeInUp animated" data-wow-delay=".6s">
              Meet Our Full Team <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
