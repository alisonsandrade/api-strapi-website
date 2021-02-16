module.exports = ({ env }) => ({
  host: env('HOST', env.HOST),
  port: env.int('PORT', env.PORT),
  url: 'https://api-alinepontes.vercel.app/',
  admin: {
    url: '/',
    serveAdminPanel: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5b8e0df791cced22af80c7b234c86805'),
    },
  },
});
