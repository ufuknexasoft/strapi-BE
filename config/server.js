module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"), // This should be the hostname or IP address
  port: env.int("PORT", 1337), // Use the appropriate port for your Strapi instance

  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
