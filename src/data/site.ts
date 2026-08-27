import {
  Search, Target, MousePointerClick, TrendingUp, BarChart3, Users,
  Settings, Zap, LineChart, ShieldCheck, Eye, Cpu, Lightbulb,
  Home as HomeIcon, ShoppingBag, Stethoscope, Cloud, Factory,
  GraduationCap, Truck, Hotel, Car, Scale, Wallet, Store, Rocket,
  Phone, MessageCircle, ArrowRight, CheckCircle2, Activity,
  Gauge, FileSearch, Map as MapIcon, Workflow, Network,
  Building, Briefcase, Megaphone, Link2, Globe, Anchor,
  ExternalLink, Award, Bookmark, LinkIcon, Star, TrendingDown,
  Mail, AlertCircle, ThumbsUp, FileText, Server, Database,
  Layers, PenTool, Lock, RefreshCw, Search as SearchIcon,
} from 'lucide-react';

export const SITE = {
  name: 'Growth Service Backlinks',
  domain: 'backlinks.growthservice.in',
  parentCompany: 'Growth Service Digital Solution Pvt. Ltd.',
  parentWebsite: 'https://growthservice.in/',
  phone: '6207300553',
  phoneIntl: '+916207300553',
  whatsapp: '7654928455',
  whatsappLink: 'https://wa.me/917654928455',
  address: {
    line1: 'LG-44, JTM Mall, Jagatpura',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '303017',
    full: 'LG-44, JTM Mall, Jagatpura, Jaipur, Rajasthan – 303017',
  },
  email: 'backlinks@growthservice.in',
};

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Search;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  included: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'high-da-backlinks',
    title: 'High DA/PA Backlinks',
    shortTitle: 'High DA Backlinks',
    icon: Award,
    description: 'Premium backlinks from high Domain Authority and Page Authority websites to boost your search rankings.',
    longDescription: 'Our High DA/PA backlinks service gets you links from authoritative websites with Domain Authority of 50+. These powerful links pass maximum link juice to your site, dramatically improving your search engine rankings and organic traffic.',
    problem: 'Your website is stuck on page 2 or 3 of Google despite having good content. You lack high-authority backlinks that signal trust and relevance to search engines, and your competitors are outranking you because they have stronger link profiles.',
    solution: 'We build high DA/PA backlinks from authoritative, relevant websites in your industry — each link carefully vetted for quality, relevance, and authority. These links pass maximum link equity to your site, pushing you up the search rankings.',
    benefits: [
      'Links from websites with DA 50+ to boost your authority',
      'Significant improvement in search engine rankings',
      'Increased organic traffic from higher positions',
      'Faster indexing and better crawl frequency',
      'Long-lasting SEO value from permanent links',
    ],
    included: [
      'Link prospecting on DA 50+ websites',
      'Niche-relevant website selection',
      'Manual outreach and link placement',
      'Anchor text optimization',
      'Content creation for guest posts where needed',
      'Link indexing verification',
      'Full report with live link URLs',
      'DA/PA verification for each link',
      'Dofollow links (where available)',
      '30-day replacement guarantee',
    ],
    faqs: [
      { q: 'What is Domain Authority (DA)?', a: 'Domain Authority is a score (1-100) developed by Moz that predicts how well a website will rank on search engines. Higher DA means stronger ability to pass link equity. Links from high DA sites are more valuable for SEO.' },
      { q: 'Are these backlinks permanent?', a: 'Yes, all backlinks we build are permanent unless the hosting website removes the page. We offer a 30-day replacement guarantee — if any link is removed within 30 days, we replace it free of charge.' },
      { q: 'Do you provide dofollow or nofollow links?', a: 'We prioritize dofollow links as they pass more link equity. However, a natural link profile includes both dofollow and nofollow links. We provide mostly dofollow links with some high-quality nofollow links for a natural profile.' },
    ],
  },
  {
    slug: 'guest-post-backlinks',
    title: 'Guest Post Backlinks',
    shortTitle: 'Guest Posts',
    icon: FileText,
    description: 'Contextual backlinks from high-quality guest posts published on relevant, authoritative blogs in your industry.',
    longDescription: 'Guest post backlinks are the gold standard of link building. We write high-quality, relevant content and publish it on authoritative blogs in your niche — with a contextual backlink to your website. These links are natural, powerful, and drive both SEO value and referral traffic.',
    problem: 'You need high-quality, contextual backlinks from relevant websites in your industry. Low-quality links or irrelevant placements are not helping your SEO and may even hurt your rankings.',
    solution: 'We create compelling, valuable content and publish it on relevant, high-authority blogs in your niche — each guest post includes a contextual backlink with optimized anchor text, driving both SEO value and referral traffic.',
    benefits: [
      'Contextual links within relevant content',
      'Publications on niche-relevant, high-authority blogs',
      'Drives referral traffic in addition to SEO value',
      'Builds brand awareness and authority',
      'Natural, white-hat link building method',
    ],
    included: [
      'Niche-relevant blog prospecting (DA 30+)',
      'Content writing by experienced writers',
      'Editorial-quality articles (800-1500 words)',
      'Manual outreach to blog owners',
      'Contextual backlink placement',
      'Anchor text optimization',
      'Social sharing of published posts',
      'Full report with live URLs',
      'Dofollow links (where available)',
      '30-day replacement guarantee',
    ],
    faqs: [
      { q: 'What makes guest post backlinks special?', a: 'Guest post links are contextual — they appear within relevant content on relevant websites. Search engines value these links highly because they are natural, editorial links placed within quality content. They also drive real referral traffic.' },
      { q: 'Do you write the content?', a: 'Yes, our experienced writers create high-quality, original content for each guest post. You can review and approve the content before publication. We ensure the content is valuable to readers and relevant to your niche.' },
      { q: 'How long does it take to publish a guest post?', a: 'Typically 7-14 days from order to publication, depending on the target blog editorial process. Some high-authority sites may take longer due to their editorial calendar.' },
    ],
  },
  {
    slug: 'niche-edit-backlinks',
    title: 'Niche Edit Backlinks',
    shortTitle: 'Niche Edits',
    icon: LinkIcon,
    description: 'Contextual backlinks inserted into existing, already-indexed articles on relevant websites — fast and powerful.',
    longDescription: 'Niche edits (also called curated links) are backlinks placed into existing, already-indexed articles on relevant websites. Unlike guest posts, there is no need to write new content — we insert your link into an established article that already has authority and traffic. This makes niche edits faster and more cost-effective.',
    problem: 'You want contextual backlinks but do not want to wait for new content to be written and published. You need links from established, already-ranking pages that have existing authority and traffic.',
    solution: 'We find existing, relevant articles on authoritative websites and negotiate with site owners to insert your contextual backlink — giving you a powerful link from an already-indexed, already-ranking page.',
    benefits: [
      'Links from existing, already-indexed pages',
      'Faster turnaround than guest posts',
      'More cost-effective than guest posting',
      'Contextual placement within relevant content',
      'Pages that already have traffic and authority',
    ],
    included: [
      'Prospecting for relevant existing articles',
      'Website owner outreach and negotiation',
      'Contextual link insertion',
      'Anchor text optimization',
      'DA verification for each placement',
      'Link indexing verification',
      'Full report with live URLs',
      'Dofollow links (where available)',
      '30-day replacement guarantee',
    ],
    faqs: [
      { q: 'What is the difference between niche edits and guest posts?', a: 'Guest posts involve writing a new article and publishing it. Niche edits insert your link into an existing, already-published article. Niche edits are faster and cheaper because no new content needs to be written.' },
      { q: 'Are niche edits safe for SEO?', a: 'Yes, when done properly. We only place links in relevant, high-quality articles on legitimate websites. We avoid spammy or low-quality placements. Our niche edits are 100% white-hat.' },
    ],
  },
  {
    slug: 'web-2-0-backlinks',
    title: 'Web 2.0 Backlinks',
    shortTitle: 'Web 2.0',
    icon: Globe,
    description: 'Backlinks from high-authority Web 2.0 platforms like Medium, WordPress, Blogger, and Tumblr with unique content.',
    longDescription: 'Web 2.0 backlinks are links from high-authority platforms like Medium, WordPress.com, Blogger, Tumblr, and LinkedIn. We create unique, valuable content on these platforms with contextual backlinks to your site. These links are from trusted domains and pass significant authority.',
    problem: 'You need a diverse link profile with links from different types of websites. You want links from high-authority platforms but do not have the time to create and manage content on multiple Web 2.0 sites.',
    solution: 'We create unique, valuable content on high-authority Web 2.0 platforms — each with a contextual backlink to your website. These links diversify your link profile and pass authority from trusted domains.',
    benefits: [
      'Links from high-authority platforms (DA 90+)',
      'Diversifies your link profile naturally',
      'Unique content on each platform',
      'Cost-effective way to build authority',
      'Links from trusted, established domains',
    ],
    included: [
      'Account creation on top Web 2.0 platforms',
      'Unique content creation for each platform',
      'Contextual backlink placement',
      'Profile optimization with branding',
      'Interlinking between Web 2.0 properties',
      'Anchor text variation',
      'Full report with live URLs',
      'Indexing submission',
    ],
    faqs: [
      { q: 'Which Web 2.0 platforms do you use?', a: 'We use high-authority platforms including Medium, WordPress.com, Blogger, Tumblr, LinkedIn Articles, LiveJournal, and other trusted Web 2.0 sites with DA 90+.' },
      { q: 'Is the content unique?', a: 'Yes, we create unique, original content for each Web 2.0 property. We never use spun or duplicate content. Each article is written specifically for the platform it is published on.' },
    ],
  },
  {
    slug: 'profile-backlinks',
    title: 'Profile Backlinks',
    shortTitle: 'Profile Links',
    icon: Users,
    description: 'Backlinks from high-authority profile pages on popular forums, social platforms, and business directories.',
    longDescription: 'Profile backlinks are links from your profile page on high-authority websites like forums, social media platforms, and business directories. While individual profile links are less powerful than contextual links, they diversify your link profile and are very cost-effective.',
    problem: 'You need to diversify your link profile with links from different types of websites. You want a cost-effective way to build a natural-looking link profile that includes various link types.',
    solution: 'We create profiles on high-authority websites — forums, social platforms, business directories — each with a backlink to your site. These links diversify your profile and add a natural variety to your backlink portfolio.',
    benefits: [
      'Links from high-authority domains',
      'Diversifies your link profile',
      'Very cost-effective',
      'Quick turnaround',
      'Natural link profile variety',
    ],
    included: [
      'Profile creation on 50+ high-authority sites',
      'Profile optimization with bio and image',
      'Backlink placement in profile or bio',
      'Account verification where required',
      'Full report with live profile URLs',
      'Mix of dofollow and nofollow links',
    ],
    faqs: [
      { q: 'Are profile backlinks effective?', a: 'Profile backlinks are most effective as part of a diverse link profile. They are not as powerful individually as contextual links, but they add natural variety and authority signals. We recommend combining them with guest posts and niche edits.' },
      { q: 'Do profile links get indexed?', a: 'We submit all profile links for indexing. However, search engines may take longer to index profile pages compared to contextual links. We use indexing services to speed up the process.' },
    ],
  },
  {
    slug: 'social-bookmarking-backlinks',
    title: 'Social Bookmarking Backlinks',
    shortTitle: 'Social Bookmarks',
    icon: Bookmark,
    description: 'Backlinks from high-authority social bookmarking sites to boost your content visibility and link diversity.',
    longDescription: 'Social bookmarking backlinks are links from social bookmarking platforms where users save and share web pages. These links from high-authority bookmarking sites help diversify your link profile, drive referral traffic, and speed up content indexing.',
    problem: 'Your content is not getting indexed fast enough and your link profile lacks diversity. You need links from social platforms that also drive traffic and visibility.',
    solution: 'We submit your URLs to high-authority social bookmarking sites — each submission creates a backlink and helps search engines discover and index your content faster.',
    benefits: [
      'Faster content indexing by search engines',
      'Diversifies your link profile',
      'Drives referral traffic',
      'Increases content visibility',
      'Cost-effective link diversity',
    ],
    included: [
      'Submission to 50+ social bookmarking sites',
      'Unique titles and descriptions',
      'Tag optimization',
      'High-authority platform selection',
      'Full report with live URLs',
      'Mix of dofollow and nofollow links',
    ],
    faqs: [
      { q: 'Which social bookmarking sites do you use?', a: 'We use high-authority sites like Reddit, Mix, Slashdot, Folkd, Diigo, BibSonomy, and other trusted bookmarking platforms with good DA and active user bases.' },
      { q: 'Do social bookmarks help SEO?', a: 'Yes, social bookmarks help with content indexing, link diversity, and referral traffic. They are best used as part of a broader link building strategy, not as a standalone solution.' },
    ],
  },
  {
    slug: 'directory-submission-backlinks',
    title: 'Directory Submission Backlinks',
    shortTitle: 'Directory Links',
    icon: Layers,
    description: 'Backlinks from high-quality, niche-relevant business directories and web directories.',
    longDescription: 'Directory submission backlinks are links from business directories and web directories. We submit your site to high-quality, niche-relevant directories that pass authority and help with local SEO. We avoid low-quality spammy directories.',
    problem: 'You need directory backlinks for local SEO and link diversity, but most directory lists are full of spammy, low-quality sites that can hurt your SEO.',
    solution: 'We submit your website to high-quality, niche-relevant directories — each carefully vetted for authority and quality. These links help with local SEO and add natural diversity to your link profile.',
    benefits: [
      'Links from high-quality, vetted directories',
      'Improves local SEO visibility',
      'Niche-relevant directory selection',
      'Diversifies your link profile',
      'Cost-effective link building',
    ],
    included: [
      'Submission to 50+ high-quality directories',
      'Niche-relevant directory selection',
      'Optimized business descriptions',
      'Category optimization',
      'Full report with live URLs',
      'Local directory inclusion',
    ],
    faqs: [
      { q: 'Are directory submissions still effective for SEO?', a: 'Yes, when done on high-quality, relevant directories. Low-quality directory submissions can hurt SEO, but we only submit to vetted, authoritative directories that add real value to your link profile.' },
      { q: 'Do you submit to local directories?', a: 'Yes, we include local business directories like Google Business Profile, JustDial, Sulekha, and other India-specific directories for local SEO benefits.' },
    ],
  },
  {
    slug: 'competitor-backlink-analysis',
    title: 'Competitor Backlink Analysis',
    shortTitle: 'Competitor Analysis',
    icon: FileSearch,
    description: 'Deep analysis of your competitors backlink profiles to find link building opportunities you can replicate.',
    longDescription: 'Your competitors are ranking above you because they have better backlinks. We analyze their entire backlink profiles, identify their best links, and find opportunities you can replicate. This data-driven approach helps you build links that actually move the needle.',
    problem: 'Your competitors are outranking you and you do not know where their backlinks come from. You are building links blindly without understanding what it will take to outrank them.',
    solution: 'We analyze your top competitors backlink profiles using premium tools — identify their best links, find link gaps, and create a prioritized action plan of link building opportunities you can replicate.',
    benefits: [
      'Discover where your competitors get their links',
      'Find link building opportunities you can replicate',
      'Understand what it takes to outrank them',
      'Data-driven link building strategy',
      'Prioritized action plan with quick wins',
    ],
    included: [
      'Analysis of 3-5 top competitors',
      'Full backlink profile export',
      'Link gap analysis',
      'Authority and relevance assessment',
      'Link building opportunity identification',
      'Anchor text analysis',
      'Prioritized action plan report',
      'Recommendations for link building strategy',
    ],
    faqs: [
      { q: 'Which tools do you use for competitor analysis?', a: 'We use premium SEO tools including Ahrefs, SEMrush, Moz, and Majestic to analyze competitor backlink profiles. These tools give us comprehensive data on every backlink pointing to your competitors.' },
      { q: 'How many competitors do you analyze?', a: 'We analyze 3-5 top competitors by default. You can request additional competitors for an extra fee. We recommend analyzing competitors that rank above you for your target keywords.' },
    ],
  },
  {
    slug: 'link-building-audit',
    title: 'Link Building Audit',
    shortTitle: 'Link Audit',
    icon: ShieldCheck,
    description: 'Comprehensive audit of your existing backlink profile to find toxic links, gaps, and opportunities for improvement.',
    longDescription: 'A link building audit is a comprehensive analysis of your existing backlink profile. We identify toxic links that may be hurting your rankings, find gaps in your link profile, and discover opportunities for improvement. This audit is the foundation of a data-driven link building strategy.',
    problem: 'Your website rankings have dropped or stalled and you suspect toxic backlinks may be the cause. Or you have never analyzed your backlink profile and do not know if your links are helping or hurting.',
    solution: 'We perform a deep audit of your backlink profile — identifying toxic links, finding gaps, analyzing anchor text distribution, and discovering opportunities — delivered as a prioritized action plan.',
    benefits: [
      'Identify and disavow toxic backlinks',
      'Find gaps in your link profile',
      'Improve anchor text distribution',
      'Discover new link building opportunities',
      'Protect your site from Google penalties',
    ],
    included: [
      'Full backlink profile export and analysis',
      'Toxic link identification',
      'Anchor text distribution analysis',
      'Link velocity assessment',
      'Competitor link gap analysis',
      'Disavow file creation (if needed)',
      'Link quality scoring',
      'Prioritized action plan report',
    ],
    faqs: [
      { q: 'What are toxic backlinks?', a: 'Toxic backlinks are links from spammy, low-quality, or irrelevant websites that can hurt your search rankings. Google may penalize sites with many toxic links. We identify these links and help you disavow them.' },
      { q: 'How long does a link audit take?', a: 'A comprehensive link audit typically takes 5-7 business days depending on the size of your backlink profile. Sites with thousands of backlinks may take longer.' },
    ],
  },
  {
    slug: 'local-citation-backlinks',
    title: 'Local Citation Backlinks',
    shortTitle: 'Local Citations',
    icon: MapIcon,
    description: 'Local business citations on directories, review sites, and local platforms to boost local search rankings.',
    longDescription: 'Local citation backlinks are mentions of your business name, address, and phone number (NAP) on local directories, review sites, and local platforms. These citations are a key ranking factor for local SEO and help your business appear in local search results and Google Maps.',
    problem: 'Your business is not showing up in local search results or Google Maps. You lack consistent local citations across directories, which is a key local SEO ranking factor.',
    solution: 'We build consistent local citations across high-quality local directories, review sites, and platforms — ensuring your NAP information is accurate and consistent everywhere, boosting your local search rankings.',
    benefits: [
      'Improved local search rankings',
      'Better Google Maps visibility',
      'Consistent NAP across all directories',
      'More local customer discovery',
      'Boosts local SEO authority',
    ],
    included: [
      'Submission to 50+ local directories',
      'NAP consistency verification',
      'Google Business Profile optimization',
      'Local review site citations',
      'India-specific directory submissions',
      'Full report with live citations',
    ],
    faqs: [
      { q: 'What is a local citation?', a: 'A local citation is any online mention of your business name, address, and phone number (NAP). Citations on authoritative, relevant directories help your business rank in local search results and Google Maps.' },
      { q: 'Why does NAP consistency matter?', a: 'Search engines use NAP consistency as a trust signal. If your business name, address, or phone number is inconsistent across directories, search engines may not trust the information, which can hurt your local rankings.' },
    ],
  },
  {
    slug: 'infographic-backlinks',
    title: 'Infographic Backlinks',
    shortTitle: 'Infographic Links',
    icon: BarChart3,
    description: 'Custom infographics created and distributed to high-authority websites for powerful visual backlinks.',
    longDescription: 'Infographic backlinks are links earned by creating and distributing high-quality infographics. We design custom infographics relevant to your niche and distribute them to infographic directories, blogs, and websites — each placement includes a backlink to your site.',
    problem: 'You need diverse, high-quality backlinks from different content formats. Text-based link building alone is not enough, and you want links from visual content that gets shared and linked naturally.',
    solution: 'We create custom, professionally designed infographics and distribute them to high-authority websites and directories — each placement earns you a contextual backlink and drives referral traffic.',
    benefits: [
      'Links from high-authority infographic directories',
      'Highly shareable visual content',
      'Diversifies your link profile',
      'Drives referral traffic',
      'Builds brand awareness',
    ],
    included: [
      'Custom infographic design',
      'Data research and visualization',
      'Distribution to 50+ infographic directories',
      'Outreach to blogs for placement',
      'Embed code with backlink',
      'Full report with live URLs',
    ],
    faqs: [
      { q: 'Do you design the infographic?', a: 'Yes, our design team creates a custom, professional infographic based on your niche and target keywords. You can review and approve the design before distribution.' },
      { q: 'How many backlinks can I expect?', a: 'Typically 30-50 backlinks from infographic directories, plus additional links from blogs that embed your infographic. The exact number depends on the quality and relevance of the infographic.' },
    ],
  },
  {
    slug: 'broken-link-building',
    title: 'Broken Link Building',
    shortTitle: 'Broken Links',
    icon: Link2,
    description: 'Find broken links on authoritative websites and replace them with your links — white-hat link building at its best.',
    longDescription: 'Broken link building is a white-hat SEO technique where we find broken (dead) links on authoritative websites in your niche, create replacement content, and reach out to the site owner to replace the broken link with yours. It is one of the most effective and natural link building methods.',
    problem: 'You want white-hat, natural backlinks but do not want to rely on guest posting alone. You need a link building method that provides value to website owners while earning you high-quality links.',
    solution: 'We find broken links on authoritative websites in your niche, create relevant replacement content, and reach out to site owners — offering your content as a replacement. This earns you high-quality, editorially-given backlinks.',
    benefits: [
      'White-hat, Google-safe link building',
      'Links from authoritative websites',
      'Provides value to site owners',
      'Editorially-given, natural links',
      'High success rate with personalized outreach',
    ],
    included: [
      'Broken link prospecting in your niche',
      'Relevant replacement content creation',
      'Personalized outreach to site owners',
      'Link placement negotiation',
      'Anchor text optimization',
      'Full report with live URLs',
      'Dofollow links (where available)',
    ],
    faqs: [
      { q: 'What is broken link building?', a: 'Broken link building is finding broken (dead) links on websites, creating replacement content, and asking the site owner to replace their broken link with a link to your content. It is a win-win — the site owner fixes a broken link, and you get a backlink.' },
      { q: 'How effective is broken link building?', a: 'Very effective. Site owners are happy to fix broken links, so outreach success rates are higher than cold guest post pitches. The links earned are editorially-given and from authoritative, relevant websites.' },
    ],
  },
];

export interface LocationItem {
  slug: string;
  city: string;
  state: string;
  priority: 'jaipur' | 'gujarat' | 'tier1';
  description: string;
}

export const LOCATIONS: LocationItem[] = [
  { slug: 'jaipur', city: 'Jaipur', state: 'Rajasthan', priority: 'jaipur', description: 'Our home city and primary market. We provide backlink building and SEO link building services to businesses across Jaipur from our JTM Mall office in Jagatpura.' },
  { slug: 'delhi', city: 'Delhi', state: 'Delhi', priority: 'tier1', description: 'Serving businesses in Delhi NCR with comprehensive backlink building and link building services for local and national brands.' },
  { slug: 'mumbai', city: 'Mumbai', state: 'Maharashtra', priority: 'tier1', description: 'Helping Mumbai businesses build high-authority backlinks that improve search rankings in India financial and commercial capital.' },
  { slug: 'pune', city: 'Pune', state: 'Maharashtra', priority: 'tier1', description: 'Backlink building services for Pune growing business ecosystem, from startups to enterprise companies.' },
  { slug: 'bengaluru', city: 'Bengaluru', state: 'Karnataka', priority: 'tier1', description: 'Supporting Bengaluru tech and startup ecosystem with data-driven backlink building services.' },
  { slug: 'hyderabad', city: 'Hyderabad', state: 'Telangana', priority: 'tier1', description: 'Backlink building services for Hyderabad businesses across tech, pharma, and retail sectors.' },
  { slug: 'chennai', city: 'Chennai', state: 'Tamil Nadu', priority: 'tier1', description: 'Helping Chennai businesses build high-authority backlinks that drive organic traffic.' },
  { slug: 'kolkata', city: 'Kolkata', state: 'West Bengal', priority: 'tier1', description: 'Backlink building services for Kolkata businesses across manufacturing, retail, and services.' },
  { slug: 'ahmedabad', city: 'Ahmedabad', state: 'Gujarat', priority: 'gujarat', description: 'Serving Ahmedabad businesses with backlink building services tailored to Gujarat commercial capital.' },
  { slug: 'surat', city: 'Surat', state: 'Gujarat', priority: 'gujarat', description: 'Backlink building services for Surat diamond, textile, and emerging tech businesses.' },
  { slug: 'vadodara', city: 'Vadodara', state: 'Gujarat', priority: 'gujarat', description: 'Helping Vadodara businesses grow with high-authority backlinks that drive organic traffic.' },
  { slug: 'rajkot', city: 'Rajkot', state: 'Gujarat', priority: 'gujarat', description: 'Backlink building services for Rajkot manufacturing and trading businesses.' },
  { slug: 'gandhinagar', city: 'Gandhinagar', state: 'Gujarat', priority: 'gujarat', description: 'Supporting Gandhinagar businesses with comprehensive backlink building strategies.' },
  { slug: 'gurgaon', city: 'Gurgaon', state: 'Haryana', priority: 'tier1', description: 'Backlink building services for Gurgaon corporate and startup businesses.' },
  { slug: 'noida', city: 'Noida', state: 'Uttar Pradesh', priority: 'tier1', description: 'Helping Noida tech and services businesses build high-authority backlinks.' },
  { slug: 'chandigarh', city: 'Chandigarh', state: 'Chandigarh', priority: 'tier1', description: 'Backlink building services for Chandigarh businesses across the Tricity area.' },
  { slug: 'indore', city: 'Indore', state: 'Madhya Pradesh', priority: 'tier1', description: 'Serving Indore businesses with data-driven backlink building services.' },
  { slug: 'lucknow', city: 'Lucknow', state: 'Uttar Pradesh', priority: 'tier1', description: 'Backlink building services for Lucknow businesses across retail, services, and healthcare.' },
  { slug: 'nagpur', city: 'Nagpur', state: 'Maharashtra', priority: 'tier1', description: 'Helping Nagpur businesses build high-authority backlinks that improve rankings.' },
  { slug: 'bhopal', city: 'Bhopal', state: 'Madhya Pradesh', priority: 'tier1', description: 'Backlink building services for Bhopal businesses across government, education, and private sectors.' },
  { slug: 'patna', city: 'Patna', state: 'Bihar', priority: 'tier1', description: 'Serving Patna businesses with comprehensive backlink building services.' },
  { slug: 'kochi', city: 'Kochi', state: 'Kerala', priority: 'tier1', description: 'Backlink building services for Kochi businesses across tourism, tech, and trade.' },
];

export interface IndustryItem {
  slug: string;
  name: string;
  icon: typeof HomeIcon;
  description: string;
}

export const INDUSTRIES: IndustryItem[] = [
  { slug: 'real-estate-backlinks', name: 'Real Estate Backlinks', icon: HomeIcon, description: 'Backlinks for real estate developers, agents, and property platforms to rank for local property searches.' },
  { slug: 'ecommerce-backlinks', name: 'Ecommerce Backlinks', icon: ShoppingBag, description: 'Backlinks for online stores to rank for product keywords and drive organic traffic.' },
  { slug: 'healthcare-backlinks', name: 'Healthcare Backlinks', icon: Stethoscope, description: 'Backlinks for hospitals, clinics, and healthcare providers to build medical authority.' },
  { slug: 'saas-backlinks', name: 'SaaS Backlinks', icon: Cloud, description: 'Backlinks for SaaS companies and tech startups to rank for software-related keywords.' },
  { slug: 'manufacturing-backlinks', name: 'Manufacturing Backlinks', icon: Factory, description: 'Backlinks for manufacturers to rank for industrial and B2B product keywords.' },
  { slug: 'education-backlinks', name: 'Education Backlinks', icon: GraduationCap, description: 'Backlinks for educational institutions, coaching centers, and EdTech platforms.' },
  { slug: 'logistics-backlinks', name: 'Logistics Backlinks', icon: Truck, description: 'Backlinks for logistics and supply chain companies to rank for shipping keywords.' },
  { slug: 'hospitality-backlinks', name: 'Hospitality Backlinks', icon: Hotel, description: 'Backlinks for hotels, resorts, and hospitality businesses to rank for travel searches.' },
  { slug: 'automotive-backlinks', name: 'Automotive Backlinks', icon: Car, description: 'Backlinks for automotive dealers and service centers to rank for vehicle searches.' },
  { slug: 'legal-backlinks', name: 'Legal Backlinks', icon: Scale, description: 'Backlinks for law firms and legal professionals to build legal authority.' },
  { slug: 'finance-backlinks', name: 'Finance Backlinks', icon: Wallet, description: 'Backlinks for financial services, fintech, and insurance companies.' },
  { slug: 'local-business-backlinks', name: 'Local Business Backlinks', icon: Store, description: 'Affordable backlinks for local businesses targeting nearby customers and map searches.' },
  { slug: 'b2b-backlinks', name: 'B2B Backlinks', icon: Briefcase, description: 'Backlinks for B2B companies to rank for industry-specific keywords and decision-maker searches.' },
  { slug: 'startup-backlinks', name: 'Startup Backlinks', icon: Rocket, description: 'Backlinks for startups building early domain authority and search visibility.' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQS: FaqItem[] = [
  { q: 'What is a backlink?', a: 'A backlink is a link from one website to another. Search engines like Google use backlinks as a signal of trust and authority — the more high-quality backlinks your site has, the higher it ranks in search results. Backlinks are one of the top 3 Google ranking factors.' },
  { q: 'Why do I need backlinks?', a: 'Backlinks are essential for SEO. They signal to search engines that your website is trustworthy and authoritative. Without quality backlinks, your website will struggle to rank on Google, no matter how good your content is. Backlinks drive organic traffic, improve rankings, and build domain authority.' },
  { q: 'How much do backlinks cost?', a: 'Backlink costs vary by type and quality. High DA backlinks start from Rs. 500 per link, guest posts from Rs. 1,500, and comprehensive link building campaigns from Rs. 15,000/month. We provide a detailed quote based on your target keywords and competition level.' },
  { q: 'Are these backlinks safe for SEO?', a: 'Yes, 100% white-hat. We only build links from legitimate, high-quality websites using manual outreach. We never use PBNs, link farms, spammy directories, or any black-hat techniques that could get your site penalized by Google.' },
  { q: 'How long does it take to see results?', a: 'Backlink building is a long-term SEO strategy. You typically see ranking improvements within 4-12 weeks as Google crawls and credits the new links. More competitive keywords may take 3-6 months. We provide monthly progress reports so you can track improvement.' },
  { q: 'Do you provide backlink building services in Jaipur?', a: 'Yes, we are based in Jaipur at LG-44, JTM Mall, Jagatpura. We provide backlink building services to businesses across Jaipur and surrounding areas.' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes, we work with businesses across India. Our Jaipur office serves as our base, but we remotely serve clients in Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Ahmedabad, Surat, and other major Indian cities.' },
  { q: 'What is the difference between dofollow and nofollow backlinks?', a: 'Dofollow links pass link equity (SEO value) from the linking site to your site. Nofollow links do not pass link equity directly but still contribute to a natural link profile. A healthy backlink profile includes both types. We prioritize dofollow links with some nofollow for natural diversity.' },
  { q: 'Can backlinks hurt my website?', a: 'Yes, toxic backlinks from spammy, low-quality websites can hurt your rankings and even trigger Google penalties. That is why it is critical to only build links from high-quality, relevant websites. We also offer link audits to identify and disavow toxic links.' },
  { q: 'How many backlinks do I need to rank on page 1?', a: 'It depends on your target keywords and competition. Some keywords need 10-20 quality backlinks, while competitive keywords may need 100+. We analyze your competitors and create a link building plan with the right number and type of links needed to outrank them.' },
];

export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  initial: string;
  strategy: string;
  technical: string[];
  content: string;
  authority: string;
  results: { label: string; value: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'ecommerce-backlink-building-growth',
    industry: 'Ecommerce / Retail',
    title: 'Backlink Building Campaign for an Ecommerce Store',
    challenge: 'An ecommerce store with 2,000+ products was stuck on page 3-4 of Google for most product keywords. They needed high-authority backlinks to compete with established marketplaces and improve organic rankings.',
    initial: 'Domain Authority of 18, only 40 referring domains, and organic traffic of 3,000/month. Competitors had DA 40+ and 500+ referring domains.',
    strategy: 'We built a diverse link profile using guest posts, niche edits, and Web 2.0 backlinks — targeting product category pages and the homepage with optimized anchor text.',
    technical: [
      '120 high DA backlinks built over 6 months',
      '45 guest posts on niche-relevant blogs (DA 40+)',
      '35 niche edit links on existing articles',
      '40 Web 2.0 backlinks from high-authority platforms',
    ],
    content: 'Created 45 guest post articles with contextual backlinks targeting product category pages with commercial intent keywords.',
    authority: 'Built links from industry blogs, review sites, and relevant directories to diversify the link profile and build topical authority.',
    results: [
      { label: 'Domain Authority', value: '18 → 42' },
      { label: 'Referring Domains', value: '40 → 280' },
      { label: 'Organic Traffic', value: '+340%' },
      { label: 'Keywords in Top 10', value: '450+' },
    ],
  },
  {
    slug: 'local-business-backlink-building',
    industry: 'Local Business / Services',
    title: 'Local Backlink Building for a Jaipur Service Business',
    challenge: 'A Jaipur-based service business was not ranking in the top 50 for local search terms. They had almost no backlinks and were invisible in local Google searches.',
    initial: 'Domain Authority of 8, only 5 referring domains, and not ranking for any local keywords. The business relied entirely on off-page SEO for visibility.',
    strategy: 'We built local citations, directory backlinks, and guest posts on local blogs — targeting Jaipur-specific keywords with location-based anchor text.',
    technical: [
      '80 local citation backlinks built',
      '20 guest posts on local and niche blogs',
      '15 directory submission backlinks',
      '10 social bookmarking backlinks',
    ],
    content: 'Created locally-relevant guest post content targeting Jaipur search terms with location-based anchor text.',
    authority: 'Built local citations on JustDial, Sulekha, IndiaMART, and other India-specific directories for local SEO authority.',
    results: [
      { label: 'Domain Authority', value: '8 → 28' },
      { label: 'Referring Domains', value: '5 → 95' },
      { label: 'Local Keywords in Top 3', value: '12' },
      { label: 'Organic Traffic', value: '+520%' },
    ],
  },
  {
    slug: 'saas-backlink-building-campaign',
    industry: 'SaaS / Technology',
    title: 'SaaS Backlink Building Campaign for a Tech Startup',
    challenge: 'A SaaS startup needed to rank for competitive software-related keywords. They had a great product but almost no backlinks and were not ranking for any target keywords.',
    initial: 'Domain Authority of 12, only 15 referring domains, and ranking on page 5+ for all target keywords. The startup needed high-authority links to compete.',
    strategy: 'We built high DA backlinks using guest posts on tech blogs, broken link building, and infographic distribution — targeting feature pages and comparison keywords.',
    technical: [
      '150 high DA backlinks built over 6 months',
      '60 guest posts on tech and SaaS blogs (DA 50+)',
      '30 broken link building placements',
      '60 infographic backlinks from design directories',
    ],
    content: 'Created comparison articles, listicles, and how-to guides with contextual backlinks targeting feature and comparison pages.',
    authority: 'Built links from high-authority tech publications and SaaS review sites to build topical authority in the software niche.',
    results: [
      { label: 'Domain Authority', value: '12 → 48' },
      { label: 'Referring Domains', value: '15 → 220' },
      { label: 'Keywords in Top 10', value: '180+' },
      { label: 'Organic Traffic', value: '+580%' },
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'what-are-backlinks-seo-guide', title: 'What Are Backlinks? A Complete SEO Guide for 2026', category: 'Link Building', excerpt: 'Everything you need to know about backlinks — what they are, why they matter, how to build them, and how they impact your search rankings.', date: '2026-08-20', readTime: '12 min' },
  { slug: 'how-to-build-high-da-backlinks', title: 'How to Build High DA Backlinks: A Step-by-Step Guide', category: 'Link Building', excerpt: 'Learn how to build high Domain Authority backlinks that actually move the needle for your search rankings.', date: '2026-08-15', readTime: '10 min' },
  { slug: 'guest-post-vs-niche-edit-backlinks', title: 'Guest Posts vs Niche Edits: Which Is Better for SEO?', category: 'Link Building', excerpt: 'Comparing guest post backlinks and niche edit backlinks — when to use each, costs, and which delivers better SEO results.', date: '2026-08-10', readTime: '8 min' },
  { slug: 'how-many-backlinks-do-i-need', title: 'How Many Backlinks Do I Need to Rank on Page 1?', category: 'SEO Strategy', excerpt: 'A data-driven guide to determining how many backlinks you need to rank on page 1 of Google for your target keywords.', date: '2026-08-05', readTime: '9 min' },
  { slug: 'dofollow-vs-nofollow-backlinks', title: 'Dofollow vs Nofollow Backlinks: What You Need to Know', category: 'Link Building', excerpt: 'Understanding the difference between dofollow and nofollow backlinks and how to build a natural link profile.', date: '2026-07-28', readTime: '7 min' },
  { slug: 'toxic-backlinks-how-to-identify-remove', title: 'Toxic Backlinks: How to Identify and Remove Them', category: 'SEO Audit', excerpt: 'How to find toxic backlinks that are hurting your rankings and how to disavow them safely with Google Disavow Tool.', date: '2026-07-20', readTime: '11 min' },
  { slug: 'broken-link-building-guide', title: 'Broken Link Building: The Ultimate White-Hat Link Building Guide', category: 'Link Building', excerpt: 'A complete guide to broken link building — finding broken links, creating replacement content, and earning high-quality backlinks.', date: '2026-07-15', readTime: '14 min' },
  { slug: 'backlink-building-tools-2026', title: 'Top 10 Backlink Building Tools for 2026', category: 'SEO Tools', excerpt: 'The best backlink building tools for finding link opportunities, analyzing competitors, and tracking your link building progress.', date: '2026-07-08', readTime: '10 min' },
  { slug: 'local-citation-building-guide', title: 'Local Citation Building: A Complete Guide for Local SEO', category: 'Local SEO', excerpt: 'How to build local citations that improve your local search rankings and Google Maps visibility.', date: '2026-07-01', readTime: '8 min' },
  { slug: 'anchor-text-optimization-guide', title: 'Anchor Text Optimization: How to Avoid Over-Optimization', category: 'SEO Strategy', excerpt: 'A complete guide to anchor text optimization — best practices, ratios, and how to avoid Google penalties from over-optimization.', date: '2026-06-25', readTime: '12 min' },
];

export const BLOG_CATEGORIES = [
  'Link Building', 'SEO Strategy', 'SEO Audit', 'SEO Tools', 'Local SEO', 'Case Studies', 'Guest Posts', 'Backlinks',
];

export const JAIPUR_AREAS = [
  'Jagatpura', 'Malviya Nagar', 'Mansarovar', 'Vaishali Nagar', 'C-Scheme',
  'Raja Park', 'Tonk Road', 'Pratap Nagar', 'Sitapura', 'Ajmer Road',
];

export const WHY_CHOOSE_US = [
  { icon: BarChart3, title: 'Data-Driven Link Building', description: 'Every link we build is backed by data — from competitor analysis to authority metrics. We build links that measurably improve your rankings.' },
  { icon: ShieldCheck, title: '100% White-Hat Links', description: 'We only build links from legitimate, high-quality websites using manual outreach. No PBNs, no link farms, no spammy tactics that risk Google penalties.' },
  { icon: Award, title: 'High DA/PA Links Only', description: 'We focus on quality over quantity. Every backlink we build comes from a website with real authority — DA 30+ minimum, with most links from DA 50+ sites.' },
  { icon: Eye, title: 'Transparent Reporting', description: 'Full transparency with detailed reports. You see every link we build, the DA of each site, the anchor text used, and the live URL — nothing hidden.' },
  { icon: MapIcon, title: 'Local & National Clients', description: 'From local Jaipur businesses to national brands across India, we scale our link building to match your target keywords and competition level.' },
  { icon: TrendingUp, title: 'Proven Results', description: 'Our link building campaigns have helped businesses increase organic traffic by 300-500%. We focus on links that actually move the needle.' },
];

export const PROCESS_STEPS = [
  { icon: FileSearch, title: 'Competitor Analysis', description: 'We analyze your competitors backlink profiles to understand what it takes to outrank them and find link building opportunities.' },
  { icon: Target, title: 'Link Prospecting', description: 'We find high-authority, relevant websites in your niche for link placement — vetting each site for quality, authority, and relevance.' },
  { icon: PenTool, title: 'Content & Outreach', description: 'We create high-quality content for guest posts and reach out to website owners with personalized pitches for link placement.' },
  { icon: LinkIcon, title: 'Link Placement', description: 'We secure contextual backlinks on authoritative websites with optimized anchor text and natural placement within relevant content.' },
  { icon: ShieldCheck, title: 'Quality Verification', description: 'Every link is verified for quality, DA, relevance, and indexing. We ensure each link meets our quality standards before reporting.' },
  { icon: BarChart3, title: 'Reporting & Tracking', description: 'We provide detailed monthly reports with live URLs, DA metrics, and ranking progress — so you can see exactly what your investment delivers.' },
];

export const TRUST_INDICATORS = [
  { icon: Award, label: 'High DA Links' },
  { icon: FileText, label: 'Guest Posts' },
  { icon: LinkIcon, label: 'Niche Edits' },
  { icon: Globe, label: 'Web 2.0' },
  { icon: ShieldCheck, label: 'White-Hat Only' },
  { icon: BarChart3, label: 'Transparent Reports' },
];

export const AUDIT_FEATURES = [
  'Backlink profile analysis', 'Toxic link identification', 'Competitor link gap analysis', 'Anchor text distribution',
  'Link velocity assessment', 'Domain Authority check', 'Referring domain analysis', 'Disavow file creation', 'Action plan report',
];

export { Phone, MessageCircle, ArrowRight, CheckCircle2, Activity, ShieldCheck, Zap, Lightbulb, Building };
