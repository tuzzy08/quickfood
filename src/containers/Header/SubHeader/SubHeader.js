import React from 'react'
import Counter from '../../../components/Counter/Counter'

const SubHeader = (props) => {
    const counterData = [
        {
            label: 'Restaurant',
            amount: '2650'
        },
        {
            label: 'People Served',
            amount: '1230'
        },
        {
            label: 'Average Users',
            amount: '5436'
        }
    ]
    return (
        <section className="parallax-window" id="home" data-parallax="scroll" data-image-src="assets/img/sub_header_home.jpg" data-natural-width="1400" data-natural-height="550">
        <div id="subheader">
            <div id="sub_content">
                <h1>Order Takeaway or Delivery Food</h1>
                <p>
                    Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                </p>
                <form method="post" action="list_page.html">
                    <div id="custom-search-input">
                        <div className="input-group ">
                            <input type="text" className=" search-query" placeholder="Your Address or postal code" />
                            <span className="input-group-btn">
                            <input type="submit" className="btn_search" value="submit" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Counter data = {counterData} />
    </section>
    )
}

export default SubHeader