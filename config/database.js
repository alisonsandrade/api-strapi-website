module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: process.env.NODE_ENV === 'production'
          ? env('DATABASE_URI') : env('DATABASE_URI_DEV'),
      },
      options: {
        ssl: true,
      },
    },
  },
});