import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'

function Footer() {
   return (
    <section className="relative overflow-hidden py-10 bg-dark text-white/80">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="130px" />
              </div>
              <div>
                <p className="text-sm text-white/50">
                  &copy; Copyright 2026. All Rights Reserved by ScriptIQ.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-white/40">
                Company
              </h3>
              <ul className='space-y-3'>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Features</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Pricing</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Affiliate Program</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Press Kit</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-white/40">
                Support
              </h3>
              <ul className='space-y-3'>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Account</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Help</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Contact Us</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Customer Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-white/40">
                Legals
              </h3>
              <ul className='space-y-3'>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Terms &amp; Conditions</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Privacy Policy</Link></li>
                <li><Link className="text-sm hover:text-brand-light transition-colors" to="/">Licensing</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer