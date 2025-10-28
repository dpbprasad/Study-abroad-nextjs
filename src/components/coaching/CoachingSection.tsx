'use client';

import Link from 'next/link';

interface CoachingItem {
  title: string;
  description: string;
  image: string;
  delay: string;
}

export default function CoachingSection() {
  const coachingItems: CoachingItem[] = [
    {
      title: 'OET Coaching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img1.png',
      delay: '.2s'
    },
    {
      title: 'IELTS Coaching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img2.png',
      delay: '.3s'
    },
    {
      title: 'TOFEL Coaching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img3.png',
      delay: '.4s'
    },
    {
      title: 'Citizenship Test',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img4.png',
      delay: '.5s'
    },
    {
      title: 'Life Coaching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img5.png',
      delay: '.6s'
    },
    {
      title: 'Career coaching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img6.png',
      delay: '.7s'
    },
    {
      title: 'Skills Exam',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img7.png',
      delay: '.8s'
    },
    {
      title: 'PTE Couching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img8.png',
      delay: '.9s'
    },
    {
      title: 'SAT Couching',
      description: 'There are many variati of passages of engineer',
      image: '/assets/imgs/coaching/coaching-card-img9.png',
      delay: '1s'
    }
  ];

  return (
    <section className="coaching__area pt-100 section-space-bottom">
      <div className="container">
        <div className="row mb-minus-30">
          {coachingItems.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="coaching__item mb-30 d-flex align-items-center wow fadeInLeft animated" data-wow-delay={item.delay}>
                <div className="coaching__item-midea" data-tilt>
                  <img className="img-fluid" src={item.image} alt="img not found" />
                </div>
                <div className="coaching__item-content">
                  <h4 className="coaching__item-content-title mb-20">{item.title}</h4>
                  <p>{item.description}</p>
                  <Link href="/coaching-details">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
