const express = require("express");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.render("blogs", { blogs: blogs });
});
router.get("/:slug", (req, res) => {
  myBlog = blogs.filter((blog) => {
    return blog.slug == req.params.slug;
  });
  res.render("blogpost", { myBlog: myBlog });
});

module.exports = router;
