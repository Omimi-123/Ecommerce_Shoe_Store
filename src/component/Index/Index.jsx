import React from 'react'
import style from './Index.module.css';

export default function Index() {
    return (
        <section className={style.home}>
            <div className={style.welcome}>
                <h1>New arrivals are here</h1>
                <h2>The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch
                    release
                    while
                    they're still in stock.</h2>
                <button>Shop New Arrival</button>
            </div>
        </section>
    )
}
