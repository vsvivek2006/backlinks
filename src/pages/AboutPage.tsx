import { Search, Target, TrendingUp, Users, MapPin, Phone, MessageCircle, Building2, Award } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, ButtonLink, PageHewebsiteer, CTASection } from '@/components/ui';
import { SITE, PROCESS_STEPS, INDUSTRIES, LOCATIONS } from '@/data/site';

export default function AboutPage() {
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Growth Service Backlinks',
    description: 'Learn about Growth Service Backlinks, our link building philosophy, process, and the businesses we serve across Jaipur and India.',
    url: 'https://backlinks.growthservice.in/about',
  };

  return (
    <>
      <Seo
        title="About Growth Service Backlinks | Link Building Agency in Jaipur & India"
        description="Learn about Growth Service Backlinks — a data-driven link building agency based in Jaipur, India. Our link building philosophy, process, industries served, and why businesses choose us for online growth."
        canonical="/about"
        keywords="about Growth Service Backlinks, link building agency Jaipur, link building agency India, link building philosophy"
        brewebsitecrumbs={brewebsitecrumbs}
        jsonLd={jsonLd}
      />

      <PageHewebsiteer
        eyebrow="About Us"
        title="About Growth Service Backlinks"
        subtitle="A data-driven link building agency helping businesses across Jaipur and India build sustainable search visibility growth."
        brewebsitecrumbs={brewebsitecrumbs}
      />

      {/* Company Introduction */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                center={false}
                eyebrow="Who We Are"
                title="Link Building Strategies Built for ROI, Traffic & Business Growth"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600">
                <p>
                  Growth Service Backlinks is a specialized backlink building and design agency based in Jaipur, Rajasthan. We help businesses improve their paid online visibility through a comprehensive approach covering performance optimization, content for link building optimization, link building strategy strategy, local Backlink Building, and audience targeting.
                </p>
                <p>
                  What sets us apart is our commitment to data-driven decision-making. Every strategy we implement is backed by research, analysis, and measurable outcomes. We do not chase vanity metrics — we focus on organic traffic, qualified leads, and revenue growth.
                </p>
                <p>
                  We work with businesses of all sizes — from local Jaipur businesses targeting nearby customers to national brands competing in India most competitive website markets. Our team combines technical expertise with strategic thinking to deliver websites that compound over time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Search, label: 'Data-Driven', value: 'Every decision backed by data' },
                { icon: Target, label: 'Intent-Focused', value: 'Purchase intent alignment' },
                { icon: TrendingUp, label: 'Long-Term Growth', value: 'Sustainable, compounding results' },
                { icon: Users, label: 'Transparent', value: 'Clear, honest monthly reporting' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-navy-100 bg-white p-6 card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <item.icon className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-800">{item.label}</h3>
 <p className="mt-1 text-sm text-navy-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Parent Company */}
      <Section className="bg-navy-50">
        <Container>
          <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="eyebrow">Parent Company</span>
                <h2 className="mt-4 text-2xl font-bold text-navy-800 sm:text-3xl">
                  {SITE.parentCompany}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  Growth Service Backlinks operates as a specialized link building brand under {SITE.parentCompany}. This structure gives us access to a browebsiteer digital marketing infrastructure while maintaining our focused expertise in backlink building and design. Together, we provide comprehensive digital growth services for businesses across India.
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-navy-50 p-6">
                <Building2 className="h-12 w-12 text-accent-500" />
                <div>
                  <div className="text-sm font-semibold text-navy-800">{SITE.parentCompany}</div>
                  <a href={SITE.parentWebsite} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-600 hover:underline">
                    growthservice.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Link Building Philosophy */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="How We Think About Websites"
            subtitle="Our link building philosophy is built on four principles that guide every strategy we create."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Search, title: 'User Intent First', desc: 'We optimize for what customers actually want, not just keywords. Understanding intent drives better performance and conversions.' },
              { icon: TrendingUp, title: 'Sustainable Growth', desc: 'We build online growth systems that compound over time, not quick fixes that fade with project changes.' },
              { icon: Users, title: 'User-Centric', desc: 'Websites are about serving users well. Great creatives, fast landing pages, and clear messaging benefit both users and web platforms.' },
              { icon: Award, title: 'Quality Over Quantity', desc: 'We focus on quality — quality creatives, quality targeting, quality site architecture. Never spam or shortcuts.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy-100 bg-white p-6 card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-500">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A Structured Link Building Process"
            subtitle="Our 6-step process ensures every user engagement is systematic, transparent, and results-oriented."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-navy-100 bg-white p-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-navy-200 font-display">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <step.icon className="h-6 w-6 text-accent-600" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries Served */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="We have link building experience across a wide range of industries, each with its own browsing behavior and competitive landscape."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div key={industry.slug} className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4">
                <industry.icon className="h-6 w-6 flex-shrink-0 text-accent-500" />
                <span className="text-sm font-semibold text-navy-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Locations Served */}
      <Section className="bg-navy-50">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="Locations We Serve"
            subtitle="From our Jaipur office, we serve businesses across India major cities."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <span key={loc.slug} className="inline-flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm font-medium text-navy-700">
                <MapPin className="h-4 w-4 text-accent-500" />
                {loc.city}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Details */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <MapPin className="h-8 w-8 text-accent-500" />
              <h3 className="mt-4 text-lg font-bold text-navy-800">Jaipur Office</h3>
              <p className="mt-2 text-sm text-navy-600">{SITE.address.full}</p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <Phone className="h-8 w-8 text-accent-500" />
              <h3 className="mt-4 text-lg font-bold text-navy-800">Phone</h3>
              <a href={`tel:${SITE.phone}`} className="mt-2 block text-sm text-navy-600 hover:text-accent-600">{SITE.phone}</a>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <MessageCircle className="h-8 w-8 text-success-500" />
              <h3 className="mt-4 text-lg font-bold text-navy-800">WhatsApp</h3>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-navy-600 hover:text-accent-600">{SITE.whatsapp}</a>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
