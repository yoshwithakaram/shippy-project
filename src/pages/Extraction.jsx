import 'bootstrap/dist/css/bootstrap.min.css';
import Extractionheader from '../components/Extractionheader/Extractionheader';
import Extractiondata from '../components/Extractionheader/Extractiondata';
import  {Form} from 'react-bootstrap';
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
            <Extractionheader/>                
        </div>
        <div className="data-rows-layout">
            <Extractiondata/>
        </div>
        </>
    );
}
export default Extraction;