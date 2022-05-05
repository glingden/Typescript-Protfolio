import React from "react";
import BlogCard, {BlogCardPropsType} from "./BlogCard";

import '../../styles/_blog.scss';



type BlogPropsType ={
  BlogItemData: BlogCardPropsType[];
}


const Blog = ({BlogItemData}: BlogPropsType) => {
    return (
      <section className="blog" id="blogs" tabIndex={0}>
        <hr />
        <h2 className="blog__title">Blogs</h2>
        <hr />
        {BlogItemData.map((blog) => (
        <BlogCard key={blog.id} img ={blog.img} alternative ={blog.alternative} title = {blog.title} text = {blog.text}  />
        ))}
      
      </section>
  
  );
}
 
export default Blog;