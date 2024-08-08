import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import style from './Listing.module.css'
import { ListingData } from '../../../data'

function Listing() {
    return (
        <section className={style.Listing_container}>
            <div className={style.Listing_content}>
                <h2>Listings</h2>
            </div>
            <div className={style.Listing_card}>
                {ListingData.map((item, idx) => {
                    return (<ListingCard
                        img={item.img}
                        tagOne={item.tagOne}
                        tagTwo={item.tagTwo}
                        tagThree={item.tagThree}
                        title={item.title}
                        key={idx}
                    />
                    );
                })}
            </div>
        </section>
        // <h1>hello eedhdfhfv </h1>
    )
}

export default Listing