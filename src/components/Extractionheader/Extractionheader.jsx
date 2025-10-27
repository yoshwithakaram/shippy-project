import 'bootstrap/dist/css/bootstrap.min.css';
function Extractionheader(){
    return(
        <>
        <div className="container-data-div row-grid">
            <div className="heading-cell">
                <p className="heading-label-head">EX/IM</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-caret-down-fill" 
                    viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    />
                    </svg>
                </span>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Extraction ID</p>
            </div>
            <div className="heading-cell">
                <p className="heading-label-head">Date</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-caret-down-fill" 
                    viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    />
                    </svg>                    
                </span>
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