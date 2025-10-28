import 'bootstrap/dist/css/bootstrap.min.css';
import './ewaybill.css';
function Ewaybill(){
    const handleSelect = (key) => {
    };
    return(
        <>

                <div className="newcontract-top-left">
                    <div className="btn btn-dark px-5">Import</div>
                    <div className="btn btn-light px-5">Export</div>
                </div>
                <div className="newcontract-top-right custom-flex">
                    <div className="btn btn-dark px-5">Sea</div>
                    <div className="btn btn-light px-5">Air</div>
                </div>
                <div className="newcontract-middle-left custom-display">
                    <div className='h4' >
                    Final Bill of Entry
                    </div>
                    <div className='icon-div'>
                        <div className="heading-cell">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" 
                                fill="currentColor"
                                class="bi bi-upload"
                                viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>   
                        </div>
                        <div className="heading-cell">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" 
                            fill="currentColor"
                            class="bi bi-arrow-up-right"
                            viewBox="0 0 16 16">
                        <   path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </div>
                        <div className="heading-cell">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20"
                                fill="currentColor"
                                class="bi bi-download"
                                viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                        </div>
                        <div className="heading-cell">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" 
                                fill="currentColor" 
                                class="bi bi-trash3" 
                                viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="newcontract-middle-right"></div>
                <div className="newcontract-bottom">
                    <div className='btn btn-secondary'>Generate E-Way Bill</div>
                </div>

        </>
    );
}   
export default Ewaybill;