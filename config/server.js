module.exports = ({ env }) => ({
  host: env("HOST", "https://strapi-backend-m1vd.onrender.com"),
  port: env.int("PORT", 6543),

  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
