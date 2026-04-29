import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/auth/',
          '/api/',
          '/_next/',
          '/crisis/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/auth/',
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://ltwbb.org/sitemap.xml',
    host: 'https://ltwbb.org',
  };
}
