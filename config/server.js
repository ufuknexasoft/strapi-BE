var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("sdsds");
});

app.listen(process.env.PORT);

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9E3FdhrPvtS2fUtAV1sd9w=="),
    },
  },
});
