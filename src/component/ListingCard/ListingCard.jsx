import React from 'react'
import style from './ListingCard.module.css'
import { Link } from 'react-router-dom'


function ListingCard({ img, title, tagOne, tagTwo, tagThree, tagsize }) {
    return (
        <div className={style.ListingCard}>
            <Link to="/Product_detail"> <img src={img} alt={title} /></Link>
            <Link to="/Product_detail"><h3>{title}</h3></Link>
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