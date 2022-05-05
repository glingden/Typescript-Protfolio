import React from "react";


export type BlogCardPropsType ={
  id?: number;
  img: string;
  alternative: string;
  title: string;
  text: string;

}

const BlogCard  = (props:BlogCardPropsType) => {
    
    return ( 
    <section className="blog__blog">
        <figure className="blog__figure">
          <img className="blog__img" src={require("../../assets/images/"+ props.img + ".jpg")} alt={props.alternative} />
        </figure>

        <article className="blog_article">
          <h3 className="blog__subtitle">{props.title}</h3>
          <hr />
        
          
          <p className="blog__text">
            {props.text}
          </p>
         <a  className="blog__link" href={"#home"} target="_blank" rel="noopener noreferrer" > Read More</a> 
         
        </article>
        
      </section>
    
     );
}


export default BlogCard;