import { Tabs, Tab } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.includes('newcontract-import')) return 'Import';
    if (location.pathname.includes('newcontract-export')) return 'Export';
    if (location.pathname.includes('ewaybill')) return 'E-way Bill';
    return null;
  };

  return (
    <div className="headerbar-div">
      <div className="tab-wrapper-left">
        <Tabs
          activeKey={getActiveTab()}
          onSelect={(key) => {
            if (key === 'Import') navigate('/newcontract/newcontract-import');
            else if (key === 'Export') navigate('/newcontract/newcontract-export');
            else if (key === 'E-way Bill') navigate('/newcontract/ewaybill');
          }}
          className="header-nav-tabs"
        >
          <Tab eventKey="Import" title="Import" />
          <Tab eventKey="Export" title="Export" />
          <Tab eventKey="E-way Bill" title="E-way Bill" />
        </Tabs>
      </div>
    </div>
  );
}

export default Header