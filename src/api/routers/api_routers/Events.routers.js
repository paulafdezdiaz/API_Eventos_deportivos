const express = require("express");
const router = express.Router();
const {validateToken, checkAdmin} = require("../../middleware/auth")
const { getAll, getByID, createEvent, updateEvent, deleteEvent, upcomingEvents, eventType} = require("../../controllers/Events.controller");

router.get("/getAll", getAll)
router.get("/upcoming", upcomingEvents)
router.get("/", eventType)
router.get("/:eventId", getByID)
router.post("/", validateToken, createEvent )
router.put("/:eventId", validateToken, updateEvent )
router.delete("/:eventId", validateToken, deleteEvent )






//router.post("/pictures", middlePicture, pictures)

module.exports = router

