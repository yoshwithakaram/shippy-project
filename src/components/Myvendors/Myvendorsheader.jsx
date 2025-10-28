import { Tab, Tabs } from "react-bootstrap";

function Myvendorsheader(){
    return(
        <>
        <div className="headerbar-div">
                    
                    <div className="tab-wrapper-left">
                        <Tabs
                        defaultActiveKey="All"                         
                        className='header-nav-tabs'            
                        >
                        
                            <Tab eventKey="Freight forwarder" title="Freight forwarder">
                            </Tab>
                            <Tab eventKey="CHA" title="CHA">
                            </Tab>
                            <Tab eventKey="Transporters" title="Transporters" >
                            </Tab>
                        </Tabs>
                    </div>
        </div>          
        </>
    );
}
export default Myvendorsheader;