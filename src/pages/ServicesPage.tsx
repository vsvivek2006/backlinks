import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, SectionHeading, ButtonLink, PageHewebsiteer, CTASection } from '@/components/ui';
import { SERVICES } from '@/data/site';

export default function ServicesPage() {
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Link Building Services', path: '/services' },
  ];

  const jsonLd = SERVICES.slice(0, 8).map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.description,
    provider: {
      '@type': 'Organization',
      name: 'Growth Service Backlinks',
      url: 'https://backlinks.growthservice.in',
    },
    areaServed: 'IN',
  }));

  return (
    <>
      <Seo
        title="Link Building Services in Jaipur & India | Complete Websites Solutions"
        description="Complete backlink building services including Backlink Building, Web Design, Search Optimization, Ecommerce Development, Infographic Backlinks, Video Integration, Advanced Optimization, remarketing, and link audits. Serving Jaipur & India."
        canonical="/services"
        keywords="backlink building services, backlink building services Jaipur, backlink building services India, Backlink Building, Web Design, Ecommerce Development, remarketing, link audit"
        brewebsitecrumbs={brewebsitecrumbs}
        jsonLd={jsonLd}
      />

      <PageHewebsiteer
        eyebrow="Our Services"
        title="Complete Link Building Services for Sustainable Growth"
        subtitle="From site architecture to link building strategy and audience targeting — we cover every layer of backlink building and design to help your business grow."
        brewebsitecrumbs={brewebsitecrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm card-hover"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-violet-500 shadow-lg shadow-accent-500/20">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-navy-800">{service.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{service.description}</p>
                <div className="mt-4 space-y-1.5">
                  {service.benefits.slice(0, 3).map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-navy-600">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-success-500" />
                      {b}
                    </div>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
