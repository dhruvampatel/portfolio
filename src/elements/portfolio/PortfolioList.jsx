import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'React Native, Android, IOS',
        title: 'Food Delivery',
        link: 'https://github.com/dhruvampatel/ReactNative-FoodDelivery',
    },
    {
        image: 'image-2',
        category: 'IOS',
        title: 'Swift-19 A Virus Outbreak',
        link: 'https://github.com/dhruvampatel/Swift-19',
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show',
        link: 'https://github.com/dhruvampatel/ReactNative-FoodDelivery',
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show',
        link: 'https://github.com/dhruvampatel/ReactNative-FoodDelivery',
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show',
        link: 'https://github.com/dhruvampatel/ReactNative-FoodDelivery',
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show',
        link: 'https://github.com/dhruvampatel/ReactNative-FoodDelivery',
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`} style={{opacity:0.45}}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.link} target="_BLANK">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;