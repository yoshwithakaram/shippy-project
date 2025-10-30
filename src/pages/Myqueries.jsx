
import { Form } from "react-bootstrap";
import Myqueriesheader from "../components/Myqueries/Myqueriesheader";
import Myqueriesheader2 from "../components/Myqueries/Myqueriesheader2";
import Myqueriesdatarow from "../components/Myqueries/Myqueriesdatarow";

function Myqueries() {
    return(
        <>
        <div className="myqueries-wrapper">
            <div className="header1-layout">
                <Myqueriesheader/>
            </div>
            <div className="main-layout-container-myqueries">
                <div className="header2-layout d-flex justify-content-end align-items-center"> 
                    
                    <div className="subheader-sec-right">
                        <div className="btn btn-dark">New Query</div> 
                    </div>
                </div>            
                <div className="data-header-layout">
                    <Myqueriesheader2/>
                </div>
            
                <div className="main-layout">
                    <div className="data-rows-layout">
                        <Myqueriesdatarow/>
                        <Myqueriesdatarow/>
                        
                    </div>
                </div>
            </div>
        </div>
        
                
                 
        
        
        </>
    );
}
export default Myqueries;
