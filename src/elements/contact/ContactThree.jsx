import React, { Component } from "react";
import { FiSmartphone, FiMail, FiMapPin } from "react-icons/fi";

class ContactThree extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact</h2>
                                <p className="description">I am available for full-time job. Get in touch:</p>

                                <p className="description" style={{textDecoration:"underline"}}><a href="tel:(+1)647-323-1578"><span className="icon" style={{marginRight:10}}><FiSmartphone /></span>(+1) 647-323-1578</a></p>
                                <p className="description" style={{textDecoration:"underline"}}><a href="mailto:dhruvam.sp2@gmail.com"><span className="icon" style={{marginRight:10}}><FiMail /></span>dhruvam.sp2@gmail.com</a></p>
                                <p className="description" style={{textDecoration:"underline"}}><a><span className="icon" style={{marginRight:10}}><FiMapPin /></span>Toronto, Ontario</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`https://i.imgur.com/gjpuQFI.jpg`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;