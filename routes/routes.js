import express from "express";
import { getAllBlogsNoSql, /* getAllBlogsPromiseSql */ getBlogNoSql, createBlogNoSql, updateBlogNoSql, deleteBlogNoSql} from "../controllers/BlogControllerNoSql.js";

const router = express.Router();

router.get("/allBlogsNoSql", getAllBlogsNoSql);
//router.get('/no_sql_promise', getAllBlogsPromiseSql);
router.get("/oneBlogNoSql/:id", getBlogNoSql);
router.post("/createBlogNoSql", createBlogNoSql);
router.put("/updateBlogNoSql/:id", updateBlogNoSql);
router.delete("/deleteBlogNoSql/:id", deleteBlogNoSql);



export default router;

