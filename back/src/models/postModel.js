
//este archivo contiene los modelos de la base de datos
import pool from "../../db/conectionDb.js";

const getPosts = async () => {
  const SQLquery = { text: "SELECT * FROM posts" }
  try {
    const response = await pool.query(SQLquery)
    return response.rows
  } catch (error) {
    console.log(error)
  }
}

const createPost = async ({ titulo, img, descripcion }) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3, 0) RETURNING * ",
    values: [titulo, img, descripcion]
  }
  try {
    const response = await pool.query(SQLquery)
    return response.rows
  }catch(error){
    console.log(error)
  }
}

const deletePost = async (id) => {
  try {
    const { rows } = await pool.query("DELETE FROM posts WHERE id = $1", [id])
    return rows
  } catch (err) {
    console.error(err)
  }
};

const likePost = async (id) => {
  try {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1"
    const values = [id]
    const { rows } = await pool.query(consulta, values)
    return rows
  } catch(err) {
    console.error(err)
  }
}

export {getPosts, createPost, deletePost, likePost}