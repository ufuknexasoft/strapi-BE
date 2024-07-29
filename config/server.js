module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },

  url: env("PUBLIC_URL", "https://strapi-backend-m1vd.onrender.com"),

  admin: {
    url: "/admin", // Ensure this is correct
    serveAdminPanel: true, // Make sure this is set to true
  },
});
