import  {Form} from 'react-bootstrap';
import Supportheader from '../components/Support/Supportheader';
import Supportdata from '../components/Support/Supportdata';
function Support() {
  return (
    <>
    <div className="main-layout-container-support">
            <div className="header2-layout">   
                <div className="subheader-sec-left ">                
                    <div className="search-div ">
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
                    <div className="btn btn-dark">New Ticket +</div> 
                </div>             
            </div>
            
                <div className="data-header-layout ">
                    <Supportheader/>                
                </div>
                <div className="main-layout">
                <div className="data-rows-layout">
                    <Supportdata/>
                    <Supportdata />
                    <Supportdata/>
                </div>
            </div>
        </div>
    </>
  );
}
export default Support;