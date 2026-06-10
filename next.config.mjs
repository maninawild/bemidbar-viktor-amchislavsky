/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/ekskursii-i-lektsii", destination: "/tours", permanent: true },
      { source: "/stati", destination: "/articles", permanent: true },
      { source: "/stati/:slug", destination: "/articles/:slug", permanent: true },
      { source: "/arkhiv", destination: "/archive", permanent: true },
      { source: "/galereya", destination: "/gallery", permanent: true },
      { source: "/otzyvy", destination: "/reviews", permanent: true },
      { source: "/o-viktore", destination: "/about", permanent: true },
      { source: "/kontakty", destination: "/contacts", permanent: true }
    ];
  }
};

export default nextConfig;
