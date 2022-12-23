import express from "express";

const router = express.Router();

// Controller imports
import { test, anothertest } from "../controllers/index";

router.get("/test", test);
router.get("/testanother", anothertest);

module.exports = router;
