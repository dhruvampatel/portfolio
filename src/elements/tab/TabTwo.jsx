import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Education",
        tab3 = "Experience",
        tab4 = "Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className="row" style={{width:'100%'}}>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/android-os.png" style={{width: 35, height: 35}}/> Android
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/ios/24/000000/mac-os.png" style={{width: 35, height: 35}}/> IOS
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/react-native.png" style={{width: 35, height: 35}}/> React
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" style={{width: 35, height: 35}}/> Java
                                                </div>
                                            </div>
                                            <div className="row" style={{width:'100%', marginTop:20}}>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/swift.png" style={{width: 35, height: 35}}/> Swift
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/css3.png" style={{width: 35, height: 35}}/> CSS
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/html-5.png" style={{width: 35, height: 35}}/> HTML
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/javascript.png" style={{width: 35, height: 35}}/> JS
                                                </div>
                                            </div>
                                            <div className="row" style={{width:'100%', marginTop:20}}>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/kotlin.png" style={{width: 35, height: 35}}/> Kotlin
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                    <img src="https://img.icons8.com/color/48/000000/spring-logo.png" style={{width: 35, height: 35}}/> Spring
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                <img src="https://img.icons8.com/color/48/000000/firebase.png" style={{width: 35, height: 35}}/> Firebase
                                                </div>
                                                <div className="col-md-3" style={{color:"white"}}>
                                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" style={{width: 35, height: 35}}/> Nodejs
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Mobile Application Development and Strategy <span>- George Brown</span></a> 2020 - 2020
                                               </li>
                                               <li>
                                                   <a>Bachelor's in Computer Application<span>- SLICA, India</span></a> 2016 - 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Android and IOS Developer<span> - BrainItOn</span></a> Jan 2019 - Nov 2019
                                               </li>
                                               <li>
                                                   <a>React Native Developer<span> - Newsly</span></a> Sept 2020 - Dec 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Oracle Certified Java Developer<span> - Oracle</span></a> 2017
                                               </li>
                                               <li>
                                                   <a>Oracle Certified Web Component Developer<span> - Oracle</span></a> 2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;