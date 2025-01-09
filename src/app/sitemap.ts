export default function Sitemap() {
  return [
    {
      url: `${process.env.PROD_URL}/`,
      priority: 0.5,
    },
    {
      // Challenge page has more priority
      url: `${process.env.PROD_URL}/rotate-matrix`,
      priority: 1.0,
    },
  ];
}
