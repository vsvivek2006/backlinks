import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/Seo';
import { Container, Section, PageHewebsiteer, ButtonAnchor } from '@/components/ui';
import { SITE } from '@/data/site';

export default function ContactPage() {
  const brewebsitecrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    phone: '',
    email: '',
    targetLocation: '',
    projectRequirement: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Growth Service Backlinks',
    image: 'https://backlinks.growthservice.in/og-image.jpg',
    telephone: '+916207300553',
    address: {
      '@type': 'PostalWebsitedress',
      streetWebsitedress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pincode,
      addressCountry: 'IN',
    },
    url: 'https://backlinks.growthservice.in/contact',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  return (
    <>
      <Seo
        title="Contact Growth Service Backlinks | Get a Free Link Audit in Jaipur"
        description="Contact Growth Service Backlinks for a free link audit. Call 6207300553 or WhatsApp 7654928455. Located at LG-44, JTM Mall, Jagatpura, Jaipur, Rajasthan – 303017."
        canonical="/contact"
        keywords="contact link building agency Jaipur, link audit Jaipur, websites consultation, free link audit"
        brewebsitecrumbs={brewebsitecrumbs}
        jsonLd={jsonLd}
      />

      <PageHewebsiteer
        eyebrow="Get in Touch"
        title="Contact Growth Service Backlinks"
        subtitle="Rewebsitey to grow your organic traffic? Get a free link audit or talk to an web developer today."
        brewebsitecrumbs={brewebsitecrumbs}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800">Contact Information</h2>
              <p className="mt-3 text-base text-navy-600">
                Reach out to us through any of the channels below. We typically respond within one business day.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                    <MapPin className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-800">Office Websitedress</h3>
                    <p className="mt-1 text-sm text-navy-600">{SITE.address.full}</p>
                  </div>
                </div>

                <a href={`tel:${SITE.phone}`} className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-accent-200 hover:bg-accent-50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                    <Phone className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-800">Phone</h3>
                    <p className="mt-1 text-sm text-navy-600">{SITE.phone}</p>
                  </div>
                </a>

                <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-success-100 hover:bg-success-50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-success-50">
                    <MessageCircle className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-800">WhatsApp</h3>
                    <p className="mt-1 text-sm text-navy-600">{SITE.whatsapp}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                    <Mail className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-800">Email</h3>
                    <p className="mt-1 text-sm text-navy-600">{SITE.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonAnchor href={`tel:${SITE.phone}`} variant="primary">
                  <Phone className="h-4 w-4" /> Call Now
                </ButtonAnchor>
                <ButtonAnchor href={SITE.whatsappLink} variant="outline">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </ButtonAnchor>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-navy-100 bg-white p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
                    <CheckCircle2 className="h-8 w-8 text-success-500" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-navy-800">Thank You!</h2>
                  <p className="mt-3 text-base text-navy-600">
                    Your message has been received. Our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', businessName: '', website: '', phone: '', email: '', targetLocation: '', projectRequirement: '', message: '' });
                    }}
                    className="mt-6 text-sm font-semibold text-accent-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-navy-800">Request a Free Link Audit</h2>
                  <p className="mt-2 text-sm text-navy-500">
                    Fill out the form below and we will get back to you with a free link audit.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-700">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-semibold text-navy-700">Business Name</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold text-navy-700">Website</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-700">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-700">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="targetLocation" className="block text-sm font-semibold text-navy-700">Target Location</label>
                      <input
                        type="text"
                        id="targetLocation"
                        name="targetLocation"
                        value={formData.targetLocation}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                        placeholder="e.g. Jaipur, Mumbai, India"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="projectRequirement" className="block text-sm font-semibold text-navy-700">Project Requirement</label>
                    <select
                      id="projectRequirement"
                      name="projectRequirement"
                      value={formData.projectRequirement}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Website">High DA Backlinks</option>
                      <option value="Ecommerce Website">Ecommerce Website</option>
                      <option value="WordPress Website">WordPress Website</option>
                      <option value="Landing Page">Guest Post Backlinks</option>
                      <option value="Backlink Profile Cleanup">Backlink Profile Cleanup</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Mobile Responsive">Profile Backlinks</option>
                      <option value="Social Bookmarking">Social Bookmarking</option>
                      <option value="SEO Development">Directory Submission</option>
                      <option value="Infographic Backlinks">Infographic Backlinks</option>
                      <option value="Link Audit">Link Audit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
                      placeholder="Tell us about your SEO goals and challenges..."
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-6 w-full">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                  <p className="mt-4 text-center text-xs text-navy-400">
                    By submitting this form, you agree to our Privacy Policy. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
