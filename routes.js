const router = require("express").Router();

const controllers = require("./controllers")

router.get("/", controllers.getIndex);

module.exports = router;