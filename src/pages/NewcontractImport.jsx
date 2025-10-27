import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


function NewcontractImport(){
    return(
        <>
                <div className="newcontract-top-left">
                    <div className="btn btn-dark px-5">Sea</div>
                    <div className="btn btn-light px-5">Air</div>
                </div>
                <div className="newcontract-top-right">
                    <h4>Inco Terms</h4>
                    <div className='dropdown px-5'>
                    <Form.Select aria-label="Default select example">
                        <option>Select </option>
                        <option value="1">FOB</option>
                        <option value="2">CFR</option>
                        <option value="3">CIF</option>
                    </Form.Select>
                    </div>
                </div>
                <div className="newcontract-middle-left">
                    <h4>Purchase Order</h4>
                </div>
                <div className="newcontract-middle-right">
                    <h4>Select Exporter</h4>
                    <div className='dropdown px-5'>
                    <Form.Select aria-label="Default select example">
                        <option>Select </option>
                        <option value="1">Exporter 2</option>
                        <option value="2">Test User19</option>
                        <option value="3">Verve Greens</option>
                    </Form.Select>
                    </div>
                </div>
                <div className="newcontract-bottom">
                    <div className='buttons'>
                        <div className='btn btn-light px-5'>Cancel</div>
                        <div className='btn btn-secondary px-5'>Save</div>
                        <div className='btn btn-secondary px-5'>Save&Send</div>
                    </div>
                </div>       
        </>

    );
}

export default NewcontractImport