// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.PROD_URL}/sitemap.xml`,
  };
}
