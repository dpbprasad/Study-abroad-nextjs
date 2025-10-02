'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <section className="footer__area-common dark-green overflow-hidden position-relative z-1">
        {/* Footer Top */}
        <div className="footer__border-bottom">
          <div className="container">
            <div className="footer-top d-flex justify-content-between pt-50 pb-50">
              <div className="footer-top-left d-flex wow fadeInLeft animated" data-wow-delay=".2s">
                <div className="footer-left-svg">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.2031 15.3458H36.0562C36.8555 13.9007 37.2636 12.272 37.2403 10.6208C37.2171 8.96962 36.7632 7.35309 35.9235 5.93111C35.0839 4.50913 33.8876 3.33095 32.453 2.5131C31.0184 1.69525 29.3951 1.26606 27.7437 1.26797C26.2274 1.27277 24.7339 1.63888 23.3873 2.33597C22.0406 3.03306 20.8794 4.04105 20 5.27641C18.5991 3.2956 16.4929 1.92646 14.1139 1.45027C11.735 0.974076 9.26405 1.42699 7.20866 2.71596C5.15328 4.00493 3.66955 6.03209 3.06228 8.38098C2.45501 10.7299 2.77032 13.2221 3.94344 15.3458H1.79688C1.32049 15.3464 0.863786 15.5359 0.526932 15.8727C0.190078 16.2096 0.000578888 16.6663 0 17.1427L0 37.028C0.000578888 37.5044 0.190078 37.9611 0.526932 38.2979C0.863786 38.6348 1.32049 38.8243 1.79688 38.8249H38.2031C38.6795 38.8244 39.1363 38.6349 39.4732 38.298C39.81 37.9611 39.9995 37.5044 40 37.028V17.1427C39.9995 16.6663 39.81 16.2095 39.4732 15.8726C39.1363 15.5358 38.6795 15.3463 38.2031 15.3458ZM27.7431 2.36172C29.2561 2.3614 30.741 2.76958 32.0412 3.54317C33.3414 4.31677 34.4087 5.42706 35.1302 6.75686C35.8518 8.08665 36.2009 9.58659 36.1408 11.0983C36.0806 12.6101 35.6134 14.0775 34.7884 15.3458H33.0219C34.1333 14.0794 34.7444 12.451 34.7406 10.7661C34.7409 9.15872 34.1877 7.60027 33.1741 6.35277C32.1605 5.10526 30.7483 4.24479 29.1749 3.91601C27.6015 3.58724 25.9629 3.81022 24.5346 4.54746C23.1062 5.2847 21.9753 6.49124 21.3319 7.96422C21.1531 7.38723 20.9193 6.82873 20.6338 6.29641C21.3921 5.09544 22.4412 4.10522 23.6839 3.41743C24.9266 2.72965 26.3228 2.36654 27.7431 2.36172ZM21.3319 13.5695C21.6168 14.2158 21.9987 14.8148 22.4644 15.3458H20.5703C20.8844 14.7814 21.1396 14.1862 21.3319 13.5695ZM21.8391 10.7652C21.8368 9.76716 22.0876 8.78488 22.5679 7.91008C23.0483 7.03528 23.7425 6.29651 24.5858 5.76279C25.4291 5.22907 26.394 4.91782 27.3902 4.85811C28.3864 4.7984 29.3815 4.99218 30.2825 5.42135C31.1835 5.85052 31.961 6.50108 32.5424 7.31224C33.1238 8.1234 33.4901 9.0687 33.6071 10.0598C33.7241 11.0509 33.5879 12.0555 33.2114 12.9798C32.8348 13.904 32.2301 14.7177 31.4538 15.3448H24.0312C23.3457 14.7948 22.7927 14.0976 22.4132 13.3048C22.0338 12.5121 21.8375 11.6441 21.8391 10.7652ZM3.85281 10.7652C3.85265 9.45723 4.15776 8.16731 4.74387 6.99806C5.32999 5.8288 6.18092 4.81249 7.22896 4.02999C8.27699 3.24749 9.4932 2.7204 10.7808 2.49068C12.0684 2.26096 13.3918 2.33494 14.6458 2.70673C15.8998 3.07853 17.0497 3.73787 18.004 4.6323C18.9583 5.52673 19.6906 6.63155 20.1428 7.85884C20.5949 9.08614 20.7544 10.402 20.6085 11.7018C20.4625 13.0016 20.0152 14.2493 19.3022 15.3458H17.5356C18.6469 14.0794 19.2581 12.451 19.2544 10.7661C19.2605 9.84318 19.0841 8.92815 18.7352 8.07371C18.3863 7.21926 17.8718 6.44227 17.2213 5.78747C16.5709 5.13268 15.7974 4.61301 14.9453 4.25839C14.0932 3.90377 13.1793 3.72121 12.2564 3.72121C11.3335 3.72121 10.4196 3.90377 9.56754 4.25839C8.71545 4.61301 7.94191 5.13268 7.29148 5.78747C6.64104 6.44227 6.12656 7.21926 5.77764 8.07371C5.42872 8.92815 5.25227 9.84318 5.25844 10.7661C5.25471 12.451 5.86584 14.0794 6.97719 15.3458H5.21156C4.32208 13.9839 3.84982 12.3918 3.85281 10.7652ZM6.35281 10.7652C6.3509 9.76731 6.60192 8.78525 7.08241 7.91071C7.56291 7.03616 8.25721 6.29766 9.10048 5.76417C9.94374 5.23068 10.9085 4.91961 11.9045 4.86002C12.9006 4.80042 13.8955 4.99424 14.7964 5.42337C15.6973 5.8525 16.4747 6.50295 17.056 7.31396C17.6374 8.12498 18.0037 9.0701 18.1208 10.0611C18.2379 11.052 18.1019 12.0565 17.7255 12.9806C17.3492 13.9048 16.7448 14.7185 15.9688 15.3458H8.54625C7.8603 14.7958 7.30695 14.0985 6.92724 13.3056C6.54752 12.5126 6.3512 11.6443 6.35281 10.7652ZM38.9062 37.028C38.906 37.2144 38.8318 37.3931 38.7 37.5249C38.5682 37.6567 38.3895 37.7309 38.2031 37.7311H1.79688C1.61047 37.7309 1.43177 37.6567 1.29996 37.5249C1.16816 37.3931 1.094 37.2144 1.09375 37.028V17.1427C1.094 16.9563 1.16816 16.7776 1.29996 16.6458C1.43177 16.5139 1.61047 16.4398 1.79688 16.4395H38.2031C38.3895 16.4398 38.5682 16.5139 38.7 16.6458C38.8318 16.7776 38.906 16.9563 38.9062 17.1427V37.028Z" fill="white" />
                  </svg>
                </div>
                <h3>Need any support for <br /> tour and visa?</h3>
              </div>
              <div className="footr-top-right d-flex wow fadeInLeft animated" data-wow-delay=".3s">
                <div className="footer-top-right d-flex">
                  <div className="footer-right-svg">
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_5704_8349)">
                        <path d="M35.3072 24.0042C36.623 20.1266 36.5882 15.9179 35.2084 12.0627C33.8286 8.20739 31.1851 4.93234 27.7077 2.7702C24.2303 0.608062 20.1237 -0.313969 16.0558 0.154076C11.9879 0.622121 8.19801 2.45271 5.30255 5.34809C2.40708 8.24348 0.576392 12.0333 0.108235 16.1012C-0.359922 20.1691 0.561996 24.2757 2.72404 27.7532C4.88608 31.2306 8.16106 33.8743 12.0163 35.2542C15.8715 36.634 20.0802 36.669 23.9579 35.3533C24.556 36.5552 25.4315 37.5975 26.512 38.3943C27.5925 39.1911 28.847 39.7194 30.172 39.9357C31.497 40.1519 32.8544 40.0499 34.1321 39.6381C35.4099 39.2263 36.5714 38.5164 37.5207 37.5671C38.47 36.6179 39.1799 35.4564 39.5918 34.1786C40.0036 32.9009 40.1057 31.5435 39.8894 30.2185C39.6732 28.8935 39.1449 27.639 38.3482 26.5585C37.5514 25.4779 36.5091 24.6024 35.3072 24.0042Z" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <h3>are you ready for get <br /> started travelling?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="container">
          <div className="row mb-minus-40 footer-wrap">
            {/* Column 1: Logo & Social */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-item-1 wow fadeInLeft animated" data-wow-delay=".2s">
                <div className="footer__logo mb-30">
                  <Link href="/">
                    <img src="/assets/img/header/logo.svg" alt="logo" />
                  </Link>
                </div>
                <div className="footer__content">
                  <p>Corporate business typically refers to large-scale mansola it enterprises or organizat</p>
                </div>
                <div className="footer__social mt-20">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="https://vimeo.com/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-item-2 footer3__item-2 wow fadeInLeft animated" data-wow-delay=".3s">
                <div className="footer__widget-title footer__widget-title-2">
                  <h4>Services</h4>
                </div>
                <div className="footer__link">
                  <ul>
                    <li><Link href="/about"><i className="fa-solid fa-check"></i>Mistakes To Avoid</Link></li>
                    <li><Link href="/faq"><i className="fa-solid fa-check"></i>Your Startup</Link></li>
                    <li><Link href="/services"><i className="fa-solid fa-check"></i>Knew About Fonts</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Useful Links */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-item-3 wow fadeInLeft animated mt-md-50 mt-sm-40 mt-xs-35" data-wow-delay=".4s">
                <div className="footer__widget-title">
                  <h4>Useful Link</h4>
                </div>
                <div className="footer__link">
                  <ul>
                    <li><Link href="/blog"><i className="fa-solid fa-angle-right"></i>Latest News</Link></li>
                    <li><Link href="/about"><i className="fa-solid fa-angle-right"></i>Careers</Link></li>
                    <li><Link href="/services"><i className="fa-solid fa-angle-right"></i>General Inquiries</Link></li>
                    <li><Link href="/blog"><i className="fa-solid fa-angle-right"></i>Case Studies</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget footer__widget-item-4 wow fadeInLeft animated mt-md-50 mt-sm-40 mt-xs-35" data-wow-delay=".5s">
                <div className="footer__widget-title">
                  <h4>Subscribe Our Newsletter</h4>
                </div>
                <div className="footer__subscribe subscribe-2">
                  <div className="footer-form">
                    <form action="#" className="rr-subscribe-form">
                      <input className="form-control" type="email" name="email" placeholder="Enter Email" />
                      <button className="submit">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.9727 1.80469L13.2227 13.1523C13.1953 13.4258 13.0312 13.6719 12.7852 13.8086C12.6484 13.8633 12.5117 13.918 12.3477 13.918C12.2383 13.918 12.1289 13.8906 12.0195 13.8359L8.68359 12.4414L7.28906 14.5195C7.17969 14.7109 6.98828 14.793 6.79688 14.793C6.49609 14.793 6.25 14.5469 6.25 14.2461V11.6211C6.25 11.4023 6.30469 11.2109 6.41406 11.0742L12.375 3.41797L4.33594 10.6641L1.51953 9.48828C1.21875 9.35156 1 9.07812 1 8.72266C0.972656 8.33984 1.13672 8.06641 1.4375 7.90234L13.6875 0.929688C13.9609 0.765625 14.3438 0.765625 14.6172 0.957031C14.8906 1.14844 15.0273 1.47656 14.9727 1.80469Z" fill="white"/>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom-wrapper">
          <div className="container">
            <div className="footer__bottom">
              <div className="footer__copyright wow fadeInLeft animated" data-wow-delay=".6s">
                <p>© <a href="https://www.binarizeweb.com/">BINARIZE</a> 2025 | All Rights Reserved</p>
              </div>
              <div className="footer__copyright-menu">
                <ul>
                  <li className="wow fadeInLeft animated" data-wow-delay="1.6s"><Link href="/about">Terms & Condition</Link></li>
                  <li className="wow fadeInLeft animated" data-wow-delay="1.8s"><Link href="/about">Privacy Policy</Link></li>
                  <li className="wow fadeInLeft animated" data-wow-delay="2s"><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
