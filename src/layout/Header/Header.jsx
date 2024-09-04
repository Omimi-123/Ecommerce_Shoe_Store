import React from 'react'
import style from './Header.module.css';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icon-cart.svg';
import avater from '../../assets/image-avatar.png';
import menu from '../../assets/icon-menu.svg'
export default function Header() {
    return (

        <section className={style.nav}>
            <header>
                <div className={style.tags}>
                    <div className={style.menulogo}>
                        <div>
                            <div className={style.dropdown}>
                                <button className={style.dropbtn}>
                                    <img className={style.menu_logo} src={menu} alt="menu" />
                                </button>
                                <div className={style.dropdown_content}>
                                    <a href="">Collections</a>
                                    <a href="">Men</a>
                                    <a href="">Women</a>
                                    <a href="">About</a>
                                    <a href="">Contact</a>
                                </div>
                            </div>
                        </div>
                        <img className={style.logo} src={logo} alt="logo" />
                    </div>
                    <div className={style.menu}>
                        <a href="">Collections</a>
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className={style.tags}>
                    <div><img src={cart} alt="icon-cart" /></div>
                    <img className={style.image_avatar} src={avater} alt="image-avatar" />
                </div>
            </header>
        </section>

    )
}
