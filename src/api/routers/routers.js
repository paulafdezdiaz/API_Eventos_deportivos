const express = require("express");
const router = express.Router();

router.use("/users", require("./api_routers/Users.routers"))
router.use("/events", require("./api_routers/Events.routers"))

module.exports = router
