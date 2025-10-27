import "./Extraction.css";
function Extractiondata() {
  return (
    <>
        <div className="heading-cell">
        <p className="heading-label">
            Test User
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
                I/182/23-24
            </p>
        </div>
        <div className="heading-cell">
            <p className="heading-label custom-green">
                PO Extracting ...
            </p>
        </div>
        <div className="heading-cell">
            <p className="heading-label custom-cursor ">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-arrow-up-right" 
                viewBox="0 0 16 16">
                <path 
                fill-rule="evenodd" 
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
                </svg>
            </p>
        </div>
    </>
  );
}
function Extractionrow() { 

  return (
    <div className="expandable-box custom-border">
        <div className="box-header row-grid">
          <Extractiondata />
          
        </div>
    </div>
);
}
export default Extractionrow;

