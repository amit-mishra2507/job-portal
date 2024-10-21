import express from 'express';
import { employerGetAllApplication, JobSeekerDeleteApplication, JobSeekerGetAllApplication, postApplication } from '../controllers/applicationController.js';
import { isAuthorized } from '../middlewares/auth.js';

const router = express.Router();

router.get("/jobseeker/getall",isAuthorized, JobSeekerGetAllApplication);
router.get("/employer/getall",isAuthorized, employerGetAllApplication);
router.delete("/delete/:id", isAuthorized, JobSeekerDeleteApplication);
router.post("/post", isAuthorized, postApplication); // Added leading slash here

export default router;
