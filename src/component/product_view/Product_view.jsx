import React, { useState } from 'react'
import style from './Product_view.module.css'
import image_product from '../../assets/image-product-1.jpg'
import product_1_thumbnai from '../../assets/image-product-1-thumbnail.jpg'
import product_2_thumbnai from '../../assets/image-product-2-thumbnail.jpg'
import product_3_thumbnai from '../../assets/image-product-3-thumbnail.jpg'
import product_4_thumbnai from '../../assets/image-product-4-thumbnail.jpg'
import icon_minus from '../../assets/icon-minus.svg'
import icon_plus from '../../assets/icon-plus.svg'
import icon_cart from '../../assets/icon-cart.svg'
import icon_previous from '../../assets/icon-previous.svg'
import icon_next from '../../assets/icon-next.svg'



export default function Product_view() {
    const images = [product_1_thumbnai, product_2_thumbnai, product_3_thumbnai, product_4_thumbnai
    ]

    const [previewImage, setPreviewImage] = useState(image_product)
    const handlePreviewImage = (currentItem) => {
        setPreviewImage(currentItem)
    }


    return (
        <section>
            <div>
                <div className={style.first_hero_box1}>
                    <div className={style.prev_next_icon}>
                        <div><a href=""><img src={icon_previous} alt="icon_previous" className={style.prev_next} /></a></div>
                        <div><a href=""><img src={icon_next} alt="icon_next" className={style.prev_next} /></a></div>
                    </div>
                    <img src={previewImage} alt="image_product" className={style.image_product} />
                </div>
            </div>
            <div className={style.section_2}>
                <div className={style.first_hero_box}><img src={previewImage} alt="image_product" />
                    <div className={style.thumbnail}>
                        {images.map((item, index) => (
                            <button key={index} onClick={() => handlePreviewImage(item)}><img src={item} alt="product_thumbnail" /></button>

                        ))}
                    </div>
                </div>
                <div className={style.second_hero_box}>
                    <h5>SNEAKER COMPANY</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <h5>These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
                    </h5>
                    <div className={style.price}>
                        <h2>$125.00</h2>
                        <h3>50%</h3>
                        <div className={style.old_price1}><h5>$250.00</h5></div>
                    </div>
                    <div className={style.old_price}><h5>$250.00</h5></div>
                    <div className={style.add_to_cat}>
                        <div className={style.PLUS_MINUS}>
                            <a href=""><img src={icon_minus} alt="icon_minus" /></a>
                            <input type="text" placeholder='0' />
                            <a href=""><img src={icon_plus} alt="icon_plus" /></a>
                        </div>
                        <button><img src={icon_cart} alt="icon_cart" /><h3> Add to cart</h3></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
