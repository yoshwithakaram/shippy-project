import { Tab, Tabs } from "react-bootstrap";

function Myqueriesheader(){
    return (
        <>
        <div className="headerbar-div">
            <div className="tab-wrapper-left">
                            <Tabs
                            defaultActiveKey="Open"                         
                            className='header-nav-tabs'            
                            >                        
                                <Tab eventKey="Open" title="Open">
                                </Tab>
                                <Tab eventKey="Closed" title="Closed">
                                </Tab>                                
                            </Tabs>
            </div>                               
                        
        </div>                             
                                
        
        </>
    );
}
export default Myqueriesheader;
