import React from 'react';
import {FaGithub, FaHeart, FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/dhruvampatel/'},
    {Social: <FaGithub /> , link: 'https://github.com/dhruvampatel'}
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-left text-sm-left mb_sm--20">
                                <div className="text">
                                    <p>Made with <span><FaHeart/></span> by Dhruvam Patel</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`} target="_BLANK">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2020 All Rights Reserved.</p>
                            </div>
                            <div className="text">
                            <p>This theme is licensed by <a href="https://themeforest.net/item/trydo-creative-agency-react-template/25457315" target="_BLANK" style={{color:"#f9004d"}}>TryDo - Theme Forest</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;