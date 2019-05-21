import React from 'react'

const Parallax = () => {
    return (
        <section className="parallax-window" data-parallax="scroll" data-image-src="/assets/img/bg_office.jpg" data-natural-width="1200" data-natural-height="600">
            <div className="parallax-content">
                <div className="sub_content">
                    <i className="icon_mug"></i>
                    <h3>We also deliver to your office</h3>
                    <p>
                        Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Parallax