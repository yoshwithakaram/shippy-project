import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Navbarcomponent from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
 
     
/**
 * DATA FLOW: Home Component - Main Layout Wrapper
 * 
 * This component provides the persistent layout structure for the entire application.
 * It contains three main sections that remain visible across all pages:
 * 
 * 1. Navbar (top) - Application header
 * 2. Sidebar (left) - Navigation menu with route buttons
 * 3. Outlet (center/right) - Dynamic content area where child routes render
 * 
 * Data Flow:
 * - User navigates via Sidebar buttons → URL changes → Router matches route → 
 *   Component renders in <Outlet /> below
 * 
 * Layout Pattern: Fixed sidebar/navbar + dynamic content area
 */
function Home(){
    return(
        <>
            <div className="container-layout">
                {/* DATA FLOW: Navbar renders at top - persistent across all routes */}
                <div className="navbar-layout">
                    <Navbarcomponent/>
                </div>
                {/* DATA FLOW: Sidebar contains navigation - triggers route changes via useNavigate() */}
                <div className="sidebar-layout">
                    <Sidebar/>
                </div>
                {/* DATA FLOW: Outlet is where child route components render (Dashboard, Newcontract, etc.) */}
                <div className="main-layout-container">
                    <Outlet/>
                </div>
                
            </div>
        
        </>

    );
}

export default Home