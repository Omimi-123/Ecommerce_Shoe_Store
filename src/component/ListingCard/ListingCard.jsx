import React from 'react'
import style from './ListingCard.module.css'


function ListingCard({ img, title, tagOne, tagTwo, tagThree }) {
    return (
        <div className={style.ListingCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className={style.tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
        </div>
    )
}

export default ListingCard