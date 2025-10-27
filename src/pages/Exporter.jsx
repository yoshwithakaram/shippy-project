import 'bootstrap/dist/css/bootstrap.min.css';
import Dataheader from "../components/Dataheader/Dataheader";
import Subheader from "../components/Subheader/Subheader";

function Exporter(){
    return(
        <>
        <div className='main-layout-container-exporter'>

            <div className="header2-layout">
                <Subheader/>
            </div>
            <div className="data-header-layout">
                <Dataheader/>
            </div>
            <div className="main-layout">
  
            </div>
        </div>

        
        </>

    );
}
export default Exporter