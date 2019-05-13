import React from 'react'

const BlogCard = (props) => {
    return (
        <div className={props.blogdata.classes}>
            <a className="box_work" href="submit_restaurant.html">
            <img src={props.blogdata.imageUrl} 
            width={props.blogdata.imageWidth} 
            height={props.blogdata.imageHeight} 
            alt={props.blogdata.imageAlt} 
            className="img-responsive"/>
            <h3>{props.blogdata.heading}<span>{props.blogdata.subHeading}</span></h3>
            <p>{props.blogdata.text}</p>
            <div className="btn_1">Read more</div>
            </a>
        </div>
    )
}

export default BlogCard