import express from "express";

const router = express.Router();

// Controller imports
import { test } from "../controllers/index";

router.get("/test", test);

module.exports = router;
