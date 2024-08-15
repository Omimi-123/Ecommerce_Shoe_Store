import React from 'react'
import style from './Footer.module.css'
// import logo from '../../assets/logo.svg';
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg'
import logo2 from '../../assets/logo2.svg';

function Footer() {
    return (
        <div className={style.footer_section}>
            <div className={style.layout_3}>
                <div><img src={logo2} className={style.logo2} alt="logo" /></div>
                <div className={style.bottom_section}>
                    <div>
                        <div className={style.bottom_link1}><img src={phone} alt="phone" className={style.bottom_icons} />
                            <a href="" >phone: +1-543-123-4567 </a>
                        </div>
                        <div className={style.bottom_link1}><img src={email} alt="email" className={style.bottom_icons} />
                            <a href="" >omimi@sneaker.com</a>
                        </div>
                    </div>
                    <div className={style.bottom_link2}><a href="">About Us</a><a href="">jobs</a><a href="">Press</a><a href="">Blog</a>
                    </div>
                    <div className={style.bottom_link2}><a href="">Contact Us</a><a href="">Terms</a><a href="">Privacy</a></div>
                    <div className={style.bottom_link2}>
                        <div className={style.bottom_link3}>
                            <i className={style.fa_fa_facebook}></i><i className={style.fa_fa_twitter}></i>
                            <i className={style.fa_fa_instagram}>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer