const { 
    createUser,
    getUsers,
    getUserByUserId,
    updateUsers,
    deleteUsers,
    login
 } = require('./user.controller');
const router = require("express").Router();
const { checkToken } = require('../../auth/token')

router.post("/create", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/update", checkToken, updateUsers);
router.delete("/", checkToken,  deleteUsers);
router.post("/login",login);

module.exports = router;