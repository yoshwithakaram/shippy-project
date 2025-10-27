import 'bootstrap/dist/css/bootstrap.min.css';
import './MyExporter.css'
import '../Dataheader/Dataheader.css'


function MyExporterDataHeader(){
    return(
        <>
        <div className="container-data-div myexporter-row-grid">
            <div className="heading-cell">
                <p className="heading-label-head">Exporter</p>
               
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Email ID</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Region/State</p>

            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Country</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Date Added</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Available In Platform</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head"></p>
            </div>
        </div>
        </>
    );
}

export default MyExporterDataHeader