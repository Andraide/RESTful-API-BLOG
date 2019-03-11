




let store=require('./data')











module.exports = {
  
    getComments(postid, res) {
      
 
      return store.posts[postid].comments 
    
  }, 
  addComments(req,idpost, res) {
      
      
      let comment=req
      let id=store.posts[idpost].comments.length  //no es de interes porque push lo realiza solo
      console.log(id)
      store.posts[idpost].comments.push(comment)
      return store.posts[idpost].comments[id]
      
      
      
      
    
  },
  updateComments(newcomments,idpost,idcomment, res) {
      console.log( store.posts[idpost].comments[idcomment])
      let newcomment=newcomments
      store.posts[idpost].comments[idcomment]=newcomment
      
      return   store.posts[idpost].comments[idcomment]
      
      
    
  },
  removeComments(req,idpost,idcomment, res) {
      
      store.posts[idpost].comments.splice(idcomment,1)
      return "comentario borrado"
      
      
    
  }  
}