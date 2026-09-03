import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown, Link2 } from 'lucide-react';
import { SITE, SERVICES } from '@/data/site';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    dropdown: SERVICES.slice(0, 8).map((s) => ({ label: s.shortTitle, to: `/services/${s.slug}` })),
  },
  { label: 'Industries', to: '/industries' },
  {
    label: 'Locations',
    to: '/locations',
    dropdown: [
      { label: 'Jaipur', to: '/locations/jaipur' },
      { label: 'Delhi', to: '/locations/delhi' },
      { label: 'Mumbai', to: '/locations/mumbai' },
      { label: 'Bengaluru', to: '/locations/bengaluru' },
      { label: 'Ahmedabad', to: '/locations/ahmedabad' },
      { label: 'All Locations', to: '/locations' },
    ],
  },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-xl shadow-lg shadow-navy-800/10'
            : 'bg-navy-800'
        }`}
      >
        <div className="container-x px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo - Responsive sizing */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Growth Service Backlinks Home">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/30">
                <Link2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm sm:text-base font-bold text-white font-display whitespace-nowrap">
                  Growth Service
                </span>
                <span className="text-[8px] sm:text-[10px] font-medium text-accent-300 uppercase tracking-wider">
                  Backlinks
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile, shown on large screens */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 2xl:gap-1.5 flex-1 px-4">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 rounded-lg px-2.5 xl:px-3 2xl:px-3.5 py-2 text-xs xl:text-sm font-medium text-navy-100 transition-colors hover:text-white whitespace-nowrap"
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className="h-3 w-3 xl:h-3.5 xl:w-3.5" />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-56 xl:w-64 rounded-2xl border border-navy-100 bg-white p-2 shadow-2xl">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-600 transition-colors hover:bg-accent-50 hover:text-accent-600"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions - Responsive */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Phone - Hidden on small screens, shown on xl and up */}
              <a
                href={`tel:${SITE.phone}`}
                className="hidden xl:flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15 whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                <span className="whitespace-nowrap">{SITE.phone}</span>
              </a>

              {/* CTA Button - Hidden on small screens, shown on sm and up */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:-translate-y-0.5 lg:px-5 xl:px-6 whitespace-nowrap"
              >
                Free Link Audit
              </Link>

              {/* Mobile Menu Toggle - Always visible on mobile, hidden on lg+ */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay with smooth animation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="fixed inset-x-0 top-16 lg:top-20 bottom-0 overflow-y-auto" style={{ backgroundColor: '#111834' }}>
            <div className="container-x px-4 py-6">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="border-b border-white/10 last:border-0">
                    <Link
                      to={link.to}
                      className="block rounded-lg px-4 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mb-2 border-l-2 border-accent-500/30 pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Actions */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3.5 text-base font-semibold text-white backdrop-blur-md border border-white/10 transition-colors hover:bg-white/15"
                  >
                    <Phone className="h-5 w-5" /> Call {SITE.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    Free Link Audit
                  </Link>
                  <a
                    href={SITE.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-success-500 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-success-500/25 transition-all hover:bg-success-600"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Mobile Bottom CTA - Only visible on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-white/10 bg-[#111834] p-2 backdrop-blur-lg shadow-lg lg:hidden">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-success-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-success-600"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          Free Audit
        </Link>
      </div>
    </>
  );
}
