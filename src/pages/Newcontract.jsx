import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Newcontractheader/header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Newcontract() {
    return(
        <>
        <div className='main-layout-container-newcontract'>
        <div className="header1-layout"> {/*present in Dashboard.jsx and App.css*/}
            <Header/>
        </div>
        <div className='row2-div'>
            <div className='button-div'>
                <button type="button" class="btn btn-secondary">Sea</button>
                <button type="button" class="btn btn-light">Air</button>
            </div>
            <div className='left-div'>
                <h4>Inco Terms</h4>
                <div className='dropdown-div'>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </div>
            </div>
       </div>
        </div>
        </>
       
    );
}
export default Newcontract;