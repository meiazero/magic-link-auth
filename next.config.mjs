/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	devIndicators: {
		buildActivity: true,
		buildActivityPosition: "bottom-right"
	},

	logging: {
		fetches: {
			fullUrl: true
		}
	},

	optimizeFonts: true,

	typescript: {
		ignoreBuildErrors: true
	},

	eslint: {
		ignoreDuringBuilds: true
	},
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }
}

export default nextConfig
