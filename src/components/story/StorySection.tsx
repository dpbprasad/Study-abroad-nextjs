'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function StorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // All stories data for all pages
  const allStories = [
    // Page 1
    {
      id: 1,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Albert Flores",
      role: "President of Sales",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 2,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Eleanor Pena",
      role: "Dog Trainer",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 3,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Ronald Richards",
      role: "President of Sales",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 4,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Savannah Nguyen",
      role: "Marketing Coordinator",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 5,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Jerome Bell",
      role: "Web Designer",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 6,
      text: "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina",
      name: "Annette Black",
      role: "Nursing Assistant",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    // Page 2
    {
      id: 7,
      text: "Outstanding service and professional guidance throughout my visa application process. Highly recommended for anyone seeking immigration assistance.",
      name: "Michael Johnson",
      role: "Software Engineer",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 8,
      text: "They made my dream of studying abroad come true. The team was supportive and knowledgeable every step of the way.",
      name: "Sarah Williams",
      role: "Student",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 9,
      text: "Professional and efficient service. Got my visa approved within the expected timeframe with no complications.",
      name: "David Brown",
      role: "Business Analyst",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 10,
      text: "Excellent consultation service. They helped me understand the entire process and made it stress-free.",
      name: "Jennifer Davis",
      role: "Teacher",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 11,
      text: "Very satisfied with their services. They were always available to answer my questions and provide guidance.",
      name: "Robert Wilson",
      role: "Marketing Manager",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 12,
      text: "Great experience from start to finish. The team is professional and really cares about their clients.",
      name: "Lisa Anderson",
      role: "Nurse",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    // Page 3
    {
      id: 13,
      text: "Amazing support throughout my immigration journey. They handled everything professionally and efficiently.",
      name: "James Taylor",
      role: "Accountant",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 14,
      text: "Best immigration consultancy I've worked with. They really know what they're doing and deliver results.",
      name: "Emily Martinez",
      role: "Designer",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 15,
      text: "Highly professional team that made my visa process smooth and hassle-free. Would recommend to everyone.",
      name: "Christopher Lee",
      role: "Engineer",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    },
    {
      id: 16,
      text: "They exceeded my expectations with their knowledge and dedication. Got my visa approved on first attempt.",
      name: "Amanda White",
      role: "Consultant",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 17,
      text: "Fantastic service from beginning to end. They guided me through every step of the immigration process.",
      name: "Daniel Harris",
      role: "Project Manager",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "white-bg"
    },
    {
      id: 18,
      text: "Professional, reliable, and knowledgeable. Made my dream of moving abroad a reality. Thank you!",
      name: "Jessica Clark",
      role: "HR Specialist",
      image: "/assets/img/testimonial/testimonial-dp.png",
      bgClass: "gray-bg"
    }
  ];

  const storiesPerPage = 4;
  const totalPages = Math.ceil(allStories.length / storiesPerPage);

  // Get current page stories
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = allStories.slice(indexOfFirstStory, indexOfLastStory);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to a fixed position to keep cards area consistent
    setTimeout(() => {
      const breadcrumb = document.querySelector('.breadcrumb__area');
      if (breadcrumb) {
        const breadcrumbHeight = breadcrumb.getBoundingClientRect().height;
        // Add 60px space below the sticky header
        window.scrollTo({ top: breadcrumbHeight - 60, behavior: 'smooth' });
      }
    }, 0);
  };

  const QuoteIcon = () => (
    <svg width="73" height="55" viewBox="0 0 73 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.0341 14.5451L44.0344 14.5452L44.0367 14.5351C44.1306 14.1282 44.4712 13.8476 44.914 13.8476H62.0595C62.3775 13.8476 62.5532 13.9188 62.6535 14.0223C62.7551 14.127 62.8182 14.3042 62.8182 14.6063V17.1783C62.7817 17.6376 62.6405 18.0558 62.3993 18.4017L43.3594 43.51L43.3591 43.5098L43.3527 43.5194C43.106 43.8894 42.5749 44.0166 42.1685 43.7665L42.1686 43.7664L42.1611 43.7622L36.9788 40.8874C36.8253 40.7614 36.7424 40.6291 36.7066 40.4683C36.6684 40.2962 36.6803 40.074 36.7524 39.7656L44.0341 14.5451ZM17.3297 14.5451L17.3301 14.5452L17.3329 14.5322C17.4256 14.0999 17.8286 13.8155 18.2719 13.8471L18.2719 13.8476H18.2855H35.3551C35.6731 13.8476 35.8487 13.9188 35.9491 14.0223C36.0506 14.127 36.1137 14.3042 36.1137 14.6063V17.1783C36.0772 17.6377 35.9361 18.0559 35.6947 18.4018L16.7306 43.5103L16.7303 43.5101L16.7241 43.5194C16.4777 43.889 15.9518 44.0134 15.5485 43.7342L15.5398 43.7282L15.5306 43.7232L10.2736 40.8867C10.1206 40.7609 10.0379 40.6288 10.0022 40.4683C9.96395 40.2962 9.97581 40.074 10.048 39.7656L17.3297 14.5451Z" stroke="#83CD20" strokeWidth="0.379325"/>
    </svg>
  );

  return (
    <section className="story__area pt-100 section-space-bottom">
      <div className="container">
        <div className="row mb-minus-30">
          {currentStories.map((story, index) => (
            <div key={story.id} className="col-lg-6 col-md-6">
              <div
                className={`story__content ${story.bgClass} mb-30 wow fadeInLeft animated story-card-clickable`}
                data-wow-delay={`.${index + 2}s`}
                style={{ cursor: 'pointer', paddingTop: '15px', paddingBottom: '20px', height: '471px' }}
                onClick={() => setIsModalOpen(true)}
              >
                <div className="story__content-icon mb-20">
                  <QuoteIcon />
                </div>
                <div className="story__content-text">
                  <p>{story.text}</p>
                </div>
                <div className="story__content-details d-flex mt-40">
                  <div className="story__content-details-img">
                    <Image src={story.image} alt={`${story.name} - ${story.role}`} width={60} height={60} />
                  </div>
                  <div className="story__content-details-name">
                    <h6>{story.name}</h6>
                    <span>{story.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="blog__content-pagination margin-t80">
            <div className="blog__content-pagination-social d-flex justify-content-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <a
                  key={pageNumber}
                  href="#"
                  className={currentPage === pageNumber ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNumber);
                  }}
                >
                  <i className={`fa-solid fa-${pageNumber}`}></i>
                </a>
              ))}
              {currentPage < totalPages && (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Story Details Popup Modal */}
      {isModalOpen && (
        <div
          id="storyModal"
          className="modal"
          style={{
            display: 'block',
            position: 'fixed',
            zIndex: 9999,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: '#fefefe',
              padding: '20px 70px',
              border: 'none',
              width: '95%',
              maxWidth: '1400px',
              borderRadius: '8px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close"
              style={{
                color: '#aaa',
                float: 'right',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer',
                position: 'absolute',
                right: '15px',
                top: '15px',
                zIndex: 10000
              }}
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>

            {/* Story Details Content */}
            <section className="story-details__area" style={{ padding: '40px 0', color: '#333', fontFamily: 'inherit' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="story-details__content">
                      <h2 className="story-details__content-title mb-30 wow fadeInLeft animated" data-wow-delay=".2s">
                        Visa Got Approved for Egypt
                      </h2>
                      <div className="story-details__content-icon mb-30 wow fadeInLeft animated" data-wow-delay=".3s">
                        <svg width="96" height="76" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M7.20616 36.59V36.5909C7.20616 38.4926 8.72059 40.007 10.6223 40.007H35.9984V74.5124H1.493V36.5909C1.493 18.8888 15.0229 4.28355 32.2581 2.56528V8.29926C25.5974 9.11479 19.4206 12.2568 14.833 17.194C9.9347 22.4655 7.21032 29.394 7.20616 36.59ZM94.401 40.007V74.5124H59.8956V36.5909C59.8956 18.8886 73.4264 4.28176 90.6997 2.56495V8.29661C76.5653 9.99792 65.6087 22.019 65.6087 36.5909C65.6087 38.4926 67.1232 40.007 69.0249 40.007H94.401Z" stroke="#83CD20" strokeWidth="2.93619"/>
                        </svg>
                      </div>
                      <p className="wow fadeInLeft animated" data-wow-delay=".4s">
                        Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamco rper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamc orper posuere viverra .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobo rtis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
                      </p>
                      <div className="teamdetail__content-text mt-20 wow fadeInLeft animated" data-wow-delay=".5s">
                        <ul>
                          <li>Visa Applied: <span>Visa Special</span></li>
                          <li>Visa Type: <span>10 years +</span></li>
                          <li>Approval: <a href="mailto:adbs@gmail.com">adbs@gmail.com</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="story-details__button mt-40 wow fadeInLeft animated" data-wow-delay=".6s">
                      <a href="/contact">Apply For Visa <i className="fa-solid fa-arrow-right"></i></a>
                      <a href="/story">Read More Stories</a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="story-details__media wow fadeInLeft animated" data-wow-delay=".7s">
                      <div className="story-details__media-wrapper">
                        <div className="story-details__media-wrapper-left-shape">
                          <Image src="/assets/img/testimonial/story-details/story-details-right-shape1.png" alt="Decorative shape" width={150} height={150} />
                        </div>
                        <div className="story-details__media-wrapper-right-shape">
                          <Image src="/assets/img/testimonial/story-details/story-details-right-shape2.png" alt="Decorative shape" width={150} height={150} />
                        </div>
                      </div>
                      <div className="story-details__media-thumb position-relative">
                        <div className="story-details__media-thumb-box"></div>
                        <Image src="/assets/img/testimonial/story-details/story-details-right-img.png" alt="Successful visa approval to Egypt" width={500} height={600} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}
