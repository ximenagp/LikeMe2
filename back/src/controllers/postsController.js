//controlador que recibe y responde, llama a una funcion que se conecta a la BD y responde

import {getPosts, createPost} from '../models/postModel.js'

const getAllPosts = async(req, res) => {
  try{
    const posts = await getPosts()
    res.status(201).json({posts: posts})}
    catch{
    res.status(500).json({error:"error al procesar la solicitud"})
    console.error("Error al procesar la solicitud: ", error)
  }
}

const createPosts =async(req,res) => {
  try{
    const {post} = req.body
    const newProduct = await createPost(post)
    res.status(201).json({post: newProduct})
  }catch(error){
    res.status(500).json({error: "error al procesar la solicitud"})
    console.error("Error al procesar la solicitud: ", error)
  }
}
export {getAllPosts, createPosts}