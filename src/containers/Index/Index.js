import React, { Component } from 'react'
import Steps from '../../components/Steps/Steps'
// import RestaurantList from '../../components/RestaurantList/RestaurantList'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Highlight from '../../components/Highlight/Highlight'
import Parallax from '../../components/Parallax/Parallax'
import BlogSection from '../../components/BlogSection/BlogSection'
import Footer from '../../components/Footer/Footer'
import LoginModal from '../../components/LoginModal/LoginModal'
import RegisterModal from '../../components/RegisterModal/RegisterModal'

class Index extends Component {
    render() {
        return (
            <Wrapper>
                <Steps />
                <Highlight />
                <Parallax />
                <BlogSection />
                <Footer />
                <LoginModal />
                <RegisterModal />
                {/* <RestaurantList /> */}
            </Wrapper>
        )
    }

}

export default Index