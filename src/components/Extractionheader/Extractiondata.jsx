import "./Extraction.css";
function Extractiondata() {
  return (
    <>
        <div className="heading-cell">
        <p className="heading-label">
            N/A
        </p>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="m-0">C135766660</p></div>               
            </div>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="m-0 underlined">2025-07-31</p></div>
                <div><p className="m-0">15:25:13</p></div>
            </div>
        </div>        
        <div className="heading-cell">
            <p className="heading-label">
                N/A
            </p>
        </div>
        <div className="heading-cell">
            <p className="heading-label custom-green">
                PO Extracting ...
            </p>
        </div>
    </>
  );
}
function Extractionrow() { 

  return (
    <div className="expandable-box">
        <div className="box-header row-grid">
          <Extractiondata />
        </div>
    </div>
);
}
export default Extractionrow;

