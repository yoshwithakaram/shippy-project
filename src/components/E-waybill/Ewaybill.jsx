import 'bootstrap/dist/css/bootstrap.min.css';

function Ewaybill(){
    const handleSelect = (key) => {
    };
    return(
        <>

                <div className="bill-top-left">
                    <div className="btn btn-dark px-5">Import</div>
                    <div className="btn btn-light px-5">Export</div>
                </div>
                <div className="bill-top-right">
                    <div className="btn btn-dark px-5">Sea</div>
                    <div className="btn btn-light px-5">Air</div>
                </div>

        </>
    );
}   
export default Ewaybill;