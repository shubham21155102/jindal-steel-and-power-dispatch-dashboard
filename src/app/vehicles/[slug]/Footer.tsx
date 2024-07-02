import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="flex-row bg-slate-300">
        <div className="bg-themeDark2 py-14 flex">
          <div className="back_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
              <path d="M2 11.7654L12.8033 1.7381C13.613 0.986552 14.885 1.02678 15.6445 1.82796L25.8684 12.6119" stroke="#F5821E" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </div>
          <div className="container">
            <div className="row flex">
              <div className="col-12 sm:col-6 lg:col-2">
                <div className="footer-info">
                  <Link href="/">
                    <Image alt="Jindal Steel &amp; Power" loading="lazy" width={170} height={76} className="mb-4" src="/jspl_logo.svg" />
                  </Link>
                  <h6 className="font-bold text-dark leading-5 xxl:text-base xxl:leading-7 dark:text-darkmode-dark">Corporate Office</h6>
                  <p className="mt-1 text-xs leading-5 text-dark xxl:text-base xxl:leading-7 font-regular dark:text-darkmode-dark">
                    Jindal Centre 12, Bhikaiji Cama Place, New Delhi - 110 066, INDIA
                  </p>
                </div>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div>
                  <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Businesses</div>
                  <ul>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/businesses.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Overview</Link></li>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/steel.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Steel</Link></li>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/power.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Power</Link></li>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/chhattisgarh.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> India Operations</Link></li>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/australia.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Global Operations</Link></li>
                  </ul>
                </div>
                <div>
                  <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Products</div>
                  <ul>
                    <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/products.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Overview</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Sustainability</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/sustainability-at-jsp.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Overview</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/csa.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Corporate Social Responsibility</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/environment-management.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Environment Management</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/occupational-health-safety.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Occupational Health & Safety</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/product-stewardship.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Product Stewardship</Link></li>
                </ul>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Innovation & R&D</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/innovation-rnd.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Overview</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/research-development.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Research & Development</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/technology.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Technology</Link></li>
                </ul>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Careers</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/careers.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Working at JSP</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/apply-now.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Apply Now</Link></li>
                </ul>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Media</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/press-releases.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Press Releases</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/news.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> News</Link></li>
                </ul>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Investors</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/financial-reports.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Financial Reports</Link></li>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/corporate-governance.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Corporate Governance</Link></li>
                </ul>
              </div>

              <div className="col-12 sm:col-6 lg:col-2">
                <div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mt-8 xxl:mb-2">Contact</div>
                <ul>
                  <li><Link className="text-xs leading-6 xxl:text-base xxl:leading-9 text-dark/70 font-regular dark:text-darkmode-dark hover:text-white g-list-icon flex items-center transition duration-150 ease-out hover:ease-in" target="_self" href="/contact-us.html"><span className="mr-2" aria-hidden="true"><svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949707 1L5.19235 5.24264C5.58287 5.63316 5.58287 6.26633 5.19235 6.65685L0.949707 10.8995" stroke="#A6A8B4" strokeLinecap="round"></path></svg></span> Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
              <div className="col-12 sm:col-6 lg:col-2"><div className="social_links"><div className="text-base xxl:text-xl text-dark block font-regular dark:text-darkmode-dark mb-3 mt-8">Connect with us</div><div className="flex flex-wrap gap-2 xxl:gap-4"><Link target="_blank" className="bg-dark footer_social w-7 h-7 xxl:w-9 xxl:h-9 font-semibold text-white inline-flex items-center justify-center space-x-2 rounded-full" href="https://in.linkedin.com/company/jindal-steel-&amp;-power-ltd-"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></Link><Link target="_blank" className="bg-dark footer_social w-7 h-7 xxl:w-9 xxl:h-9 font-semibold text-white inline-flex items-center justify-center space-x-2 rounded-full" href="https://www.facebook.com/JSPLCorporate/"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link><Link target="_blank" className="bg-dark footer_social w-7 h-7 xxl:w-9 xxl:h-9 font-semibold text-white inline-flex items-center justify-center space-x-2 rounded-full" href="https://twitter.com/jsplcorporate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="rgba(254,254,254,1)"></path></svg></Link><Link target="_blank" className="bg-dark footer_social w-7 h-7 xxl:w-9 xxl:h-9 font-semibold text-white inline-flex items-center justify-center space-x-2 rounded-full" href="https://www.youtube.com/jsplcorporate"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link></div></div></div>
          
        </div>
        
    </div>
    </>
  )
}

export default Footer
