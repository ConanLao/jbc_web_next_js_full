/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/distributors',
        permanent: true,
        locale: false
      }

      // vuexy-full
      // {
      //   source: '/',
      //   destination: '/en/dashboards/crm',
      //   permanent: true,
      //   locale: false
      // },
      // {
      //   source: '/:lang(en|fr|ar)',
      //   destination: '/:lang/dashboards/crm',
      //   permanent: true,
      //   locale: false
      // },
      // {
      //   source: '/((?!(?:en|fr|ar|front-pages|favicon.ico|home)\\b)):path',
      //   destination: '/en/:path',
      //   permanent: true,
      //   locale: false
      // }
    ]
  }
}

export default nextConfig
