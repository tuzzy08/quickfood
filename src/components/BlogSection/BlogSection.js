import React from 'react'
import BlogCard from './BlogCard/BlogCard'

const BlogSection = (props) => {
    const blogcards = [
        {
            classes: 'col-md-4 col-md-offset-2',
            imageUrl: '/assets/img/submit_restaurant.jpg',
            imageWidth: '848',
            imageHeight: '480',
            imageAlt: '',
            heading: 'Submit your Restaurant',
            subHeading: 'Start to earn customers',
            text: `Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam 
            adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, 
            legere eligendi partiendo pro te.`
        },
        {
            classes: 'col-md-4 ',
            imageUrl: '/assets/img/delivery.jpg',
            imageWidth: '848',
            imageHeight: '480',
            imageAlt: '',
            heading: 'We are looking for a Driver',
            subHeading: 'Start to earn money',
            text: `Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam 
            adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, 
            legere eligendi partiendo pro te.`
        },
        // {
        //     imageUrl: '',
        //     imageWidth: '848',
        //     imageHeight: '480',
        //     imageAlt: '',
        //     heading: 'New outlet opened',
        //     subHeading: 'Details Here',
        //     text: `Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam 
        //     adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, 
        //     legere eligendi partiendo pro te.`
        // },
        
    ]
    return (
        <div className="container margin_60">
            <div className="main_title margin_mobile">
                    <h2 className="nomargin_top">Work with Us</h2>
                    <p>
                        Cum doctus civibus efficiantur in imperdiet deterruisset.
                    </p>
                </div>
                <div className="row">
                    { blogcards.map((card, index) => {
                        return <BlogCard blogdata = { card } key={index} />
                    })}
            </div>
        </div>
    )
}

export default BlogSection