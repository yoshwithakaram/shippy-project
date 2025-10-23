import 'bootstrap/dist/css/bootstrap.min.css';
import './Subheader.css'
import { Dropdown, Form } from 'react-bootstrap';

function Subheader(){
    return(
        <>
        <div className="subheader-sec-left">
        <Dropdown>
            <Dropdown.Toggle>
                Select Any One
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Exporter</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Importer action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Contract ID</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
                <Dropdown.Item href="#/action-2">PO Number</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Status</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Inco terms</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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
                New Contract
            </div>
        </div>

        </>
    );

}

export default Subheader