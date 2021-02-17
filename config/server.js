module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', '1337'),
  url: env('HEROKU_URL'),
  admin: {
    // url: '/',
    // serveAdminPanel: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5b8e0df791cced22af80c7b234c86805'),
    },
  },
});
