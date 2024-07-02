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
        </div>
    </div>
    </>
  )
}

export default Footer
