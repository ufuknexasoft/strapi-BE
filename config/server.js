// var express = require("express");

// var app = express();

// app.get("/", function (req, res) {
//   res.send("sdsds");
// });

// app.listen(process.env.PORT);

module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "f8d3e5d6f7c8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4",
      "g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4i5j6k7l8",
    ],
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9E3FdhrPvtS2fUtAV1sd9w=="),
    },
  },
});
