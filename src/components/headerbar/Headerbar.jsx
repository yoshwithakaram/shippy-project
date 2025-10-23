import { Tab, Tabs } from 'react-bootstrap';
import './Headerbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Headerbar(){
    const [activeTab, setActiveTab] = useState(null); // no tab active initially

    const handleSelect = (key) => {
        setActiveTab(prev => (prev === key ? null : key));
    };


    return(
        <>
        <div className="headerbar-div">
            <div className="tab-wrapper-left">
                <Tabs
                defaultActiveKey="All"                         
                className='header-nav-tabs'            
                >
                
                    <Tab eventKey="All" title="All">
                    </Tab>
                    <Tab eventKey="Import" title="Import">
                    </Tab>
                    <Tab eventKey="Export" title="Export" >
                    </Tab>
                </Tabs>
            </div>
            <div className="tab-wrapper-right">
                <Tabs
                activeKey={activeTab}
                onSelect={handleSelect}                    
                className='header-nav-tabs'            
                >
                    <Tab eventKey="Tasks" title={
                        <div className="task-header">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            className="bi bi-list-task" 
                            viewBox="0 0 16 16">
                            <path 
                            fillRule="evenodd" 
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"
                            />
                            <path 
                            d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"
                            />
                            <path 
                            fillRule="evenodd" 
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"
                            />
                            
                            </svg>
                            <p className="task-title">Tasks</p>

                        </div>
                        }
                        >
                    </Tab>
                </Tabs>
            </div>                          
        </div>                      
        </>
    );

}

export default Headerbar