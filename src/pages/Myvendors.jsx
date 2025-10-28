import 'bootstrap/dist/css/bootstrap.min.css';
import Myvendorsheader from '../components/Myvendors/Myvendorsheader';
import  {Form} from 'react-bootstrap';
import Myvendorsheader2 from '../components/Myvendors/Myvendorsheader2';
import Myvendorsdatarow from '../components/Myvendors/Myvendorsdatarow';
function Myvendors(){
    return(
        <>
        <div className="myvendor-wrapper">
            <div className="header1-layout">
             <Myvendorsheader/>
            </div>
            <div className="main-layout-container-myvendors">
                <div className="header2-layout">   
                    <div className="subheader-sec-left ">                
                        <div className="search-div">
                            <Form className="d-flex">
                                    <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 bg-light"
                                    aria-label="Search"
                                    />                        
                            </Form>
                        </div>
                    </div>
                    <div className="subheader-sec-right">
                        <div className="btn btn-dark">New +</div> 
                    </div>
                </div>            
                <div className="data-header-layout">
                    <Myvendorsheader2/>
                </div>
            
                <div className="main-layout">
                    <div className="data-rows-layout">
                        <Myvendorsdatarow/>
                        <Myvendorsdatarow/>
                        <Myvendorsdatarow/>
                    </div>
                </div>
            </div>
        </div>

      </>
    );
}
export default Myvendors;