import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import FaqAccordion from '@/components/FaqAccordion';
import { Container, Section, SectionHeading, ButtonLink, PageHewebsiteer, CTASection } from '@/components/ui';
import { HOME_FAQS } from '@/data/site';

export default function FaqsPage() {
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="Backlink Building FAQs | Frequently Asked Questions | Growth Service Backlinks"
        description="Answers to common questions about backlink building and design services, how Backlink Building works, timelines, costs, guarantees, and more. Learn everything you need to know about Backlink Building before hiring an agency."
        canonical="/faqs"
        keywords="Backlink Building FAQs, Backlink Building questions, how does Backlink Building work, how long does Backlink Building take, how much does Backlink Building cost, Backlink Building guarantees"
        brewebsitecrumbs={brewebsitecrumbs}
        jsonLd={faqJsonLd}
      />

      <PageHewebsiteer
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about Backlink Building, our services, and how we help businesses grow search visibility traffic."
        brewebsitecrumbs={brewebsitecrumbs}
      />

      <Section>
        <Container>
          <FaqAccordion faqs={HOME_FAQS} />

          <div className="mt-12 rounded-3xl border border-navy-100 bg-navy-50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-navy-800">Still Have Questions?</h2>
            <p className="mt-3 text-base text-navy-600">
              Our team is rewebsitey to answer any questions you have about Backlink Building and how we can help your business grow.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink to="/contact" variant="primary">
                Contact Us <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink to="/services" variant="outline">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
