'use client';

import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  delay: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Jane Cooper',
      position: 'President of Sales',
      image: '/assets/img/team/team-name1.png',
      delay: '.2s'
    },
    {
      name: 'Savannah Nguyen',
      position: 'Nursing Assistant',
      image: '/assets/img/team/team-name2.png',
      delay: '.3s'
    },
    {
      name: 'Ronald Richards',
      position: 'Job Trainer',
      image: '/assets/img/team/team-name3.png',
      delay: '.4s'
    },
    {
      name: 'Jacob Jones',
      position: 'President of Sales',
      image: '/assets/img/team/team-name4.png',
      delay: '.5s'
    },
    {
      name: 'Annette Black',
      position: 'Medical Assistant',
      image: '/assets/img/team/team-name1.png',
      delay: '.6s'
    },
    {
      name: 'Albert Flores',
      position: 'Marketing Coordinator',
      image: '/assets/img/team/team-name2.png',
      delay: '.7s'
    },
    {
      name: 'Cody Fisher',
      position: 'Web Designer',
      image: '/assets/img/team/team-name3.png',
      delay: '.8s'
    },
    {
      name: 'Arlene McCoy',
      position: 'Medical Assistant',
      image: '/assets/img/team/team-name4.png',
      delay: '.9s'
    },
    {
      name: 'Darlene Robertson',
      position: 'Job Trainer',
      image: '/assets/img/team/team-name1.png',
      delay: '1s'
    }
  ];

  return (
    <section className="team__area section-space">
      <div className="container">
        <div className="row mb-minus-30">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <div className="team__item mb-30 wow fadeInLeft animated" data-wow-delay={member.delay}>
                <div className="team__item-media">
                  <Image src={member.image} alt={`${member.name} - ${member.position}`} width={400} height={500} />
                </div>
                <div className="team__item-content d-flex justify-content-between">
                  <div className="team__item-content-text">
                    <Link href="/team-details">
                      <h5>{member.name}</h5>
                    </Link>
                    <p>{member.position}</p>
                  </div>
                  <div className="team__item-content-social">
                    <div className="team__item-content-social-icon">
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                    <ul className="team__item-content-social-list">
                      <li><a href="https://pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                      <li className="mt-20"><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="mt-20"><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="mt-20"><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
