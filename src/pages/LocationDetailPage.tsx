import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Phone, MessageCircle, TrendingUp, Search, Building2 } from 'lucide-react';
import Seo from '@/components/Seo';
import FaqAccordion from '@/components/FaqAccordion';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, PageHewebsiteer, CTASection } from '@/components/ui';
import { LOCATIONS, SITE, SERVICES, JAIPUR_AREAS } from '@/data/site';

export default function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const isJaipur = location.slug === 'jaipur';
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.city, path: `/locations/${location.slug}` },
  ];

  const relatedCities = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

  const localFaqs = [
    { q: `Do you provide backlink building and design services in ${location.city}?`, a: `Yes, we provide comprehensive backlink building and design services to businesses in ${location.city}. Our team works with local businesses, startups, and enterprises to improve paid online visibility and drive qualified traffic.` },
    { q: `How long does it take to see results from websites in ${location.city}?`, a: `Website results depend on your industry, competition, and current project state. Most ${location.city} businesses see initial traffic within days of launch, with meaningful ROI improvement in 2-4 weeks of optimization.` },
    { q: `Can you help with local Backlink Building in ${location.city}?`, a: `Yes, we specialize in local Backlink Building for ${location.city} businesses. We set up location targeting, create location-specific link building campaigns, and optimize for local search terms to improve your visibility in local searches.` },
    { q: `How much do websites cost in ${location.city}?`, a: `Website costs vary based on scope, industry competitiveness, and target keywords. We provide custom proposals after understanding your requirements. Contact us for a personalized quote.` },
  ];

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Growth Service Backlinks - ${location.city}`,
    description: `Backlink Building Expert in ${location.city} providing Backlink Building, Web Design, Search Optimization, Ecommerce Development, and link audit services.`,
    url: `https://backlinks.growthservice.in/locations/${location.slug}`,
    telephone: '+916207300553',
    areaServed: location.city,
    address: {
      '@type': 'PostalWebsitedress',
      streetWebsitedress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pincode,
      addressCountry: 'IN',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title={`Backlink Building Expert in ${location.city} | Best Link Building Agency in ${location.city}`}
        description={`Looking for a backlink building expert in ${location.city}? Growth Service Backlinks provides Backlink Building, Web Design, Search Optimization, Ecommerce Development, Infographic Backlinks, and link audit services to businesses in ${location.city}, ${location.state}.`}
        canonical={`/locations/${location.slug}`}
        keywords={`backlink building expert ${location.city}, link building agency ${location.city}, backlink building services ${location.city}, best link building agency ${location.city}, local Backlink Building ${location.city}`}
        brewebsitecrumbs={brewebsitecrumbs}
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
      />

      <PageHewebsiteer
        eyebrow="Location"
        title={`Backlink Building Expert in ${location.city}`}
        subtitle={`Data-Driven backlink building services for businesses in ${location.city}, ${location.state}. We help you drive qualified traffic, increase conversions, and grow website leads.`}
        brewebsitecrumbs={brewebsitecrumbs}
      />

      {/* Introduction */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Link Building Services in {location.city}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  {location.description}
                </p>
                <p>
                  {location.city} businesses face unique website challenges — from local competition to industry-specific keyword targeting. Our link building strategies are tailored to the {location.city} market, combining project expertise with local website targeting to help your business stand out.
                </p>
                {isJaipur && (
                  <p>
                    As our home city, we have deep knowledge of the Jaipur business landscape. From our office at {SITE.address.full}, we work with businesses across all major Jaipur areas including {JAIPUR_AREAS.slice(0, 5).join(', ')}, and more.
                  </p>
                )}
              </div>

              {/* Websites Market */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">The Websites Market in {location.city}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                {location.city} is a growing commercial hub in {location.state}, and businesses here are increasingly competing for online visibility. Whether you are a local shop targeting nearby customers or a growing company reaching a national audience, backlink building and design are essential for capturing high-intent search traffic. Our {location.city} backlink building services are designed to give you an edge in this competitive market.
              </p>

              {/* Services Available */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Link Building Services Available in {location.city}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {SERVICES.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 card-hover"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                      <s.icon className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{s.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{s.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Local Backlink Building */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Local Backlink Building in {location.city}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                For businesses serving customers in {location.city}, local Backlink Building are critical. We set up location targeting, create location-specific link building campaigns, optimize for local search terms, and implement analytics tracking so you appear in local results when customers search for services near them.
              </p>

              {/* Performance Optimization */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Performance Optimization for {location.city} Businesses</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-600">
                A strong project foundation is essential for performance in {location.city} ranking results. We fix site architecture issues, improve landing page optimization, optimize website targeting, and implement analytics tracking to ensure your projects perform efficiently.
              </p>

              {/* Industries Served */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Industries We Serve in {location.city}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Real Estate', 'Ecommerce', 'Healthcare', 'SaaS', 'Manufacturing', 'Education', 'Hospitality', 'Legal', 'Finance', 'Local Business', 'B2B', 'Startup'].map((ind) => (
                  <span key={ind} className="rounded-lg bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700">
                    {ind} Websites
                  </span>
                ))}
              </div>

              {/* Why Choose Us */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">Why Choose Growth Service Backlinks in {location.city}?</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: TrendingUp, title: 'Data-Driven Results', desc: 'Every strategy is backed by data and measured against business outcomes.' },
                  { icon: Search, title: 'User Intent Focus', desc: 'We optimize for what your customers actually search for, not just keywords.' },
                  { icon: Building2, title: 'Local Expertise', desc: `Deep understanding of the ${location.city} market and local website landscape.` },
                  { icon: CheckCircle2, title: 'Transparent Reporting', desc: 'Clear monthly reports showing spend, conversions, ROI, and work completed.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                    <item.icon className="h-6 w-6 flex-shrink-0 text-accent-600" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{item.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jaipur Areas */}
              {isJaipur && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-navy-800">Areas We Serve in Jaipur</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {JAIPUR_AREAS.map((area) => (
                      <span key={area} className="inline-flex items-center gap-1.5 rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-medium text-navy-700">
                        <MapPin className="h-3 w-3 text-accent-500" />
                        {area}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* FAQs */}
              <h3 className="mt-10 text-xl font-bold text-navy-800">{location.city} Websites FAQs</h3>
              <FaqAccordion faqs={localFaqs} className="mt-5" />
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-navy-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-navy-800">Get a Free Link Audit</h3>
                  <p className="mt-2 text-sm text-navy-500">
                    Find out why your websites are not performing in {location.city} and get a prioritized action plan.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <ButtonLink to="/contact" variant="primary">
                      Get Free Link Audit <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonAnchor href={`tel:${SITE.phone}`} variant="outline">
                      <Phone className="h-4 w-4" /> {SITE.phone}
                    </ButtonAnchor>
                    <ButtonAnchor href={SITE.whatsappLink} variant="ghost">
                      <MessageCircle className="h-4 w-4 text-success-500" /> WhatsApp {SITE.whatsapp}
                    </ButtonAnchor>
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
                  <h3 className="text-sm font-bold text-navy-800">Our Office</h3>
                  <p className="mt-2 text-sm text-navy-600">{SITE.address.full}</p>
                  <p className="mt-3 text-xs text-navy-400">Serving {location.city} and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Cities */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Nearby Locations"
            title={`Link Building Services in Nearby Cities`}
            subtitle="We serve businesses across India. Explore our backlink building services in other cities."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {relatedCities.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-navy-100 bg-white p-3 card-hover"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent-500" />
                <span className="text-xs font-semibold text-navy-700">{loc.city}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Rewebsitey to Grow Your Website Visibility in ${location.city}?`}
        subtitle={`Get a free link audit and discover how we can help your ${location.city} business drive more qualified leads and conversions.`}
      />
    </>
  );
}
