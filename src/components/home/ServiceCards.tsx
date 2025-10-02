'use client';

export default function ServiceCards() {
  const services = [
    {
      title: 'Student Visa',
      description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac',
      delay: '.2s',
      icon: (
        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3919_73)">
            <path d="M37.1602 9.00391C38.8477 9.00391 40.2539 7.63281 40.2539 5.91016C40.2539 4.1875 38.8477 2.85156 37.1602 2.85156C35.4727 2.85156 34.0664 4.22266 34.0664 5.94531C34.0664 7.63281 35.4375 9.00391 37.1602 9.00391ZM37.1602 4.08203C38.1797 4.08203 39.0234 4.92578 39.0234 5.94531C39.0234 6.96484 38.1797 7.80859 37.1602 7.80859C36.1406 7.80859 35.2969 6.96484 35.2969 5.94531C35.2969 4.92578 36.1055 4.08203 37.1602 4.08203Z" fill="white"/>
            <path d="M40.8517 16.1406C40.2892 14.9453 39.6212 13.7852 38.8478 12.7305C40.5353 11.6055 43.0314 9.39062 43.0314 5.94531C43.0314 2.67578 40.3946 0.0742188 37.1603 0.0742188C33.9259 0.0742188 31.254 2.67578 31.254 5.94531V6.33203C30.797 6.12109 30.3399 5.91016 29.8829 5.69922C16.6642 0.390625 2.03916 9.98828 1.96885 24.5781C1.9337 35.8281 11.004 44.9688 22.254 45.0039C33.504 45.0391 42.6446 35.9688 42.6798 24.7188C42.6798 24.6484 42.6798 24.6133 42.6798 24.543C42.6798 21.6602 42.047 18.7773 40.8517 16.1406Z" fill="white"/>
            <path d="M10.582 20.6055C8.89453 20.6055 7.48828 21.9766 7.48828 23.6992C7.48828 25.3867 8.85938 26.793 10.582 26.793C12.3047 26.793 13.6758 25.4219 13.6758 23.6992C13.6406 22.0117 12.2695 20.6055 10.582 20.6055ZM10.582 25.5625C9.5625 25.5625 8.71875 24.7188 8.71875 23.6992C8.71875 22.6797 9.5625 21.8359 10.582 21.8359C11.6016 21.8359 12.4453 22.6797 12.4453 23.6992C12.4453 24.7188 11.6016 25.5625 10.582 25.5625Z" fill="white"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Spouse Visa',
      description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac',
      delay: '.3s',
      icon: (
        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.67969 20.0977C6.67969 24.3516 10.125 27.8672 14.4492 27.8672C18.7383 27.8672 22.2187 24.3867 22.2187 20.0977C22.2187 15.8789 18.8086 12.3281 14.4492 12.3281C10.1953 12.3281 6.67969 15.8086 6.67969 20.0977Z" fill="white"/>
          <path d="M25.875 29.6602H3.05859C2.70703 29.6602 2.46094 29.9414 2.46094 30.2578V32.6484C2.46094 33 2.74219 33.2461 3.05859 33.2461H25.875C26.2266 33.2461 26.4727 32.9648 26.4727 32.6484V30.2578C26.4727 29.9414 26.1914 29.6602 25.875 29.6602Z" fill="white"/>
        </svg>
      )
    },
    {
      title: 'Guardian Visa',
      description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac',
      delay: '.4s',
      icon: (
        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.3848 9.8125H11.7348C11.644 9.81245 11.5543 9.8325 11.4722 9.87122C11.3901 9.90994 11.3176 9.96637 11.2598 10.0364L9.88875 11.7014L8.51766 10.0364C8.45993 9.96637 8.3874 9.90994 8.30528 9.87122C8.22316 9.8325 8.13349 9.81245 8.0427 9.8125H0.615234C0.534411 9.8125 0.45438 9.82843 0.379713 9.85937C0.305047 9.89031 0.237208 9.93566 0.180074 9.99282C0.122939 10.05 0.0776288 10.1179 0.0467311 10.1925C0.0158333 10.2672 -4.60843e-05 10.3473 1.00456e-07 10.4281V34.6859C1.00456e-07 34.8491 0.0648192 35.0056 0.180198 35.1209C0.295577 35.2363 0.452064 35.3011 0.615234 35.3011H8.04059C8.13138 35.3012 8.22105 35.2811 8.30317 35.2424C8.38529 35.2037 8.45782 35.1473 8.51555 35.0772L9.88664 33.4122L11.2577 35.0772C11.3155 35.1473 11.388 35.2037 11.4701 35.2424C11.5522 35.2811 11.6419 35.3012 11.7327 35.3011H44.3848C44.4656 35.3012 44.5456 35.2853 44.6203 35.2544C44.6949 35.2235 44.7628 35.1782 44.8199 35.121C44.877 35.0639 44.9224 34.9961 44.9533 34.9214C44.9842 34.8467 45 34.7667 45 34.6859V10.4281C45.0001 10.3472 44.9842 10.2672 44.9534 10.1925C44.9225 10.1178 44.8772 10.0499 44.82 9.99272C44.7629 9.93554 44.695 9.8902 44.6203 9.85927C44.5457 9.82835 44.4656 9.81245 44.3848 9.8125Z" fill="white"/>
        </svg>
      )
    },
    {
      title: 'PR Pathway Programs',
      description: 'Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac',
      delay: '.5s',
      icon: (
        <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.1875 12.375H38.9063V9.09375C38.9063 4.08188 34.8244 0 29.8125 0H15.1875C10.1756 0 6.09375 4.08188 6.09375 9.09375V12.375H2.8125C1.26188 12.375 0 13.6369 0 15.1875V42.1875C0 43.7381 1.26188 45 2.8125 45H42.1875C43.7381 45 45 43.7381 45 42.1875V15.1875C45 13.6369 43.7381 12.375 42.1875 12.375Z" fill="white"/>
          <path d="M13.5 28.6875H31.5C32.4075 28.6875 33.1406 27.9544 33.1406 27.0469C33.1406 26.1394 32.4075 25.4062 31.5 25.4062H13.5C12.5925 25.4062 11.8594 26.1394 11.8594 27.0469C11.8594 27.9544 12.5925 28.6875 13.5 28.6875Z" fill="white"/>
        </svg>
      )
    }
  ];

  return (
    <section className="gray-bg overflow-hidden pt-30">
      <div className="service right banner-home">
        <div className="banner-wrap">
          <div className="row mb-minus-30" style={{ margin: 0, padding: 0, maxWidth: 'none', width: '100%' }}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-3 col-md-6 col-sm-6 ${index === 0 ? 'first-card' : ''} ${index === services.length - 1 ? 'last-card' : ''}`}
              >
                <div className="service__item mb-30 wow fadeInLeft animated" data-wow-delay={service.delay}>
                  <div className="service__item-icon">
                    {service.icon}
                  </div>
                  <div className="service__item-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .service .banner-wrap {
          padding: 0 !important;
        }
        .service .row.mb-minus-30 {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .service .row.mb-minus-30 [class*=col-]:first-child {
          padding-left: 0 !important;
        }
        .service .row.mb-minus-30 [class*=col-]:last-child {
          padding-right: 0 !important;
        }
      `}</style>
    </section>
  );
}
