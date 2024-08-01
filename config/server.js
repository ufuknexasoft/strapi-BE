module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 8080),
  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },

  nodeOptions: env("NODE_OPTIONS", "--max-old-space-size=2048"),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
