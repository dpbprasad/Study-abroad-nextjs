'use client';

export default function TestAboutCompanySection() {
  return (
    <section className="section-space" style={{ paddingBottom: 0 }}>
      <style jsx global>{`
        /* Section padding */
        .section-space {
          padding-left: 15px;
          padding-right: 15px;
        }

        /* Equal height cards - universal flexbox solution */
        .blog-details__testimonial {
          height: 100%;
        }

        /* Equal height service sections */
        .coaching-details__category,
        .coaching-details__content {
          height: 100%;
        }

        /* Tablet and below */
        @media (max-width: 991px) {
          .coaching-details__content {
            padding: clamp(15px, 2.5vw, 20px) !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .section-space {
            padding-top: clamp(30px, 5vw, 40px) !important;
            padding-bottom: 0 !important;
          }
          .trust-feature-box {
            padding: clamp(15px, 3vw, 20px) !important;
          }
        }

        /* Responsive fixes for Our Commitment section */
        .commitment-row {
          display: flex;
          align-items: stretch;
        }

        .commitment-left-col,
        .commitment-right-col {
          display: flex;
        }

        /* Override global CSS with responsive green border - ONLY for commitment section */
        .commitment-section .choose-us__media-thumb-img-green-border {
          position: absolute;
          border: 1px solid var(--rr-theme-primary);
          border-radius: clamp(15px, 2vw, 20px);
          width: clamp(200px, 45%, 261px) !important;
          height: clamp(280px, 60%, 350px) !important;
          margin-left: clamp(10px, 2.5%, 15px) !important;
          margin-top: clamp(15px, 3%, 20px) !important;
          z-index: 1;
        }

        /* Responsive image containers - ONLY for commitment section */
        .commitment-section .choose-us__media-thumb-img-img {
          position: relative;
          z-index: 2;
        }

        .commitment-section .choose-us__media-thumb-img-img img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: clamp(15px, 2vw, 20px);
          max-width: 100%;
        }

        /* Right side image container - ONLY for commitment section */
        .commitment-section .choose-us__media-img-pictute {
          max-width: 100%;
          width: 100%;
        }

        .commitment-section .choose-us__media-img-pictute img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: clamp(15px, 2vw, 20px);
        }

        /* Experience badge responsive - ONLY for commitment section */
        .commitment-section .choose-us__text {
          background: var(--rr-theme-primary);
          display: flex;
          align-items: center;
          padding: clamp(20px, 5%, 33px) clamp(25px, 6%, 44px);
          border-radius: clamp(15px, 2vw, 20px);
          gap: clamp(15px, 3%, 20px);
          margin-bottom: clamp(15px, 3%, 23px);
        }

        .commitment-section .choose-us__text h3 span {
          font-size: clamp(35px, 7vw, 50px) !important;
        }

        .commitment-section .choose-us__text p {
          font-size: clamp(14px, 2.5vw, 16px) !important;
        }

        /* Content area responsive spacing - ONLY for commitment section */
        .commitment-section .choose-us__content {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          padding-left: clamp(0px, 3%, 30px);
        }

        .commitment-section .choose-us__content-description {
          margin-bottom: 0;
          font-size: clamp(14px, 2.5%, 15px) !important;
          line-height: 1.5;
        }

        .commitment-section .section__title-wrapper {
          margin-bottom: clamp(8px, 1.5%, 10px);
        }

        .commitment-section .section__title-wrapper-title {
          margin-bottom: clamp(4px, 0.8%, 5px) !important;
          font-size: clamp(18px, 3.5vw, 24px) !important;
        }

        /* Media container responsive - ONLY for commitment section */
        .commitment-section .choose-us__media {
          display: flex;
          gap: clamp(20px, 4%, 30px);
          max-width: 100%;
          width: 100%;
          position: relative;
        }

        .commitment-section .choose-us__media-thumb,
        .commitment-section .choose-us__media-img {
          flex: 1;
          min-width: 0;
        }

        /* Marquee animations */
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }

        .commitment-section .marquee-container {
          margin-top: clamp(8px, 1.5%, 10px);
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .commitment-section .marquee-card {
          padding: clamp(12px, 2.5%, 16px);
          border-radius: clamp(6px, 1.2%, 8px);
          margin-left: clamp(10px, 2.5%, 16px);
          margin-right: clamp(10px, 2.5%, 16px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          width: clamp(280px, 50%, 320px);
          min-height: clamp(130px, 25%, 148px);
          flex-shrink: 0;
          background-color: #fff;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
        }

        .commitment-section .marquee-avatar {
          width: clamp(42px, 8%, 48px);
          height: clamp(42px, 8%, 48px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: clamp(18px, 3.5%, 20px);
          flex-shrink: 0;
        }

        .commitment-section .marquee-name {
          margin: 0;
          font-size: clamp(13px, 2.2%, 14px);
          font-weight: 600;
          color: #034833;
        }

        .commitment-section .marquee-handle {
          font-size: clamp(11px, 1.8%, 12px);
          color: #666;
        }

        .commitment-section .marquee-text {
          font-size: clamp(13px, 2.2%, 14px);
          padding-top: clamp(10px, 2%, 12px);
          padding-bottom: 0;
          color: #1f2937;
          margin: 0;
          line-height: 1.5;
          flex: 1;
        }

        .commitment-section .marquee-gradient-left,
        .commitment-section .marquee-gradient-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: clamp(50px, 12%, 80px);
          z-index: 10;
          pointer-events: none;
        }

        .commitment-section .marquee-gradient-left {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .commitment-section .marquee-gradient-right {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        /* Prevent layout shift during animation - ONLY for commitment section */
        .commitment-section .choose-us__media-thumb-img {
          position: relative;
          min-height: 200px;
        }

        /* Tablet adjustments - ONLY for commitment section */
        @media (max-width: 1199px) and (min-width: 992px) {
          .commitment-section .choose-us__media {
            gap: clamp(15px, 3%, 25px);
          }

          .commitment-section .choose-us__content {
            padding-left: clamp(0px, 2%, 20px);
          }
        }

        /* Mobile adjustments - ONLY for commitment section */
        @media (max-width: 991px) {
          .commitment-left-col {
            margin-bottom: clamp(30px, 5vw, 40px);
          }

          .commitment-section .choose-us__media {
            flex-wrap: wrap;
            justify-content: center;
            max-width: 500px;
            margin: 0 auto;
          }

          .commitment-section .choose-us__content {
            padding-left: 0;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Main Introduction */}
            <div className="blog-details__content" style={{ marginBottom: '60px' }}>
              <div className="blog-details__content-text">
                <h2 className="blog-details__content-text-title mb-20 wow fadeInLeft animated" data-wow-delay=".3s">
                  Study Abroad (Pvt) Ltd — International Education Consultants since 2007
                </h2>
                <p className="blog-details__content-text-paragraph wow fadeInLeft animated" data-wow-delay=".4s" style={{ textAlign: 'justify' }}>
                  Welcome to Study Abroad (Pvt) Ltd. Since 2007, we have been dedicated to transforming the dreams of Sri Lankan students into reality by providing personalized guidance for international education. As a premier international education consultant based in Sri Lanka with over 18 years of experience in international student recruitment, we specialize in university placement services across the UK, USA, Canada, Australia, New Zealand, Sweden, Germany, and the Netherlands.
                </p>
                <p className="blog-details__content-text-paragraph wow fadeInLeft animated" data-wow-delay=".5s" style={{ textAlign: 'justify' }}>
                  As one of the most trusted overseas education consultants in Sri Lanka, our expert team provides end-to-end support—from initial career assessment and university selection to visa application support and post-arrival services. We pride ourselves on high placement and visa success rates, a seamless application process, and attentive case management that meets deadlines and provides comprehensive guidance.
                </p>
                <p className="blog-details__content-text-paragraph wow fadeInLeft animated" data-wow-delay=".6s" style={{ textAlign: 'justify' }}>
                  Our commitment remains unwavering: to provide honest counseling, expert guidance, and comprehensive support throughout your study abroad journey. We have earned the trust of Sri Lankan students and families through word-of-mouth recommendations and very high reviews.
                </p>
              </div>
            </div>

            {/* Director Video Section */}
            <div className="blog-details__middel" style={{ marginBottom: '60px' }}>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                  <div className="blog-details__middel-img">
                    <div className="youtube-video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                      <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                        src="https://www.youtube.com/embed/36RV3-EP7Zw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="blog-details__middel-content">
                    <h2 className="blog-details__middel-content-title mb-20 wow fadeInLeft animated" data-wow-delay=".3s">Meet our Managing Director</h2>
                    <p className="mb-20 wow fadeInLeft animated" data-wow-delay=".6s">Aliquam justo, posuere loborti viverra laoreet mat ti ullamcorper posuere viverra .Aliquam justo, po suere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam</p>
                    <div className="blog-details__middel-content-list wow fadeInLeft animated" data-wow-delay=".4s">
                      <ul>
                        <li><a><i className="fa-solid fa-check"></i>Priyanka Ganhataragedara</a></li>
                        <li><a><i className="fa-solid fa-check"></i>Managing Director</a></li>
                        <li><a><i className="fa-solid fa-check"></i>17+ experience in Concultation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction to Mission & Vision */}
            <div className="blog-details__content" style={{ marginBottom: '120px' }}>
              <div className="blog-details__content-text">
                <p className="wow fadeInLeft animated" data-wow-delay=".4s" style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.8', color: '#555', margin: 0 }}>
                  We are dedicated to connecting aspiring students with esteemed higher education institutions worldwide. Our approach helps students explore diverse academic fields that align with their unique strengths and career aspirations, while fostering personal growth, professional development, and the ability to make meaningful social impact in their chosen fields.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="row align-items-stretch" style={{ marginBottom: '120px' }}>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0 d-flex">
                <div className="blog-details__testimonial" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="blog-details__testimonial-icon mb-20 wow fadeInLeft animated" data-wow-delay=".4s">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="blog-details__testimonial-details mb-15 wow fadeInLeft animated" data-wow-delay=".6s">
                    <h5>Our Mission</h5>
                  </div>
                  <p className="wow fadeInLeft animated" data-wow-delay=".1s" style={{ flex: '1' }}>
                    To provide unwavering support and guidance to individuals seeking the right path in their pursuit of higher education abroad.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
                <div className="blog-details__testimonial" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="blog-details__testimonial-icon mb-20 wow fadeInLeft animated" data-wow-delay=".5s">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="blog-details__testimonial-details mb-15 wow fadeInLeft animated" data-wow-delay=".7s">
                    <h5>Our Vision</h5>
                  </div>
                  <p className="wow fadeInLeft animated" data-wow-delay=".2s" style={{ flex: '1' }}>
                    To become the leading and most reliable educational counseling and student recruitment firm in Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Comprehensive Services */}
            <div className="container" style={{ marginBottom: '120px' }}>
              <div className="row align-items-stretch">
                {/* Left Side - Service Navigation */}
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex">
                  <div className="coaching-details__category" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-15 wow fadeInLeft animated"
                      data-wow-delay=".2s"
                    >
                      Personalized Counseling <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-15 wow fadeInLeft animated"
                      data-wow-delay=".3s"
                    >
                      Global University Network <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-15 wow fadeInLeft animated"
                      data-wow-delay=".4s"
                    >
                      Application and Visa Support <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-15 wow fadeInLeft animated"
                      data-wow-delay=".5s"
                    >
                      Post-Arrival Services <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-15 wow fadeInLeft animated"
                      data-wow-delay=".6s"
                    >
                      Alumni and Networking <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                    <a
                      href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wow fadeInLeft animated"
                      data-wow-delay=".7s"
                    >
                      All Services <span><i className="fa-solid fa-angle-right"></i></span>
                    </a>
                  </div>
                </div>

                {/* Right Side - Static Overview Content */}
                <div className="col-lg-8 col-md-12 d-flex">
                  <div className="coaching-details__content" style={{
                    backgroundColor: '#F1F5EB',
                    padding: 'clamp(20px, 3vw, 30px)',
                    borderRadius: '10px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 className="coaching-details__content-title mb-20 wow fadeInLeft animated" data-wow-delay=".3s" style={{ fontSize: 'clamp(22px, 2.5vw, 28px)' }}>
                      Overview of Our Values & Services
                    </h3>
                    <p className="wow fadeInLeft animated" data-wow-delay=".4s" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: '1.6' }}>
                      We provide comprehensive study abroad consultation services, guiding students through university selection, applications, and visa processes for a successful journey.
                    </p>
                    <p className="wow fadeInLeft animated" data-wow-delay=".5s" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: '1.6' }}>
                      With 18+ years of experience, we deliver personalized guidance tailored to each student's unique goals and aspirations.
                    </p>

                    {/* Why We Are Special */}
                    <div className="mt-20">
                      <h4 className="wow fadeInLeft animated" data-wow-delay=".5s" style={{ color: '#034833', marginBottom: '20px', fontSize: 'clamp(19px, 2vw, 22px)', fontWeight: '600' }}>
                        Why We Are Special
                      </h4>
                      <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mb-3">
                          <div className="wow fadeInLeft animated" data-wow-delay=".6s">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <i className="fa-solid fa-check" style={{ color: '#83CD20', marginTop: '4px', flexShrink: 0 }}></i>
                              <div style={{ flex: 1 }}>
                                <h5 style={{ color: '#034833', marginBottom: '8px', fontSize: 'clamp(16px, 1.5vw, 18px)', fontWeight: '600' }}>Expert Knowledge</h5>
                                <p style={{ fontSize: 'clamp(16px, 1.1vw, 18px)', margin: 0, lineHeight: '1.6', color: '#555' }}>We stay up-to-date with universities, programs, and admissions requirements to provide accurate, current guidance.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mb-3">
                          <div className="wow fadeInLeft animated" data-wow-delay=".7s">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <i className="fa-solid fa-check" style={{ color: '#83CD20', marginTop: '4px', flexShrink: 0 }}></i>
                              <div style={{ flex: 1 }}>
                                <h5 style={{ color: '#034833', marginBottom: '8px', fontSize: 'clamp(16px, 1.5vw, 18px)', fontWeight: '600' }}>Personalized Placement</h5>
                                <p style={{ fontSize: 'clamp(16px, 1.1vw, 18px)', margin: 0, lineHeight: '1.6', color: '#555' }}>We conduct thorough evaluations to match students with the best-fit programs and campuses.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mb-3">
                          <div className="wow fadeInLeft animated" data-wow-delay=".8s">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <i className="fa-solid fa-check" style={{ color: '#83CD20', marginTop: '4px', flexShrink: 0 }}></i>
                              <div style={{ flex: 1 }}>
                                <h5 style={{ color: '#034833', marginBottom: '8px', fontSize: 'clamp(16px, 1.5vw, 18px)', fontWeight: '600' }}>Proven Experience</h5>
                                <p style={{ fontSize: 'clamp(16px, 1.1vw, 18px)', margin: 0, lineHeight: '1.6', color: '#555' }}>Since 2007, we have deep expertise in addressing student needs in international education.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mb-3">
                          <div className="wow fadeInLeft animated" data-wow-delay=".9s">
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <i className="fa-solid fa-check" style={{ color: '#83CD20', marginTop: '4px', flexShrink: 0 }}></i>
                              <div style={{ flex: 1 }}>
                                <h5 style={{ color: '#034833', marginBottom: '8px', fontSize: 'clamp(16px, 1.5vw, 18px)', fontWeight: '600' }}>High Visa Success</h5>
                                <p style={{ fontSize: 'clamp(16px, 1.1vw, 18px)', margin: 0, lineHeight: '1.6', color: '#555' }}>Our careful preparation and compliance contribute to strong visa outcomes for our students.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Students Choose Us */}
            <div className="blog-details__content" style={{ marginBottom: '120px' }}>
              <div className="text-center mb-40">
                <h3 className="wow fadeInUp animated" data-wow-delay=".3s" style={{ color: '#034833', fontSize: '32px', fontWeight: '700' }}>
                  Why Students Choose Us
                </h3>
                <p className="wow fadeInUp animated" data-wow-delay=".4s" style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '20px',
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}>
                  Our proven visa success rate reflects meticulous preparation and expert guidance, supported by 18 years of word-of-mouth recommendations and very high reviews from students and families.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".3s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-trophy"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      Proven Track Record
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      Over 18 years of excellence in international student recruitment, helping thousands of students successfully achieve their study abroad dreams
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".4s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      Personalized Counseling
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      Expert education consultants provide tailored guidance throughout your entire study abroad journey—from initial assessment and university selection to application strategy and visa support
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".5s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      Global University Network
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      Starting with our UK partnership, we have grown to a robust network across New Zealand, Canada, the USA, Sweden, Germany, and the Netherlands, offering a wide range of programs and pathways
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".6s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      High Success Rates
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      Our proven visa success rate reflects meticulous preparation and expert guidance, supported by 18 years of word-of-mouth recommendations and very high reviews from students and families
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".7s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-user-graduate"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      Student-Centric Approach
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      We guide students based on individual capacities and aspirations, emphasizing counseling, knowledge transfer, and development of well-rounded graduates with strong values
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                  <div className="trust-feature-box wow fadeInUp animated" data-wow-delay=".8s" style={{
                    padding: '30px 25px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    border: '2px solid #E8F5E1',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#83CD20';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(131, 205, 32, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E8F5E1';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                  }}>
                    <div className="mb-20" style={{ fontSize: '45px', color: '#83CD20' }}>
                      <i className="fa-solid fa-handshake-angle"></i>
                    </div>
                    <h5 className="mb-15" style={{ color: '#034833', fontSize: '18px', fontWeight: '600' }}>
                      Comprehensive Support
                    </h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666', marginBottom: '0' }}>
                      Reliable, end-to-end support—from document preparation to post-visa services like airport pickup, accommodation, language classes, and cultural orientation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section - Copied from Home */}
            <div className="choose-us__area" style={{ paddingTop: '0', paddingBottom: '0', marginBottom: 'clamp(60px, 10vw, 120px)' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="choose-us__media">
                      <div className="choose-us__media-thumb">
                        <div className="choose-us__media-thumb-img">
                          <div className="choose-us__media-thumb-img-green-border wow fadeInLeft animated" data-wow-delay=".3s"></div>
                          <div className="choose-us__media-thumb-img-img wow fadeInLeft animated" data-wow-delay=".4s">
                            <img src="/assets/img/choose-us/choose-us-left-img.png" alt="img not found" />
                          </div>
                        </div>
                        <div className="choose-us__media-thumb-circle spin">
                          <img src="/assets/img/choose-us/choose-us-circle-img.png" alt="img not found" />
                        </div>
                      </div>
                      <div className="choose-us__media-img">
                        <div className="choose-us__text wow fadeInLeft animated" data-wow-delay=".5s">
                          <h3 className="counter__item-title">
                            <span>18</span>
                          </h3>
                          <p>Years Of <br /> Experience</p>
                        </div>
                        <div className="choose-us__media-img-pictute wow fadeInLeft animated" data-wow-delay=".6s">
                          <img src="/assets/img/choose-us/choose-us-right-img.png" alt="img not found" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="choose-us__content">
                      <div className="section__title-wrapper mb-10">
                        <h6 className="section__title-wrapper-black-subtitle mb-10 wow fadeInLeft animated" data-wow-delay=".2s">
                          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3754_90_2)">
                              <path d="M19.299 2.66986C19.2609 2.59008 19.1926 2.52868 19.1093 2.49911L12.195 0.0581985C12.0215 -0.00317634 11.831 0.0879901 11.7697 0.26149L10.199 4.70581H9.51204V3.57248C9.51202 3.41941 9.47686 3.26838 9.40926 3.13104C9.34166 2.9937 9.24343 2.87372 9.12214 2.78033C9.00085 2.68695 8.85974 2.62266 8.70968 2.59242C8.55962 2.56217 8.40462 2.56679 8.25663 2.6059L0.24744 4.7169V4.7229C0.176847 4.74064 0.114146 4.78133 0.0691834 4.83857C0.0242205 4.89581 -0.000457842 4.96636 -0.000976562 5.03915L-0.000976562 19.0391C-0.000976562 19.5914 0.446773 20.0391 0.999021 20.0391H10.3323C10.8846 20.0391 11.3323 19.5914 11.3323 19.0391V16.0145L14.0057 16.9582C14.1793 17.0194 14.3697 16.9285 14.431 16.7548L19.3133 2.92457C19.3278 2.88326 19.334 2.83949 19.3315 2.79578C19.329 2.75208 19.318 2.70928 19.2989 2.66986H19.299Z" fill="#034833"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_3754_90_2">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.0390625)"/>
                              </clipPath>
                            </defs>
                          </svg>
                          OUR COMMITMENT
                        </h6>
                        <h2 className="section__title-wrapper-title wow fadeInLeft animated" data-wow-delay=".3s">
                          Our Commitment to Sri Lankan Students
                        </h2>
                      </div>
                      <p className="choose-us__content-description wow fadeInLeft animated" data-wow-delay=".4s">
                        We guide students based on individual capacities and aspirations, emphasizing counseling, knowledge transfer, and development of well-rounded graduates with strong values.
                      </p>

                      {/* Testimonials Marquee */}
                      <div style={{ marginTop: '0px' }}>
                        {/* First Row */}
                        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '80px', zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to right, white, transparent)' }}></div>
                          <div className="marquee-inner" style={{ display: 'flex', transform: 'translateZ(0)', minWidth: '200%', paddingTop: '20px', paddingBottom: '0px' }}>
                            {[
                              { name: 'Kasun Perera', handle: '@kasun_uk', text: 'Study Abroad helped me secure admission to my dream university in the UK. Their guidance was exceptional!' },
                              { name: 'Nimali Silva', handle: '@nimali_aus', text: 'The personalized counseling made all the difference. They understood my goals perfectly.' },
                              { name: 'Ravindu Fernando', handle: '@ravindu_ca', text: 'Thanks to their expert support, my Canadian student visa was approved on the first try!' },
                              { name: 'Thilini Jayawardena', handle: '@thilini_nz', text: 'From university selection to post-arrival support in New Zealand, they were amazing.' },
                              { name: 'Kasun Perera', handle: '@kasun_uk', text: 'Study Abroad helped me secure admission to my dream university in the UK. Their guidance was exceptional!' },
                              { name: 'Nimali Silva', handle: '@nimali_aus', text: 'The personalized counseling made all the difference. They understood my goals perfectly.' },
                              { name: 'Ravindu Fernando', handle: '@ravindu_ca', text: 'Thanks to their expert support, my Canadian student visa was approved on the first try!' },
                              { name: 'Thilini Jayawardena', handle: '@thilini_nz', text: 'From university selection to post-arrival support in New Zealand, they were amazing.' },
                            ].map((card, index) => (
                              <div key={index} style={{ padding: '16px', borderRadius: '8px', marginLeft: '16px', marginRight: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '288px', flexShrink: 0, backgroundColor: '#fff', transition: 'all 0.2s', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#83CD20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '18px', flexShrink: 0 }}>
                                    {card.name.charAt(0)}
                                  </div>
                                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#034833' }}>{card.name}</p>
                                      <svg style={{ marginTop: '2px', fill: '#83CD20' }} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                                      </svg>
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#666' }}>{card.handle}</span>
                                  </div>
                                </div>
                                <p style={{ fontSize: '14px', paddingTop: '16px', color: '#1f2937', margin: 0, lineHeight: '1.5' }}>{card.text}</p>
                              </div>
                            ))}
                          </div>
                          <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '80px', zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to left, white, transparent)' }}></div>
                        </div>

                        {/* Second Row - Reverse */}
                        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '80px', zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to right, white, transparent)' }}></div>
                          <div className="marquee-inner marquee-reverse" style={{ display: 'flex', transform: 'translateZ(0)', minWidth: '200%', paddingTop: '20px', paddingBottom: '0px' }}>
                            {[
                              { name: 'Sachini Rathnayake', handle: '@sachini_usa', text: 'Their comprehensive support made my transition to studying in the USA smooth and stress-free!' },
                              { name: 'Dilshan Wickramasinghe', handle: '@dilshan_swe', text: 'I got into a top university in Sweden with their expert guidance. Highly recommend!' },
                              { name: 'Ishara Gunasekara', handle: '@ishara_ger', text: 'The team helped me navigate the complex German visa process with ease. Forever grateful!' },
                              { name: 'Sanduni Amarasinghe', handle: '@sanduni_neth', text: 'Best decision was choosing Study Abroad for my Netherlands application. Professional!' },
                              { name: 'Sachini Rathnayake', handle: '@sachini_usa', text: 'Their comprehensive support made my transition to studying in the USA smooth and stress-free!' },
                              { name: 'Dilshan Wickramasinghe', handle: '@dilshan_swe', text: 'I got into a top university in Sweden with their expert guidance. Highly recommend!' },
                              { name: 'Ishara Gunasekara', handle: '@ishara_ger', text: 'The team helped me navigate the complex German visa process with ease. Forever grateful!' },
                              { name: 'Sanduni Amarasinghe', handle: '@sanduni_neth', text: 'Best decision was choosing Study Abroad for my Netherlands application. Professional!' },
                            ].map((card, index) => (
                              <div key={index} style={{ padding: '16px', borderRadius: '8px', marginLeft: '16px', marginRight: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '288px', flexShrink: 0, backgroundColor: '#fff', transition: 'all 0.2s', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#034833', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600', fontSize: '18px', flexShrink: 0 }}>
                                    {card.name.charAt(0)}
                                  </div>
                                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#034833' }}>{card.name}</p>
                                      <svg style={{ marginTop: '2px', fill: '#83CD20' }} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                                      </svg>
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#666' }}>{card.handle}</span>
                                  </div>
                                </div>
                                <p style={{ fontSize: '14px', paddingTop: '16px', color: '#1f2937', margin: 0, lineHeight: '1.5' }}>{card.text}</p>
                              </div>
                            ))}
                          </div>
                          <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '80px', zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(to left, white, transparent)' }}></div>
                        </div>
                      </div>
                      <div className="choose-us__button mt-40" style={{ display: 'none' }}>
                        <div className="choose-us__button-btn wow fadeInLeft animated" data-wow-delay=".7s">
                          <a href="/story" className="rr-btn-rounded">Read More</a>
                        </div>
                        <div className="choose-us__button-text wow fadeInLeft animated" data-wow-delay=".8s">
                          <div className="choose-us__button-text-icon">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="choose-us__button-text-number">
                            <h6>Need help?</h6>
                            <a href="tel:+94112512515">+94 112 512 515</a>
                          </div>
                        </div>
                      </div>
                    </div>
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
