'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamDetailsContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    saveInfo: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="teamdetail__area section-space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="teamdetail__media" data-tilt>
              <Image src="/assets/img/team/team-name1.png" alt="Ashikur Rahman - Medical Assistant" width={400} height={500} priority />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6">
            <div className="teamdetail__content wow fadeInLeft animated" data-wow-delay=".4s">
              <h2 className="teamdetail__content-title mt-sm-20 mt-xs-15">Ashikur Rahman</h2>
              <b>Medical Assistant</b>
              <p>Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere </p>
              <div className="teamdetail__content-text mt-20">
                <ul>
                  <li>Responsibility: <span>Visa Special</span></li>
                  <li>Experience: <span>10 years +</span></li>
                  <li>Email: <a href="mailto:adbs@gmail.com">adbs@gmail.com</a></li>
                  <li>Phone: <a href="tel:+9075550101">(907) 555-0101</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="teamdetail__description padding-t85">
              <h3 className="teamdetail__description-title mb-20 wow fadeInLeft animated" data-wow-delay=".2s">Personal Experience</h3>
              <p className="teamdetail__description-paragraph wow fadeInLeft animated" data-wow-delay=".3s">IELTS score is internationally recognized as an English Language proficiency requirement for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New Zealand. The highest IELT Academic module test assesses whether you have adequate  possible band score is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission. There are two versions of the </p>
              <p className=" wow fadeInLeft animated" data-wow-delay=".7s">IELTS score is internationally recognized as an English Language proficiency requirement for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, and New Zealand. The highest IELT Academic module test assesses whether you have adequate  possible band score is 9.0; most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission. There are two versions of the </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="teamdetail__progress pt-30">
              <div className="teamdetail__progress-wrapper d-grid">
                <h3 className="teamdetail__progress-wrapper-title pb-30 wow fadeInLeft animated" data-wow-delay=".4s">Professional Skill</h3>

                <div className="teamdetail__progress-wrapper-item fix wow fadeIn animated">
                  <div className="teamdetail__progress-wrapper-item-content d-flex justify-content-between">
                    <span className="span-title">Devoloping process</span>
                    <span className="left-side">70%</span>
                  </div>
                  <div className="progress d-flex">
                    <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s" role="progressbar" data-width="70%" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="teamdetail__progress-wrapper-item fix wow fadeIn animated">
                  <div className="teamdetail__progress-wrapper-item-content d-flex justify-content-between">
                    <span className="span-title">Power Design</span>
                    <span className="left-side">60%</span>
                  </div>
                  <div className="progress d-flex">
                    <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s" role="progressbar" data-width="60%" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>

                <div className="teamdetail__progress-wrapper-item fix wow fadeIn animated">
                  <div className="teamdetail__progress-wrapper-item-content d-flex justify-content-between">
                    <span className="span-title">Comfort Functionality</span>
                    <span className="left-side">50%</span>
                  </div>
                  <div className="progress d-flex">
                    <div className="progress-bar wow slideInLeft" data-wow-delay="0s" data-wow-duration=".8s" role="progressbar" data-width="50%" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="teamdetail__from pt-30">
              <div className="teamdetail__from-content">
                <h3 className="teamdetail__from-content-title wow fadeInLeft animated" data-wow-delay=".2s">Contact Me</h3>
                <p className=" wow fadeInLeft animated" data-wow-delay=".4s">By using form u agree with the message sorage, you</p>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="teamdetail__from-content-input wow fadeInLeft animated" data-wow-delay=".3s">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="teamdetail__from-content-input wow fadeInLeft animated" data-wow-delay=".4s">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="teamdetail__from-content-textarea wow fadeInLeft animated" data-wow-delay=".5s">
                        <textarea
                          name="message"
                          id="textarea"
                          cols={30}
                          rows={10}
                          placeholder="Write Message.."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="teamdetail__from-content-button d-flex justify-content-between pt-30">
                      <div className="live-comment-widget__agree wow fadeInLeft animated" data-wow-delay=".6s">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agree"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="agree">Save my name email</label>
                      </div>
                      <button
                        type="submit"
                        className="teamdetail__from-content-button-btn wow fadeInLeft animated"
                        data-wow-delay=".7s"
                      >
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
