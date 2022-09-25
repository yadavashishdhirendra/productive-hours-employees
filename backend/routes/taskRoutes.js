const express = require("express");
const { isAuthenticated } = require("../Auth/IsAuthenticated");
const {
  createTask,
  getSingleTask,
  AddCommentInTask,
  updateStatus,
  updateProductiveEndTime,
  getProductiveHours,
  updateProductiveStart,
  updateProductiveEnd,
  getDelayedTask,
  minutesScorePerTask,
  getAllTask,
  addLinks,
  updateTask,
  getTaskNotification,
  getAllTaskSpecificUser,
} = require("../controller/taskController");
const router = express.Router();

router.route("/create-task").post(isAuthenticated, createTask);
router.route("/task/details/:id").get(isAuthenticated, getSingleTask);
router.route("/comment/:id").put(isAuthenticated, AddCommentInTask);
router.route("/update/task/status/:id").put(isAuthenticated, updateStatus);
router
  .route("/update/task/time/:id")
  .put(isAuthenticated, updateProductiveStart);
router
  .route("/update/task/endtime/:id")
  .put(isAuthenticated, updateProductiveEnd);
router.route("/get/hours/:id").get(isAuthenticated, getProductiveHours);
router.route("/get/delayed/task").get(isAuthenticated, getDelayedTask);
router.route("/add/task/minutes/:id").put(isAuthenticated, minutesScorePerTask);
router.route("/add/link/:id").put(isAuthenticated, addLinks);
router.route("/all/tasks").get(isAuthenticated, getAllTask);
router.route("/update/task/:id").put(isAuthenticated, updateTask);
router.route("/get/task/notification").get(isAuthenticated, getTaskNotification);
router.route("/get/task/users/:id").get(isAuthenticated, getAllTaskSpecificUser);

module.exports = router;
