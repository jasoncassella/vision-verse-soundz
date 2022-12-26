/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'is3-ssl.mzstatic.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'is2-ssl.mzstatic.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'is5-ssl.mzstatic.com',
				port: '',
				pathname: '/image/**',
			},
			{
				protocol: 'https',
				hostname: 'is1-ssl.mzstatic.com',
				port: '',
				pathname: '/image/**',
			},
		],
	},
};

module.exports = nextConfig;
