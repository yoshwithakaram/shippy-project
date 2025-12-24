import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Newcontractheader/Header';
import { Outlet } from 'react-router-dom';

function Newcontract() {
  return (
    <div className='main-layout-container-newcontract'>
      <div className="header1-layout">
        <Header />
      </div>
      <div className='newcontract-main'>
        <Outlet />
      </div>
    </div>
  );
}

export default Newcontract;