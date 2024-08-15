import React from 'react'
import Header from '../layout/Header/Header'
import Index from '../component/Index/Index'
import Listing from '../component/Listings/Listing'
import Footer from '../layout/Footer/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Index />
            <Listing />
            <Footer />


        </div>

    )
}

export default Home