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
            <div className='newcontract-main'>
                <div className="newcontract-top-left">
                    <div className="btn btn-dark px-5">Sea</div>
                    <div className="btn btn-light px-5">Air</div>
                </div>
                <div className="newcontract-top-right">
                    Hi
                </div>
                <div className="newcontract-middle-left">
                    Hi
                </div>
                <div className="newcontract-middle-right">
                    Hi
                </div>
                <div className="newcontract-bottom">
                    Hi
                </div>
            </div>
        </div>

        </>
       
    );
}
export default Newcontract;