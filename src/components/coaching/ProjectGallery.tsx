import Image from 'next/image';

export default function ProjectGallery() {
  return (
    <section className="project1__area section-space-bottom p-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="project1__thumb">
            <div className="project1__media">
              <Image src="/assets/imgs/404/p1.jpg" alt="Coaching project gallery image 1" width={600} height={400} />
            </div>
            <div className="project1__media">
              <Image src="/assets/imgs/404/p2.jpg" alt="Coaching project gallery image 2" width={600} height={400} />
            </div>
            <div className="project1__media mt-30">
              <Image src="/assets/imgs/404/p3.jpg" alt="Coaching project gallery image 3" width={600} height={400} />
            </div>
            <div className="project1__media">
              <Image src="/assets/imgs/404/p4.jpg" alt="Coaching project gallery image 4" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
