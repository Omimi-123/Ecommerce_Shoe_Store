import React from 'react'
import style from './ListingCard.module.css'


function ListingCard({ img, title, tagOne, tagTwo, tagThree, tagsize }) {
    return (
        <div className={style.ListingCard}>
            <a href="/Product_detail"> <img src={img} alt={title} /></a>
            <a href="/Product_detail"><h3>{title}</h3></a>
            <div className={style.tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
            <p>{tagsize}</p>
        </div>
    )
}

export default ListingCard