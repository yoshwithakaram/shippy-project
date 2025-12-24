import 'bootstrap/dist/css/bootstrap.min.css';
import Dataheader from "../components/Dataheader/Dataheader";
import Datarow from "../components/Datarow/Datarow";
import Headerbar from "../components/headerbar/headerbar";
import Subheader from "../components/Subheader/Subheader";
import { Outlet } from 'react-router-dom';



/**
 * DATA FLOW: Dashboard Component - Main Dashboard Layout
 * 
 * This component provides the layout structure for the dashboard section.
 * It contains:
 * 1. Headerbar - Top bar with dashboard title/controls
 * 2. Subheader - Tab navigation (All/Import/Export)
 * 3. Dataheader - Column headers for the data table
 * 4. Outlet - Dynamic content area for dashboard tabs (DashboardAll, DashboardImport, DashboardExport)
 * 
 * Data Flow:
 * - User clicks tab in Subheader → navigate() changes URL → Router matches nested route → 
 *   Tab component (DashboardAll/Import/Export) renders in <Outlet />
 * 
 * Nested Routing Pattern: Dashboard acts as parent layout for its child tab routes
 */
function Dashboard(){
    return(
        <>
        <div className='main-layout-container-dashboard'>
            {/* DATA FLOW: Headerbar displays dashboard title and action buttons */}
            <div className="header1-layout">
                <Headerbar/>
            </div>
            {/* DATA FLOW: Subheader contains tab buttons that navigate between dashboard views */}
            <div className="header2-layout">
                <Subheader/>
            </div>
            {/* DATA FLOW: Dataheader shows column headers (EX/IM, Contract ID, Date, PO Number, Status) */}
            <div className="data-header-layout">
                <Dataheader/>
            </div>
            {/* DATA FLOW: Outlet renders the selected tab content (All/Import/Export) */}
            <div className="main-layout">
                <Outlet/>
            </div>
        </div>

        
        </>
    );
}

export default Dashboard