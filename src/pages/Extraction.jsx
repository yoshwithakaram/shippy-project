
import  {Form} from 'react-bootstrap';
import Dataheader from "../components/Dataheader/Dataheader";
function Extraction(){
    return(
        <>
        <div className="header2-layout">   
            <div className="subheader-sec-left">                
                <div className="search-div pd-2">
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
                <div className="btn btn-dark"> Create new</div> 
            </div>             
        </div>
        <div className="data-header-layout ">
                <Dataheader/>
        </div>
        </>
    );
}
export default Extraction;