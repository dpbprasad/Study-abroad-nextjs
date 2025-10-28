'use client';

import Link from 'next/link';
import UniversityLogos from '@/components/home/UniversityLogos';
import ChooseUsSection from '@/components/home/ChooseUsSection';

export default function FAQPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="breadcrumb__area dark-green breadcrumb-space overflow-hidden custom-width position-relative z-1" style={{ backgroundImage: 'url(/assets/imgs/breadcrumb/breadcrumb.png)' }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12">
              <div className="breadcrumb__content">
                <div className="breadcrumb__title-wrapper mb-15 mb-sm-10 mb-xs-5">
                  <h1 className="breadcrumb__title color-white wow fadeInLeft animated" data-wow-delay=".2s">FAQ</h1>
                </div>
                <div className="breadcrumb__menu wow fadeInLeft animated" data-wow-delay=".3s">
                  <nav>
                    <ul>
                      <li><span><Link href="/">Home</Link></span></li>
                      <li className="active"><span>FAQ</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq__area section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rs__faq">
                <div className="accordion" id="accordionExample">
                  {/* FAQ 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is a student visa and why do I need one?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>A student visa is an official government-issued document that grants you legal permission to enter and reside in a foreign country for educational purposes. Whether you're planning to study in the USA, UK, Canada, Australia, or Europe, obtaining the correct student visa is essential. At our consultation agency, we guide you through every step of the visa application process, ensuring you meet all requirements and deadlines for your dream destination.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">
                        What documents are required for a student visa application?
                      </button>
                    </h2>
                    <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The required documents vary by country, but typically include: a valid passport (with at least 6 months validity), official university acceptance letter (I-20, CAS, or offer letter), proof of financial support (bank statements, scholarship letters, or sponsor documents), academic transcripts and certificates, language proficiency test scores (IELTS, TOEFL, PTE, or Duolingo), passport-sized photographs, completed visa application form, medical examination reports, and police clearance certificates. Our expert team provides you with a personalized checklist based on your destination country and helps you gather and organize all required documents properly.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                        How much does it cost to work with your consultation agency?
                      </button>
                    </h2>
                    <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>We offer flexible consultation packages tailored to your needs. Our services include university selection guidance, application assistance, document preparation, visa application support, interview preparation, and post-arrival support. We believe in complete transparency with no hidden fees. The cost depends on the destination country, number of universities you're applying to, and the level of support you need. Many of our services are offered at competitive rates, and we also provide FREE initial consultations to discuss your study abroad goals. Contact us today to schedule your free consultation and receive a detailed quote customized to your requirements.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                        What is the difference between a student visa and a tourist visa?
                      </button>
                    </h2>
                    <div id="collapseOne4" className="accordion-collapse collapse" aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Student visas and tourist visas serve completely different purposes. A student visa (F-1, Tier 4, Study Permit, Subclass 500) is specifically designed for full-time academic study and typically allows you to work part-time, stay for the duration of your course, and sometimes bring dependents. Tourist/visitor visas are for short-term visits (usually up to 6 months), strictly prohibit studying or working, and don't allow you to change your status while in the country. It's crucial to apply for the correct visa type from the start - entering on a tourist visa with the intention to study is visa fraud and can lead to deportation and future visa bans. Our consultants ensure you apply for the appropriate visa category based on your purpose of travel.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5">
                        Can I work while on a student visa?
                      </button>
                    </h2>
                    <div id="collapseOne5" className="accordion-collapse collapse" aria-labelledby="headingOne5" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Yes! Most popular study destinations allow international students to work part-time. In countries like the USA, Canada, UK, and Australia, you can typically work 20 hours per week during semesters and full-time during holidays. This helps you gain valuable work experience, build your resume, and offset living expenses. Additionally, many countries offer post-study work permits (PSWR) - such as the USA's OPT, Canada's PGWP, UK's Graduate Route, and Australia's PSW visa - allowing you to work for 1-3 years after graduation. Our consultants provide detailed guidance on work rights and post-study opportunities specific to your chosen destination.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne6">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="false" aria-controls="collapseOne6">
                        How long does it take to process a student visa application?
                      </button>
                    </h2>
                    <div id="collapseOne6" className="accordion-collapse collapse" aria-labelledby="headingOne6" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Student visa processing times vary significantly by country. USA F-1 visas typically take 3-5 weeks, UK Student visas take about 3 weeks, Canadian study permits take 4-8 weeks, and Australian student visas take 4-6 weeks. Processing times can be longer during peak seasons (May-August). To avoid delays, we strongly recommend starting your application 3-4 months before your course begins. Our team monitors your application closely, ensures all documents are complete and accurate, and helps expedite the process wherever possible. We also keep you updated at every stage so you're never left wondering about your visa status.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne7">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7" aria-expanded="false" aria-controls="collapseOne7">
                        Is there an age limit for applying for a student visa?
                      </button>
                    </h2>
                    <div id="collapseOne7" className="accordion-collapse collapse" aria-labelledby="headingOne7" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Good news - there's generally no upper age limit for student visas! Whether you're 18 or 40, you can pursue your dream of studying abroad. However, older applicants (typically 30+) need to provide a compelling justification for their study plans, demonstrate how the course aligns with their career goals, and show strong ties to their home country. Some countries may scrutinize older applicants more closely to ensure genuine student intent. We have successfully helped students of all ages - from fresh high school graduates to working professionals seeking career advancement - secure their student visas. Our team helps you build a strong application that addresses potential age-related concerns and highlights your genuine motivation to study.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne8">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne8" aria-expanded="false" aria-controls="collapseOne8">
                        Can I apply for a student visa if I have a criminal record?
                      </button>
                    </h2>
                    <div id="collapseOne8" className="accordion-collapse collapse" aria-labelledby="headingOne8" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>This is a sensitive issue that requires honest assessment. A criminal record doesn't automatically disqualify you, but it can complicate your application. The impact depends on several factors: the nature and severity of the offense (minor traffic violations vs. serious crimes), how long ago it occurred, whether you've been rehabilitated, and the specific country's policies. Some countries like Canada and Australia have strict character requirements, while others may be more lenient for minor offenses. The most important thing is full disclosure - hiding a criminal record can lead to automatic rejection and permanent bans. If you have a criminal record, contact us for a confidential consultation. We'll assess your situation honestly, advise on your chances, and if proceeding, help you prepare supporting documents like rehabilitation certificates and character references.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne9">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne9" aria-expanded="false" aria-controls="collapseOne9">
                        What happens if my student visa application is denied?
                      </button>
                    </h2>
                    <div id="collapseOne9" className="accordion-collapse collapse" aria-labelledby="headingOne9" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Visa denials can be discouraging, but they're not the end of your study abroad journey. If your visa is denied, you'll receive a refusal letter explaining the specific reasons. Don't panic - our experienced team specializes in handling visa rejections. We'll carefully analyze the refusal reasons, identify gaps in your previous application, and develop a strong reapplication strategy. Whether it's strengthening financial documentation, improving your statement of purpose, or addressing credibility concerns, we'll guide you step-by-step. In some cases, we may also recommend alternative universities or countries that better match your profile. With our expert support, many students successfully obtain their visas on reapplication.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne10">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne10" aria-expanded="false" aria-controls="collapseOne10">
                        How long does it take to complete the entire study abroad application process?
                      </button>
                    </h2>
                    <div id="collapseOne10" className="accordion-collapse collapse" aria-labelledby="headingOne10" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The entire study abroad journey typically takes 6-12 months from start to finish. Here's a breakdown: University Research & Selection (1-2 months), Exam Preparation - IELTS/TOEFL/GRE/GMAT (2-3 months), Application Preparation & Submission (1-2 months), University Decision & Offer Letters (1-3 months), Visa Application & Processing (2-3 months), and Pre-Departure Preparations (1 month). We recommend starting at least 12-15 months before your intended intake to avoid rushing. Our comprehensive services cover every stage, from your first consultation to your departure, ensuring a smooth and stress-free experience. We also help you choose the right intake (Fall, Spring, or Summer) based on your timeline and course availability.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 11 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne11">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne11" aria-expanded="false" aria-controls="collapseOne11">
                        Do I need health insurance for my student visa?
                      </button>
                    </h2>
                    <div id="collapseOne11" className="accordion-collapse collapse" aria-labelledby="headingOne11" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Absolutely! Health insurance is mandatory for international students in most countries and is often a key requirement for visa approval. In the USA, universities typically require you to enroll in their student health insurance plan. Canada requires proof of provincial health coverage or private insurance. The UK's NHS surcharge is paid as part of the visa application. Australia requires Overseas Student Health Cover (OSHC) for the entire duration of your stay. Health insurance costs vary from $500 to $2000 per year depending on the country and coverage. We help you understand the health insurance requirements for your destination and guide you in selecting the right coverage that meets visa requirements while staying within your budget.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University/Brand Logos Section */}
      <UniversityLogos grayBg={false} />

      {/* Why Choose Us Section */}
      <ChooseUsSection grayBg={false} removeTopPadding={true} />
    </main>
  );
}
