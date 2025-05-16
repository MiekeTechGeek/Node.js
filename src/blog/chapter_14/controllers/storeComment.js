const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    try {
        const blogpost = await BlogPost.findById(req.params.id);

        // Add the new comment
        blogpost.comments.push({
            username: req.body.username || "Anonymous",
            content: req.body.comment,
            createdAt: new Date()
        });

        await blogpost.save();  // ✅ Saves the updated blog post
        res.redirect(`/post/${req.params.id}`);
    } catch (error) {
        console.error("Error submitting comment:", error);
        res.status(500).send('Error submitting comment');
    }
};