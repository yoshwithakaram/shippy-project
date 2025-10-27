import { Tab, Tabs } from 'react-bootstrap';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Header(){
    const [activeTab, setActiveTab] = useState(null); // no tab active initially

    const handleSelect = (key) => {
        setActiveTab(prev => (prev === key ? null : key));
    };


    return(
        <>
     
        <div className="headerbar-div"> 
            <div className="tab-wrapper-left">
                <Tabs
                defaultActiveKey="Import"                         
                className='header-nav-tabs'          
                >
                
                    <Tab eventKey="Import" title="Import">
                    </Tab>
                    <Tab eventKey="Export" title="Export">
                    </Tab>
                    <Tab eventKey="E-way Bill" title="E-way Bill" >
                    </Tab>
                </Tabs>
            </div>                         
        </div>
        </>
    );

}

export default Header;