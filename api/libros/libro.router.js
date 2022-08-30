const { 
    createLibro,
    getLibros,
    getLibroByLibroId,
    updateLibros,
    deleteLibros,
 } = require('./libro.controller');
const router = require("express").Router();
const { checkToken } = require('../../auth/token')

router.post("/create", checkToken, createLibro);
router.get("/", checkToken, getLibros);
router.get("/:id", checkToken, getLibroByLibroId);
router.patch("/update", checkToken, updateLibros);
router.delete("/", checkToken,  deleteLibros);
module.exports = router;