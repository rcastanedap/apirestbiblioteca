const { 
    createTrack,
    getTracks,
    getTrackByTrackId,
    updateTracks,
    deleteTracks,
 } = require('./track.controller');
const router = require("express").Router();
const { checkToken } = require('../../auth/token')

router.post("/create", checkToken, createTrack);
router.get("/", checkToken, getTracks);
router.get("/:id", checkToken, getTrackByTrackId);
router.patch("/update", checkToken, updateTracks);
router.delete("/", checkToken,  deleteTracks);
module.exports = router;