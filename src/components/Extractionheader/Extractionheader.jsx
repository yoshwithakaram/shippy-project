import 'bootstrap/dist/css/bootstrap.min.css';
function Extractionheader(){
    return(
        <>
        <div className="container-data-div row-grid">
            <div className="heading-cell">
                <p className="heading-label-head">EX/IM</p>               
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Extraction ID</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Date</p>               
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">PO Number</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Status</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head"></p>
            </div>
        </div>
        </>

    );

}
export default Extractionheader;