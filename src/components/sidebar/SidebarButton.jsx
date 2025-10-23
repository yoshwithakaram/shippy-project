import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function SidebarButton({icon, label,onClick}){
    return(
        <>
        <div className='sidebar-div btn'onClick={onClick} >
            <div>
                {icon}
            </div>  
            <div>
                <span><h6>{label}</h6></span> 
            </div>
        </div>

        
        </>
    );


}

export default SidebarButton