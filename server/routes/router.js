const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-user", services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/accountTypes", services.fetch_accountType);

/**
 *  @description for populate dropdown
 *  @method GET /populate dropdown
 */
route.get("/categoryTypes", services.fetch_categoryType);

/**
 *  @description for populate dropdown
 *  @method GET /populate dropdown
 */
route.get("/subCategoryTypes", services.fetch_subCategoryType);

// API
route.post("/saveTransaction", controller.createTransaction);
route.post("/createCategory", controller.createCategory);
route.post("/createSubcategory", controller.createSubcategory);
// route.get("/api/users", controller.find);
// route.put("/api/users/:id", controller.update);
// route.delete("/api/users/:id", controller.delete);

module.exports = route;
