


let store=require('./data')






module.exports = {

 
    
    
    
    
    getPosts(req, res) {
      
    //segun el post que selecciono y va al servidor a requerido
    
  
       return JSON.stringify(store.posts,null,2)
    
    
     
    
    
    
    },

    addPosts(req, res) {

  
    
    
        let post=req
        store.posts.push(post)
        let id=store.posts.length
        console.log(id)
        return post
        
        
        
         
    
    
    
    },
  


    updatePost(req,req1, res) {
        
        
        //para update del post este debe ser si o si el mismo
        
               
          console.log(store.posts[req1])
          store.posts[req1]=req
          
          return store.posts[req1]          
        
              
    




            },
  
    
    removePost(req,res) {
        
        
        
             
             store.posts.splice(req,1)
        
  
    
       




             }
}
 
