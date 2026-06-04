import type { ComponentType } from 'react';
import { Globe, BarChart3, Sparkles, PenTool } from 'lucide-react';
import { IMG } from './assets';

export type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

export type Service = {
  slug: string;
  icon: IconType;
  /** Fanned mockup visual shown on the Services card. */
  img: string;
  title: string;
  /** Short one-liner used on the Services cards. */
  body: string;
  /** Longer lede shown at the top of the detail page. */
  intro: string;
  features: { title: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'websites',
    icon: Globe,
    img: IMG.service.websites,
    title: 'Websites',
    body: 'Custom-built, fast and easy to manage, from first plan to launch and hosting.',
    intro:
      'Fast, professional websites that look great and get results, planned, designed, built, launched and hosted by us.',
    features: [
      {
        title: 'Custom design',
        body: 'Mobile-first layouts crafted around your brand, never a template.',
      },
      {
        title: 'Built to convert',
        body: 'Clear structure and copy that turns visitors into enquiries.',
      },
      {
        title: 'SEO foundations',
        body: 'Clean markup, fast load times and on-page SEO from day one.',
      },
      {
        title: 'Hosting & care',
        body: 'Domain, hosting and updates handled so you never have to worry.',
      },
    ],
  },
  {
    slug: 'data-analytics',
    icon: BarChart3,
    img: IMG.service.data,
    title: 'Data Analytics',
    body: 'Analytics and a chatbot wired into your site, turned into plain-language insight.',
    intro:
      'We wire analytics and a chatbot into your site, then turn the numbers into plain-language insight you can actually act on.',
    features: [
      {
        title: 'Analytics setup',
        body: 'Tracking configured properly so the data you collect is trustworthy.',
      },
      {
        title: 'Behaviour insight',
        body: 'See where customers come from and exactly where they drop off.',
      },
      {
        title: 'Chatbot capture',
        body: 'A smart chatbot that answers questions and captures intent 24/7.',
      },
      {
        title: 'Monthly reports',
        body: 'Clear reports that tell you what to do next, not just charts.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    icon: Sparkles,
    img: IMG.service.ai,
    title: 'AI Automation',
    body: 'We automate the repetitive work that eats your week, so your time goes to customers.',
    intro:
      'We find the repetitive work that eats your week and hand it off to AI, so your time goes to customers, not busywork.',
    features: [
      {
        title: 'Workflow audit',
        body: 'We map the recurring tasks quietly slowing your team down.',
      },
      {
        title: 'Custom automations',
        body: 'AI workflows built around how your business actually runs.',
      },
      {
        title: 'Tools connected',
        body: 'Your site, inbox and tools wired together into one flow.',
      },
      {
        title: 'One dashboard',
        body: 'Everything surfaced in a single place instead of scattered tabs.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    icon: PenTool,
    img: IMG.service.design,
    title: 'Graphic Design',
    body: 'Logos, animated ads, banners and full rebrands, sharp, on-brand visuals ready to ship.',
    intro:
      'Logos, animated ads, banners and full rebrands, sharp, on-brand visuals ready to ship across every channel.',
    features: [
      {
        title: 'Logos & identity',
        body: 'Distinctive marks, type and color systems people remember.',
      },
      {
        title: 'Animated ads',
        body: 'Scroll-stopping motion ads for social and display that convert.',
      },
      {
        title: 'Banners & social',
        body: 'Campaign kits and templates you can roll out in minutes.',
      },
      {
        title: 'Rebranding',
        body: 'A fresh, modern identity for brands that have outgrown their look.',
      },
    ],
  },
];

export const getService = (slug?: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);
