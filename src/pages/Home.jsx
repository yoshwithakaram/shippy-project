import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Navbarcomponent from '../components/navbar/Navbar';
import Headerbar from '../components/headerbar/headerbar';
import Subheader from '../components/Subheader/Subheader';
import Dataheader from '../components/Dataheader/Dataheader';
import Datarow from '../components/Datarow/Datarow';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import Newcontract from './Newcontract';
import Extraction from './Extraction';      
function Home(){
    return(
        <>
            <div className="container-layout">
                <div className="navbar-layout">
                    <Navbarcomponent/>
                </div>
                <div className="sidebar-layout">
                    <Sidebar/>
                </div>
                <div className="main-layout-container">
                    <Outlet/>
                </div>
                
            </div>
        
        </>

    );
}

export default Home