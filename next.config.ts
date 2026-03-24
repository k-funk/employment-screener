import type { NextConfig } from 'next'

export const BASE_PATH = '/employment-screener'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: BASE_PATH,
}

export default nextConfig
