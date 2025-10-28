import 'bootstrap/dist/css/bootstrap.min.css';
import Dataheader from "../components/Dataheader/Dataheader";
import Datarow from "../components/Datarow/Datarow";
import Headerbar from "../components/headerbar/headerbar";
import Subheader from "../components/Subheader/Subheader";
import { Outlet } from 'react-router-dom';



function Dashboard(){
    return(
        <>
        <div className='main-layout-container-dashboard'>
            <div className="header1-layout">
                <Headerbar/>
            </div>
            <div className="header2-layout">
                <Subheader/>
            </div>
            <div className="data-header-layout">
                <Dataheader/>
            </div>
            <div className="main-layout">
                <Outlet/>
            </div>
        </div>

        
        </>
    );
}

export default Dashboard