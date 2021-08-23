const express = require("express");
const router = express.Router();

const Story = require("../models/storyModel")
const Message = require("../models/messageModel")



//stories
router.get("/stories", async (req, res) => {
    try{
        const stories = await Story.find()
       res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.get("/stories/:postID", async (req, res) => {
    try{
        const stories = await Story.find({ _id: req.params.postID })
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/stories", async (req, res) =>{
    const story = new Story ( {
        title:req.body.title,
        name: req.body.name,
    })

    try{
        const savedStory = await story.save()
        res.json(savedStory)
    }catch (err) {
        res.json({message: err})
    }
})


router.delete("/stories/:postId", async (req, res) => {
    try{
        const removedPost = await Story.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch (err) {
        res.json({message: err})
    }
})



router.patch("/stories/:postID", async (req, res) => {
    try{
        const stories = await Story.updateOne(
            { _id: req.params.postID },
            {$set: {
                title:req.body.title,
                name: req.body.name,}
            }
        )
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})


//messages
router.get("/messages", async (req, res) => {
    try{
        const messages = await Message.find()
       res.json(messages)
    }catch (err) {
        res.json({message: err})
    }
}) 

router.get("/messages/:postID", async (req, res) => {
    try{
        const messages = await Message.find({ _id: req.params.postID })
        res.json(messages)
    }catch (err) {
        res.json({message: err})
    }
})

router.post("/messages", async (req, res) =>{
    const message = new Message ( {
        name: req.body.name,
        email: req.body.email,
        betreff: req.body.betreff,
        message: req.body.message
    })

    try{
        const savedMessage = await message.save()
        res.json(savedMessage)
    }catch (err) {
        res.json({Message: err})
    }
})


router.delete("/messages/:postId", async (req, res) => {
    try{
        const removedMessage = await Message.remove({ _id: req.params.postId })
        res.json(removedMessage)
    } catch (err) {
        res.json({Message: err})
    }
})



router.patch("/messages/:postID", async (req, res) => {
    try{
        const stories = await Story.updateOne(
            { _id: req.params.postID },
            {$set: {
                betreff:req.body.betreff,
                email: req.body.email,}
            }
        )
        res.json(stories)
    }catch (err) {
        res.json({message: err})
    }
})



module.exports = router