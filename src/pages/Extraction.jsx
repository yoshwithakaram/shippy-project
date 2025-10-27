import 'bootstrap/dist/css/bootstrap.min.css';
import Extractionheader from '../components/Extractionheader/Extractionheader';
import Extractiondata from '../components/Extractionheader/Extractiondata';
import  {Form} from 'react-bootstrap';
function Extraction(){
    return(
        <>
        <div className="main-layout-container-exporter">
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
                    <div className="btn btn-dark"> Create new</div> 
                </div>             
            </div>
            
                <div className="data-header-layout ">
                    <Extractionheader/>                
                </div>
                <div className="main-layout">
                <div className="data-rows-layout">
                    <Extractiondata/>
                    <Extractiondata/>
                    <Extractiondata/>
                    <Extractiondata/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Extraction;