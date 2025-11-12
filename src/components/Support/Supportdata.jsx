import "./Support.css";

function Supportdata() {
  return (
    <>
    <div className="heading-cell">
        <p className="heading-label">
        #C855456466
        </p>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="m-0">tesyr</p></div>               
            </div>
        </div>
        <div className="heading-cell">
            <div className="heading-label">
                <div><p className="m-0">CHA Related</p></div>
            </div>
        </div>        
        <div className="heading-cell">
            <p className="heading-label">
                09/06/2025
            </p>
        </div>
        <div className="heading-cell">
            <p className="heading-label custom-green">
                <div className="btn btn-light custom-green bordar-green">Open</div>
            </p>
        </div>
        <div className='MyExporter-btn-div'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-arrow-up-right" 
                viewBox="0 0 16 16">
                <path 
                fillRule="evenodd" 
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-chat-square" 
                viewBox="0 0 16 16">
                <path 
                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                />
                </svg>
        </div>
    </>
  );
}
function Supportrow() { 

  return (
    <div className="expandable-box custom-border">
        <div className="box-header row-grid">
          <Supportdata /> 
        </div>
    </div>    
  );
}
export default Supportrow;
