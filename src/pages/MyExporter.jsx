import 'bootstrap/dist/css/bootstrap.min.css';
import Dataheader from "../components/Dataheader/Dataheader";
import Subheader from "../components/Subheader/Subheader";
import { Form } from 'react-bootstrap';
import Datarow from '../components/Datarow/Datarow';
import MyExporterDataRow from '../components/MyExporter/MyExporterDataRow';
import MyExporterDataHeader from '../components/MyExporter/MyExporterDataHeader';

function MyExporter(){
    return(
        <>
        <div className='main-layout-container-exporter'>
            <div className="header2-layout">
                <div className="subheader-sec-left">
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
                    <div className="btn btn-dark">
                        New +
                    </div>
                </div>          
            </div>
            
            <div className="data-header-layout">
                <MyExporterDataHeader/>
            </div>
            <div className="main-layout">
                <MyExporterDataRow/>
                <MyExporterDataRow/>
                <MyExporterDataRow/>
            </div>
        </div>

        
        </>

    );
}
export default MyExporter