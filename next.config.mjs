/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.qrserver.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '10mb',
      },
    },
};

export default nextConfig;
