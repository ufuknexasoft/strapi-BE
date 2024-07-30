module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },
  url: env("PUBLIC_URL", "https://strapi-backend-m1vd.onrender.com"),
  nodeOptions: env("NODE_OPTIONS", "--max-old-space-size=2048"),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
