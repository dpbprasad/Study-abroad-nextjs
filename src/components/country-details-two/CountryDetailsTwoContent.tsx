interface Country {
  name: string;
  description: string;
  title: string;
  highlights?: string[];
  quickFacts?: {
    language?: string;
    currency?: string;
    timezone?: string;
    studyDuration?: string;
  };
}

interface CountryDetailsTwoContentProps {
  country: Country;
}

export default function CountryDetailsTwoContent({ country }: CountryDetailsTwoContentProps) {
  return (
    <div className="countrie-details__content">
      <h2 className="countrie-details__content-title mb-20 wow fadeInLeft animated" data-wow-delay=".2s">
        {country.title || `Discover ${country.name}`}
      </h2>
      <p className="wow fadeInLeft animated" data-wow-delay=".4s">
        {country.description}
      </p>

      <h3 className="mt-30 mb-20 wow fadeInLeft animated" data-wow-delay=".3s">
        Why choose {country.name}?
      </h3>

      <p className="wow fadeInLeft animated" data-wow-delay=".5s">
        {country.name} offers exceptional opportunities for international students seeking world-class education.
        With its diverse culture, quality educational institutions, and welcoming environment, {country.name} has
        become one of the most sought-after destinations for higher education.
      </p>

      {country.highlights && country.highlights.length > 0 && (
        <div className="countrie-details__highlights mt-30">
          {country.highlights.map((highlight, index) => (
            <div
              key={index}
              className="countrie-details__content-text mt-20 wow fadeInLeft animated"
              data-wow-delay={`.${index + 4}s`}
            >
              <h5>{highlight}</h5>
              <p>
                Experience the advantage of {highlight.toLowerCase()} when you choose {country.name} for your studies.
                Our team provides comprehensive support to help you make the most of this opportunity.
              </p>
            </div>
          ))}
        </div>
      )}

      {country.quickFacts && (
        <>
          <h3 className="mt-50 wow fadeInLeft animated" data-wow-delay="1.6s">
            Quick Facts About {country.name}
          </h3>

          {country.quickFacts.language && (
            <div className="countrie-details__content-text mt-30 wow fadeInLeft animated" data-wow-delay=".7s">
              <h5>Language</h5>
              <p>
                The official language(s) in {country.name} is {country.quickFacts.language}. This makes it easier
                for international students to adapt and communicate effectively during their studies.
              </p>
            </div>
          )}

          {country.quickFacts.currency && (
            <div className="countrie-details__content-text mt-20 wow fadeInLeft animated" data-wow-delay=".8s">
              <h5>Currency & Living Costs</h5>
              <p>
                The local currency is {country.quickFacts.currency}. We provide guidance on cost of living,
                budgeting, and financial planning to help you manage your expenses while studying in {country.name}.
              </p>
            </div>
          )}

          {country.quickFacts.studyDuration && (
            <div className="countrie-details__content-text mt-20 wow fadeInLeft animated" data-wow-delay=".9s">
              <h5>Study Duration</h5>
              <p>
                Typical study programs in {country.name} range from {country.quickFacts.studyDuration},
                depending on your chosen course and qualification level.
              </p>
            </div>
          )}
        </>
      )}

      <h3 className="mt-50 wow fadeInLeft animated" data-wow-delay="1.2s">
        Our Services for {country.name}
      </h3>

      <div className="countrie-details__content-text mt-30 wow fadeInLeft animated" data-wow-delay="1.3s">
        <h5>University Application Assistance</h5>
        <p>
          Get expert guidance on selecting the right university and program in {country.name}. We help you
          prepare your application documents, meet deadlines, and maximize your chances of acceptance.
        </p>
      </div>

      <div className="countrie-details__content-text mt-20 wow fadeInLeft animated" data-wow-delay="1.4s">
        <h5>Visa & Immigration Support</h5>
        <p>
          Navigate the visa application process with ease. Our experienced team provides comprehensive support
          for student visa applications, documentation, and immigration requirements for {country.name}.
        </p>
      </div>

      <div className="countrie-details__content-text mt-20 wow fadeInLeft animated" data-wow-delay="1.5s">
        <h5>Pre-Departure & Settlement Services</h5>
        <p>
          Prepare for your journey with our pre-departure orientation sessions. We also provide ongoing support
          for accommodation, banking, and settling into life in {country.name}.
        </p>
      </div>
    </div>
  );
}
