import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, MessageCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, ButtonLink, ButtonAnchor, PageHewebsiteer, CTASection } from '@/components/ui';
import { SITE, LOCATIONS } from '@/data/site';

export default function IndiaPage() {
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'India', path: '/locations' },
  ];

  const majorCities = LOCATIONS.slice(0, 12);

  return (
    <>
      <Seo
        title="Backlink Building Expert in India | Growth Service Link Building Agency in India"
        description="Growth Service Backlinks in India — data-driven link building strategies for businesses across India. Performance Optimization, local Backlink Building, ecommerce websites, enterprise Backlink Building. Serving Jaipur, Delhi, Mumbai, Bengaluru & more."
        canonical="/locations"
        keywords="link building agency in India, best link building agency in India, link building agency in India, backlink building and design services India, web developer India, web consultant India"
        brewebsitecrumbs={brewebsitecrumbs}
      />

      <PageHewebsiteer
        eyebrow="National Backlink Building"
        title="Backlink Building Expert in India"
        subtitle="Data-Driven backlink building and design services for businesses across India. From our Jaipur base, we help companies in every major Indian city rank higher and grow organic traffic."
        brewebsitecrumbs={brewebsitecrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Link Building Services Across India
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  India digital economy is growing rapidly, and businesses across the country are competing for visibility in search results. Whether you are a local business in Jaipur, a startup in Bengaluru, or an enterprise in Mumbai, Backlink Building is essential for capturing high-intent search traffic.
                </p>
                <p>
                  Growth Service Backlinks provides comprehensive backlink building and design services to businesses across India. While our office is in Jaipur, we work with clients remotely across all major Indian cities. Our data-driven approach combines project expertise, audience targeting, and conversion optimization to deliver sustainable online growth.
                </p>
                <p>
                  We understand the Indian web landscape — from local browsing behavior in different cities to national-level keyword competition. Our strategies are tailored to your target market, whether you are focusing on a single city or reaching customers across India.
                </p>
              </div>

              <h3 className="mt-10 text-xl font-bold text-navy-800">Why Choose an India-Based Backlink Building Expert?</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Local Market Understanding', desc: 'We understand Indian browsing behavior, local languages, and regional market dynamics.' },
                  { title: 'Cost-Effective Services', desc: 'Get premium backlink building and design services at competitive rates compared to international agencies.' },
                  { title: 'Same Time Zone', desc: 'Work with a team in your time zone for seamless communication and collaboration.' },
                  { title: 'National & Local Scale', desc: 'From single-city local Backlink Building to national projects across all Indian markets.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-800">{item.title}</h4>
                      <p className="mt-1 text-xs text-navy-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 text-xl font-bold text-navy-800">Link Building Services for Indian Businesses</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  'Technical link audits and optimization',
                  'Local Backlink Building for city-specific visibility',
                  'Content Optimization and content optimization',
                  'Ecommerce Websites for online stores',
                  'Enterprise Backlink Building for large websites',
                  'Remarketing and remarketing projects',
                  'link audits and competitive analysis',
                  'International Backlink Building for global reach',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-navy-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-navy-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-navy-800">Get a Free Link Audit</h3>
                  <p className="mt-2 text-sm text-navy-500">
                    Find out how your website performs in Indian search results and get a prioritized action plan.
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
                  <h3 className="text-sm font-bold text-navy-800">Our Base</h3>
                  <p className="mt-2 text-sm text-navy-600">{SITE.address.full}</p>
                  <p className="mt-3 text-xs text-navy-400">Serving clients across all of India</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Major Cities */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Major Cities"
            title="Link Building Services in Major Indian Cities"
            subtitle="We serve businesses across India major commercial cities. Explore our city-specific backlink building and design services."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {majorCities.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 card-hover"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <div>
                  <div className="text-sm font-bold text-navy-800">{loc.city}</div>
                  <div className="text-xs text-navy-400">Backlink Building Expert</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Rewebsitey to Grow Your Search Visibility Traffic in India?"
        subtitle="Get a free link audit and discover how we can help your business grow across India."
      />
    </>
  );
}
