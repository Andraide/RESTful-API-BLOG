

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())

const post = require ('./routes').post
const comments = require('././routes').comments




 


app.get('/posts', (req,res) => {
    
          res.status(200).send(post.getPosts())
          
                    

})

app.post('/posts', (req,res) => {

         res.status(200).send(post.addPosts(req.body,res)) 

    })



app.put('/posts/:id', (req,res) => {

         res.status(200).send(post.updatePost(req.body,req.params.id,res)) 

    })



app.delete('/posts/:id', (req,res) => {

         res.status(200).send(post.removePost(req.params.id,res)) 

    })


//desde aqui son comments
 

app.get('/posts/:postid/comments/', (req,res) => {

        res.status(200).send(comments.getComments(req.params.postid, res))
    
 

    })



app.post('/posts/:postId/comments/', (req,res) => {

        res.status(200).send(comments.addComments(req.body,req.params.postId, res))
    
 

    })


app.put('/posts/:postId/comments/:commentId', (req,res) => {

         res.status(200).send( comments.updateComments(req.body,req.params.postId,req.params.commentId, res)) 

    })

app.delete('/posts/:postId/comments/:commentId', (req,res) => {

         res.status(200).send( comments.removeComments(req.body,req.params.postId,req.params.commentId, res)) 

    })






app.listen(3000)





