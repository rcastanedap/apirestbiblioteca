const { 
    createUser,
    getUsers,
    getUserByUserId,
    updateUsers,
    deleteUsers,
    login
 } = require('./user.controller');
const router = require("express").Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByUserId);
router.patch("/update", updateUsers);
router.delete("/", deleteUsers);
router.post("/login",login);

module.exports = router;