/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "i.postimg.cc",
      "jcxywrb6vq4dv27l.public.blob.vercel-storage.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // ... other configurations if any
};

module.exports = nextConfig;
