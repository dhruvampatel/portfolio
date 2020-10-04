import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiPhone, FiSmartphone, FiCode } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiSmartphone />,
        title: 'Mobile App Development',
        description: 'I am proficient in developing native apps in Android and IOS and cross-platform apps using react native and similar frameworks.'
    },
    {
        icon: <FiCode />,
        title: 'Website Development',
        description: "Whether it is about making simple website or using cutting-edge technology for building top-of-the-class website, I have good hands on web development."
    },
    {
        icon: <FiMonitor />,
        title: 'Software Development',
        description: "If it is about building software using Java or any other OOP language, I can code smooth."
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
