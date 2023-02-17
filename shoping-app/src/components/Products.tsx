import React, {FC} from 'react'
import { POST } from './../types/types';
interface PostProps {
  post: POST
}
const Products:FC<PostProps> =(props) => {
  console.log({props});
  
  return (
    <div style={{}}>
      <div style={{}}>
      <img width='350px' src={props.post.image}/>
      </div>
      <div style={{}}>
      <span>{props.post.title}</span>
      <span style={{}}>{props.post.price}</span>
      </div>
      <div>{props.post.cetegory}</div>
    </div>
  )
}

export default Products