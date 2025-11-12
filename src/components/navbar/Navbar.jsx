import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Dropdown, Form, Image, Navbar, Offcanvas } from 'react-bootstrap';
import "./Navbar.css";
import { useLocation } from 'react-router-dom';


function Navbarcomponent(){
    const location = useLocation();

    // Map route paths to display names
    const getPageTitle = () => {
        if (location.pathname.includes('/analytics')) return 'Analytics';
        if (location.pathname.includes('/dashboard')) return 'Dashboard';
        if (location.pathname.includes('/newcontract')) return 'New Contract';
        if (location.pathname.includes('/exporter')) return 'My Exporters';
        if (location.pathname.includes('/myvendors')) return 'My Vendors';
        if (location.pathname.includes('/extraction')) return 'Extraction';
        if (location.pathname.includes('/support')) return 'Support';

        return 'Home'; // fallback
    };

    return(
        <>
        <div className="navbar shadow-sm">
            <div className="section1">
                <div className="backbutton btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    fill="currentColor" 
                    className="bi bi-arrow-left-circle" 
                    viewBox="0 0 16 16">
                     <path 
                     fillRule="evenodd" 
                     d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                     />
                    </svg>
                </div>
                <div className="pagename">
                    <h2 className='p-0 m-0'>{getPageTitle()}</h2>
                </div>
            </div>

            <div className="section2">
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
                <div className="add-div btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    fill="currentColor" 
                    className="bi bi-plus-square-fill" 
                    viewBox="0 0 16 16">
                     <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
                    </svg>
                </div>
                <div className="msg-div btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    fill="currentColor" 
                    className="bi bi-envelope" 
                    viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                </div>
                <div className="notification-div btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    fill="currentColor" 
                    className="bi bi-bell-fill" 
                    viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                    </svg>
                </div>
                <div className="announcement-div btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    fill="currentColor" 
                    className="bi bi-megaphone" 
                    viewBox="0 0 16 16">
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
                    </svg>
                </div>
                <div className="dropdownmenu-div">
                    <Dropdown>
                        <Dropdown.Toggle>
                            <div className="dropdown-img">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                fill="currentColor" 
                                className="bi bi-exclude" 
                                viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"/>
                                </svg>                        
                            </div>
                            <div>
                                <p>Importer</p>
                            </div>                           

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Billing</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
}

export default Navbarcomponent